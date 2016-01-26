<?php

namespace App\Http\Controllers;

use App\Applicant;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ApplicantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applicants = Applicant::all()->load('applications','applications.sponsor','grantedloans','applications.loan','loan_returns');
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
        $applicant = new Applicant();

        $applicant->first_name = $request->first_name;
        $applicant->middle_name = $request->middle_name;
        $applicant->last_name = $request->last_name;
        $applicant->gender = $request->gender;
        $applicant->birth_date = $request->birth_date;
        $applicant->phone = $request->phone;
        $applicant->postal_address = $request->postal_address;
        $applicant->marital_status = $request->marital_status;
        $applicant->residence = $request->residence;
        $applicant->family_size = $request->family_size;

        if(!$applicant->save()){
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
        $applicant = Applicant::find($id);
        $applicant->first_name = $request->first_name;
        $applicant->middle_name = $request->middle_name;
        $applicant->last_name = $request->last_name;
        $applicant->gender = $request->gender;
        $applicant->birth_date = $request->birth_date;
        $applicant->phone = $request->phone;
        $applicant->postal_address = $request->postal_address;
        $applicant->marital_status = $request->marital_status;
        $applicant->residence = $request->residence;
        $applicant->family_size = $request->family_size;


        if($applicant->save()){
            return "success";
        }else{
            return "failure";
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
        $applicant = Applicant::find($id);
        if($applicant->destroy($id)){
            return "success";
        }else{
            return "failure";
        }
    }
}
