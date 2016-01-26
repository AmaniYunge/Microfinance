<?php

use Illuminate\Database\Seeder;

class CompanyProfitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company_profit')->insert([
            'source_id' => 1,
            'source_type' => "Loans",
            'amount' => 200000,
            'created_by' => 1,
        ]);
    }
}
