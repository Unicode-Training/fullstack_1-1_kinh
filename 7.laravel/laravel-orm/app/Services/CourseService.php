<?php

namespace App\Services;

use App\Models\Course;
use App\Models\User;
use Carbon\Carbon;
use Exception;

class CourseService
{
    public function findAll()
    {
        return Course::all();
    }

    public function create(array $body)
    {
        return Course::create($body);
    }

    public function addUserToCourse(int $userId, int $courseId)
    {
        //Đứng từ user
        // - Lấy instance của user
        // - Gọi từ instance user tới relation
        $user = User::find($userId);
        try {
            $user->courses()->attach($courseId, [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        } catch (Exception $e) {
            //
        }
        return $user;
    }

    public function removeUserCourse(int $userId, int $courseId)
    {
        $user = User::find($userId);
        $user->courses()->detach($courseId);
        return $user;
    }

    public function syncCourses(int $userId, array $courseIds = [])
    {
        $user = User::find($userId);
        $user->courses()->syncWithPivotValues($courseIds, [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        return $user;
    }

    public function findUsersByCourse(int $courseId)
    {
        $q = request()->q ?? '';
        $course = Course::with([
            'users' => function ($query) use ($q) {
                $query->where('name', 'like', "%$q%")
                    ->orWhere('email', 'like', "%$q%");
            }
        ])->find($courseId);
        return $course->users;
        // $users = $course->users()->where(function ($query) use ($q) {
        //     $query->where('name', 'like', "%$q%")
        //         ->orWhere('email', 'like', "%$q%");
        // })->get();
        // return $users;
    }
}
