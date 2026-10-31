<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';

    protected $fillable = ['name', 'price'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'users_courses', 'course_id', 'user_id',  'id', 'id');
    }
}
