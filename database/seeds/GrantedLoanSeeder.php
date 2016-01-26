<?php

use Illuminate\Database\Seeder;

class GrantedLoanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('granted_loans')->insert([
            'application_id' => 1,
            'applicant_id' => 1,
            'return_interval' => 3,
            'interval_type' => "week",
            'loaned_amount' => 200000,
            'profit_percent' => 30,
            'amount_to_return' => 200000,
            'amount_per_return' => 200000,
            'loan_actual_due_date' => "2015-04-30 08:08:43",
            'loan_expected_due_date' => "2015-04-30 08:08:43",
            'loan_duration' => "2015-04-30 08:08:43",
            'created_by' => 1,
        ]);
    }
}
