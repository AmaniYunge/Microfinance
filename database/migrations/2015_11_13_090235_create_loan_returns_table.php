<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoanReturnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_returns', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('application_id');
            $table->integer('applicant_id');
            $table->integer('granted_id');
            $table->string('amount');
            $table->string('received_profit');
            $table->string('next_amount_to_return');
            $table->string('interval_count');
            $table->text('comment')->nullable();
            $table->date('date');
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
        Schema::drop('loan_returns');
    }
}
