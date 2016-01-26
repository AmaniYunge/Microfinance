<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FinancialTransaction extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'financial_transactions';

    public function expenses(){
        return $this->hasOne('App\Expense','id','expens_id');
    }
    public function liabilities(){
        return $this->hasOne('App\Liability','id','liab_id');
    }
}
