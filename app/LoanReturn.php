<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoanReturn extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'loan_returns';

//    /**
//    Relationships
//     */
//
//    public function granted_loan()
//    {
//        return $this->hasMany('App\GrantedLoan','created_by','id');
//    }
}
