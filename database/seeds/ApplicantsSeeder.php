<?php

use Illuminate\Database\Seeder;

class ApplicantsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('applicants')->insert([
            'first_name' => "Leonard",
            'middle_name' => "Constantine",
            'last_name' => "Mpande",
            'gender' => "Male",
            'birth_date' => "2015-04-30 08:08:43",
            'phone' => "+255 654 298 240",
            'postal_address' => "6549",
            'marital_status' => "Single",
            'residence' => "Bagamoyo",
            'family_size' => "5",
            'created_by' => 1,
        ]);
    }
}
