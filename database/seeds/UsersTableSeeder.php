<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => "Leonard",
            'middle_name' => "Constantine",
            'last_name' => "Mpande",
            'gender' => "Male",
            'birth_date' => "0000-00-00 00:00:00",
            'phone' => "0654 298 240",
            'postal_address' => "7568",
            'role' => "Admin",
            'status' => "active",
            'created_by' => "default_user",
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
