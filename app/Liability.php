<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Liability extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'liabilities';

    public function liabilityTransactions(){
        return $this->hasMany('App\FinancialTransaction','liab_id','id');
    }
}
