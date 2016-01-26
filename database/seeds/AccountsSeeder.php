<?php

use Illuminate\Database\Seeder;

class AccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accounts')->insert([
            'type' => "Expenses",
            'name' => "Umeme",
            'value' => 200000,
            'date' => "2015-04-30 08:08:43",
            'created_by' => 1,
        ]);
    }
}
