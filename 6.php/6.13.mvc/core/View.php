<?php

namespace Core;

class View
{
    public static function render(string $path, array $data = [])
    {
        $viewPath = __DIR__ . '/../app/views/' . $path . '.php';

        $contentView = self::getViewContent($viewPath, $data);

        return $contentView;
    }

    private static function getViewContent(string $viewPath, array $data = [])
    {
        extract($data);
        ob_start();
        require_once $viewPath;
        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }
}
