<?php

namespace App\Http\Controllers;

use App\Application;
use App\GrantedLoan;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class GrantedLoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $granted_loans = GrantedLoan::all()->load('loan_returns','applicant');
        return $granted_loans;
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
        $granted_loan = new GrantedLoan();
echo json_encode($request->application_id);
        $granted_loan->application_id = $request->application_id;
        $granted_loan->applicant_id = $request->applicant_id;
        $granted_loan->amount_per_return = $request->amount_per_return;
        $granted_loan->amount_to_return = $request->amount_to_return;
        $granted_loan->interval_type = $request->interval_type;
        $granted_loan->loan_actual_due_date = $request->loan_actual_due_date;
        $granted_loan->profit_percent = $request->profit_percent;
        $granted_loan->loan_duration = $request->loan_duration;
        $granted_loan->loaned_amount = $request->loaned_amount;
        $granted_loan->return_interval = $request->return_interval;
        $granted_loan->created_by = 1;

        if(!$granted_loan->save()){
            return "failed";
        }else{
            $application = Application::find($request->application_id);
            $application->status = "granted";
            $application->save();
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
