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
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
           $table->string('classification');
           $table->integer('price');
           $table->longText('description');
           
            $table->timestamps();
        });

        Schema::create('game_user', function(Blueprint $table){
            $table->foreignId('game_id');
            $table->foreignId('user_id');
            $table->timestamp('buyed_at')->default(now());
        });
    
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
