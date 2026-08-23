<?php
class DB extends Database
{
    private static $instance = null;
    private $whereQuery = null;
    private $query = [
        'select' => ['*']
    ];
    public function __construct()
    {
        //Kết nối
        parent::__construct();
    }

    private function table(string $table)
    {
        $this->query['table'] = $table;
        return $this;
    }

    private function where(string $field, string $compare, mixed $value)
    {
        $this->query['where'][] = [
            $field,
            $compare,
            $value
        ];
        return $this;
    }

    private function orWhere(string $field, string $compare, mixed $value)
    {
        $this->query['or_where'][] = [
            $field,
            $compare,
            $value
        ];
        return $this;
    }

    private function select(mixed ...$args)
    {
        $this->query['select'] = $args;
        return $this;
    }

    private function compiler()
    {

        $sqlArray = [];
        if (!empty($this->query['select'])) {
            $selectString = implode(", ", $this->query['select']);
            $sqlArray["SELECT"] = $selectString;
        }

        if (!empty($this->query['table'])) {
            $sqlArray["FROM"] = $this->query['table'];
        }

        if (!empty($this->query['where'])) {
            $subWhere = array_map(function ($item) {
                return implode(' ', $item);
            }, $this->query['where']);

            $whereString = implode(" AND ", $subWhere);

            if (empty($sqlArray['WHERE'])) {
                $sqlArray['WHERE'][] = $whereString;
            } else {
                $sqlArray['WHERE'][] = "AND " . $whereString;
            }
        }


        if (!empty($this->query['or_where'])) {
            $subWhere = array_map(function ($item) {
                return implode(' ', $item);
            }, $this->query['or_where']);

            $whereString = implode(" OR ", $subWhere);

            if (empty($sqlArray['WHERE'])) {
                $sqlArray['WHERE'][] = $whereString;
            } else {
                $sqlArray['WHERE'][] = 'OR ' . $whereString;
            }
        }

        if (!empty($sqlArray['WHERE'])) {
            $sqlArray['WHERE'] = implode(' ', $sqlArray['WHERE']);
        }

        $this->whereQuery = $sqlArray['WHERE'];

        $sqlMap = array_map(function ($key) use ($sqlArray) {
            return $key . ' ' . $sqlArray[$key];
        }, array_keys($sqlArray));

        $sql = implode(' ', $sqlMap);

        $this->resetQuery(); //Reset để không ảnh hưởng đến câu lệnh khác

        return $sql;
    }

    private function resetQuery()
    {
        $this->query = [
            'select' => ['*']
        ];
    }

    private function transformOutput(array $data)
    {
        if (!empty($data[0]) && is_array($data[0])) {
            return array_map(function ($value) {
                return (object)$value;
            }, $data);
        } else {
            return (object)$data;
        }
    }

    private function get()
    {
        $sql = $this->compiler();
        $data = $this->getQuery($sql)->fetchAll(PDO::FETCH_ASSOC);
        return $this->transformOutput($data);
    }

    private function first()
    {
        $sql = $this->compiler();
        $data = $this->getQuery($sql)->fetch(PDO::FETCH_ASSOC);
        return $this->transformOutput($data);
    }

    private function create(array $data = [])
    {
        return $this->createRaw($this->query['table'], $data);
    }

    private function update(array $data = [])
    {
        $table = $this->query['table'];
        $this->compiler();
        $condition = $this->whereQuery;
        $conditionArray = array_values(array_filter(explode(' ', $condition)));
        $data = [
            ...$data,
            $conditionArray[0] => $conditionArray[count($conditionArray) - 1]
        ];
        $conditionArray[count($conditionArray) - 1] = ":" . $conditionArray[0];

        $this->whereQuery = null;

        return $this->updateRaw($table, $conditionArray, $data);
    }

    private function delete()
    {
        $table = $this->query['table'];
        $this->compiler();
        $condition = $this->whereQuery;
        $conditionArray = array_values(array_filter(explode(' ', $condition)));
        $data = [$conditionArray[0] => $conditionArray[count($conditionArray) - 1]];
        $conditionArray[count($conditionArray) - 1] = ":" . $conditionArray[0];
        $this->whereQuery = null;
        return $this->deleteRaw($table, $conditionArray, $data);
    }

    public static function __callStatic(string $name, array $arguments)
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance->$name(...$arguments);
    }

    public function __call(string $name, array $arguments)
    {
        return $this->$name(...$arguments);
    }
}
