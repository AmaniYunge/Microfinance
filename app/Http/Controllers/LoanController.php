<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Loan;
use Illuminate\Support\Facades\Auth;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $loans = Loan::all()->load("applications","applications.applicants","applications.sponsor");

        return $loans;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $loan = new Loan();

        $loan->name = $request->name;
        $loan->minimum_amount = $request->minimum_amount;
        $loan->maximum_amount = $request->maximum_amount;
        $loan->min_return_time = $request->min_return_time;
        $loan->max_return_time = $request->max_return_time;
        $loan->profit_percent = $request->profit_percent;
        $loan->comments = $request->comments;
        $loan->collateral = $request->collateral;
        $loan->created_by = 1;

        if(!$loan->save()){
            return "failed";
        }else{
            return "success";
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $loan = Loan::find($id);

        $loan->name = $request->name;
        $loan->minimum_amount = $request->minimum_amount;
        $loan->maximum_amount = $request->maximum_amount;
        $loan->min_return_time = $request->min_return_time;
        $loan->max_return_time = $request->max_return_time;
        $loan->profit_percent = $request->profit_percent;
        $loan->comments = $request->comments;
        $loan->collateral = $request->collateral;
        $loan->created_by = 1;

        if(!$loan->save()){
            return "failed";
        }else{
            return "success";
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $loan = new Loan();

        if($loan->destroy($id)){
            return "success";
        }
    }
}
