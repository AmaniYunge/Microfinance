<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GrantedLoan extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'granted_loans';

    /**
     * Relationships
     */

    public function loan_returns()
    {
        return $this->hasMany('App\LoanReturn','granted_id','id');
    }

    public function applicant()
    {
        return $this->belongsTo('App\Applicant','applicant_id','id');
    }
}
