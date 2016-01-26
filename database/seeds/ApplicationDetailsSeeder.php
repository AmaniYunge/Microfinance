<?php

use Illuminate\Database\Seeder;

class ApplicationDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('application_details')->insert([
            'dafault_user' => 1,
            'application_name' => "Microfinance",
            'loan_type' => "1",
        ]);
    }
}
