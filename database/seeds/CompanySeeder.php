<?php

use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company')->insert([
            'company_name' => "Leo Mmpande",
            'physiscal_address' => "Kimara, Dar es Salaam",
            'landline' => "+255 6786 737 594",
            'mobile' => "+255 0654 673 739 432",
            'email' => "innovation@leompande.com",
            'website' => "www.leompande.com",
            'company_capital' => "1000000",
            'created_by' => "1",
        ]);
    }
}
