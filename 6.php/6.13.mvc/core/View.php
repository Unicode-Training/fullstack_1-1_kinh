<?php

namespace Core;

class View
{
    public static function render(string $path, array $data = [])
    {
        $viewPath = __DIR__ . '/../app/views/' . $path . '.php';

        $contentView = self::getViewContent($viewPath, $data);

        $fullDataRender = null;

        if (!empty($data['layout'])) {
            $layoutPath = __DIR__ . '/../app/views/' . $data['layout'] . '.php';
            $contentLayout = self::getLayoutContent($layoutPath, $data);
            $fullDataRender = str_replace('{body}', $contentView, $contentLayout);
        } else {
            $fullDataRender = $contentView;
        }

        return $fullDataRender;
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

    private static function getLayoutContent(string $layoutPath, array $data = [])
    {
        extract($data);
        ob_start();
        require_once $layoutPath;
        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }
}
