<?php

use Illuminate\Database\Seeder;

class LoansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('loans')->insert([
            'name' => "Sample Loan A",
            'minimum_amount' => 2000000,
            'maximum_amount' => 200000000,
            'min_return_time' => "",
            'max_return_time' => "",
            'comments' => "",
            'collateral' => "",
            'created_by' => 1,
        ]);
    }
}
