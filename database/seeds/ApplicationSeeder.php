<?php

use Illuminate\Database\Seeder;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('applications')->insert([
            'applicant_id' => 3,
            'applied_amount' => 2000000,
            'amount_granted' => 2000000,
            'status' => "granted",
            'comments' => "The respensbile client",
            'created_by' => 1,
        ]);
    }
}
