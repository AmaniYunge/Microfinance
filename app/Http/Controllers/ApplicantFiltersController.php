<?php

namespace App\Http\Controllers;


use App\Applicant;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
class ApplicantFiltersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($period,$value)
    {
        $applicants = Applicant::all()->load('applications','applications.sponsor','grantedloans','applications.loan','loan_returns');
        $start_date = "";
        $end_date = "";
        $new_date = date('Y');

        $start_date=date_create($new_date."-01-01");
        $end_date=date_create($new_date."-12-31");
        $start_date = date_format($start_date,"Y/m/d H:i:s");
        $end_date = date_format($end_date,"Y/m/d H:i:s");

        if($period=="year"){
            $applicants = DB::table('applicants')
                ->leftJoin('granted_loans','granted_loans.applicant_id', '=','applicants.id')
                ->leftJoin('applications','applications.applicant_id', '=','applicants.id')
                ->whereBetween('applicants.created_at', [$start_date, $end_date]) // this condition has to be the last before get
                ->get();

        }

        return $applicants;
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
        //
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
