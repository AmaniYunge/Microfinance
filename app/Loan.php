<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'loans';

    /**
        Relationship
     */

    public function applications()
    {
        return $this->hasMany('App\Application','loan_id','id');
    }
}
