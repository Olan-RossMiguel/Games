<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
 protected $fillable = [
    'user_id',
    'game_id',
    'description'
 ];

 public function user():BelongsTo
 {
    return $this->belongsTo(user::class);
 }
 public function game():BelongsTo
 {
    return $this->belongsTo(game::class);
 }
   
}
