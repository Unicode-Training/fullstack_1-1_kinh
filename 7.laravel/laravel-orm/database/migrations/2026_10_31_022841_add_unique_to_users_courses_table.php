<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users_courses', function (Blueprint $table) {
            $table->unique(['user_id', 'course_id'], 'users_courses_user_id_course_id_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('users_courses', function (Blueprint $table) {
            $table->dropForeign('users_courses_user_id_foreign');
            $table->dropForeign('users_courses_course_id_foreign');
            $table->dropIndex('users_courses_user_id_course_id_unique');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('course_id')->references('id')->on('courses');
        });
    }
};
