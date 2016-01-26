<?php

use Illuminate\Database\Seeder;

class FinancialTransaactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('financial_transactions')->insert([
            'transaction_name' => "Sample Transaction name",
            'transaction_type' => "Loan",
            'amount' => 200000000,
            'created_by' => 1,
        ]);
    }
}
