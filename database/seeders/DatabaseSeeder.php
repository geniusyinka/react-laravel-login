<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $testUser = User::create([
            'name' => 'John Doe',
            'email' => 'demo@user.com',
            'password' => bcrypt('1234567890'),
            'api_token' => Str::random(80)
        ]);
    }
}
