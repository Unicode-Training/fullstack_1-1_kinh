<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use User;

class Phone extends Model
{
    protected $table = 'phones';

    protected $fillable = ['phone_number'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
