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
        Schema::create('posts', function (Blueprint $table) {
            $table->id(); //id bigint primary key, auto_increment
            $table->string('title', 200)->nullable(false);
            $table->text('content')->nullable(true);
            $table->boolean('status')->default(true);
            $table->bigInteger('user_id')->unsigned()->nullable(false);
            $table->timestamps(); //created_at timestamp, updated_at timestamp
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //Dùng cho rollback, viết ngược lại so với up
        Schema::dropIfExists('posts');
    }
};
