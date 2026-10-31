<?php

namespace App\Http\Controllers;

use App\Services\CourseService;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function __construct(private CourseService $courseService) {}
    public function findAll()
    {
        $data = $this->courseService->findAll();
        return $data;
    }

    public function create(Request $request)
    {
        $data = $this->courseService->create($request->all());
        return $data;
    }
}
