<?php

use Illuminate\Database\Seeder;

class LoanReturnSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('loan_returns')->insert([
            'application_id' => 1,
            'applicant_id' => 1,
            'granted_id' => 1,
            'amount' => 200000,
            'received_profit' => 200000,
            'next_amount_to_return' => 200000,
            'date' => "2015-04-30 08:08:43",
            'created_by' => 1,
        ]);
    }
}
