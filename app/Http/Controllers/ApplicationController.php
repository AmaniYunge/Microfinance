<?php

namespace App\Http\Controllers;

use App\Applicant;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Application;
use App\Sponsor;
class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applications = Application::all()->load('applicants','loan','sponsor');
        return $applications;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function recentApplication($period,$value)
    {
        $filteredArray = Array();
        $application_details = Application::all()->load('applicants','loan');
        if($period=="daily"){
            foreach($application_details as $index => $values){
                $days = $this::getDays($values->created_at);
                if($value>=$days){
                    array_push($filteredArray,$values);
                }
            }
        }
        return $filteredArray;
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

        /// Add sponsor
        $sponsor = new Sponsor();
        $sponsor->first_name = $request->sponsor_first_name;
        $sponsor->middle_name = $request->sponsor_middle_name;
        $sponsor->last_name = $request->sponsor_last_name;
        $sponsor->gender = $request->sponsor_gender;
        $sponsor->phone = $request->sponsor_phone;
        $sponsor->postal_address = $request->sponsor_postal_address;
        $sponsor->residence = $request->sponsor_residence;
        $sponsor->birth_date = $request->sponsor_birth_date;
        $sponsor->occupation = $request->sponsor_occupation;

        if($sponsor->save()){
            $application = new Application();
            $application->applicant_id = $request->applicant_id;
            $application->loan_id = $request->loan_id;
            $application->sponsor_id  = $sponsor->id;
            $application->applied_amount = $request->applied_amount;
            $application->application_fee = $request->application_fee;
            $application->status = "pending";
            $application->comments = $request->comments;
            $application->collateral = $request->collateral;
            $application->collateral_value = $request->collateral_value;
            $application->created_by = 1;
            if(!$application->save()){
                return "failed";
            }else{ return "success";
            }

            echo json_encode($application);
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

    private static function getDays($created_at){
        $now_date = strtotime (date ('Y-m-d H:i:s'));
        $key_date = strtotime (date ($created_at));
        $diff = $now_date-$key_date;
        $days = floor($diff/(60*60*25));

        return $days;
    }
}
