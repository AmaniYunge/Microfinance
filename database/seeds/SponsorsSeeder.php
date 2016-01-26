<?php

use Illuminate\Database\Seeder;

class SponsorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sponsors')->insert([
            'first_name' => "Chalanga",
            'middle_name' => "Rajabu",
            'last_name' => "Chalanga",
            'gender' => "Male",
            'birth_date' => "-0001-11-30 00:00:00",
            'phone' => "+255 783 345 243",
            'postal_address' => "2547",
            'occupation' => "Professor Udsm",
            'residence' => "Dar es Salaam",
            'created_by' => 1,
        ]);
    }
}
