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
        Schema::create('platforms', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique(); // Nombre de la plataforma (Ej: PlayStation 5)
            $table->string('manufacturer')->nullable(); // Fabricante (Ej: Sony, Microsoft, Nintendo)
            $table->string('classification')->nullable(); // Tipo (Ej: Consola, PC, Móvil)
            $table->integer('release_year')->nullable(); // Año de lanzamiento
            $table->decimal('price', 10, 2)->nullable(); // Precio aproximado
            $table->longText('description')->nullable(); // Descripción
            $table->string('image')->nullable(); // Imagen de la plataforma
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('platforms');
    }
};
