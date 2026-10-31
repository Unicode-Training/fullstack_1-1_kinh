<?php

namespace App\Http\Controllers;

use App\Services\CourseService;
use Illuminate\Http\Request;

class UserCourseController extends Controller
{
    public function __construct(private CourseService $courseService) {}
    public function addCourse(int $userId, int $courseId)
    {
        $data = $this->courseService->addUserToCourse($userId, $courseId);
        return $data;
    }

    public function removeCourse(int $userId, int $courseId)
    {
        $data = $this->courseService->removeUserCourse($userId, $courseId);
        return $data;
    }

    public function syncCourses(int $userId, Request $request)
    {
        $data = $this->courseService->syncCourses($userId, $request->all());
        return $data;
    }

    public function findUsersByCourse(int $courseId)
    {
        $data = $this->courseService->findUsersByCourse($courseId);
        return $data;
    }
}
