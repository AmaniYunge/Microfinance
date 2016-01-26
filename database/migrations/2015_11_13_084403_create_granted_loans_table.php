<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrantedLoansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('granted_loans', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('applicant_id');
            $table->integer('application_id');
            $table->string('return_interval');
            $table->string('interval_type');
            $table->string('loaned_amount');
            $table->string('profit_percent');
            $table->string('amount_to_return');
            $table->string('amount_per_return');
            $table->string('loan_actual_due_date');
            $table->string('loan_expected_due_date');
            $table->string('loan_duration');
            $table->string('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('granted_loans');
    }
}
