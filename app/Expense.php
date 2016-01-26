<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'expenses';

    public function expensesTransactions(){
        return $this->hasMany('App\FinancialTransaction','expens_id','id');
    }
}
