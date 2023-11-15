<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\House;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
        ]);

        House::factory(15)->create();

        for ($i=0; $i < 5; $i++) { 
            House::create([
            'pemilik' => '',
            'active' => 0,
            ]);
        }
    }
}
