<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Platforms>
 */
class PlatformsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement([
                'PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'PC', 'Steam Deck', 'Meta Quest 3'
            ]),
            'manufacturer' => $this->faker->randomElement([
                'Sony', 'Microsoft', 'Nintendo', 'Valve', 'Meta'
            ]),
            'classification' => $this->faker->randomElement([
                'Consola', 'PC', 'Móvil', 'Realidad Virtual'
            ]),
            'release_year' => $this->faker->numberBetween(1990, 2025), // Años entre 1990 y 2025
            'price' => $this->faker->randomFloat(2, 100, 1000), // Precio entre 100 y 1000 USD
            'description' => $this->faker->paragraph(3), // Descripción con 3 oraciones
            'image' => $this->faker->imageUrl(640, 480, 'technology', true, 'platform'), // Imagen aleatoria
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
