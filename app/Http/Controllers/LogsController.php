<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class LogsController extends Controller
{
    public function logs() {


        $user = new User;
        $auth_user = $user->auth_user();
        $lastActivity = Activity::latest()->paginate(15); //returns the last logged activity

         $lastActivity->transform(function($activity) {
            $user = User::find($activity->causer_id);
            if ($user) {
                $activity->causer_type = $user->name;
            }
            $activity->date = Carbon::parse($activity->created_at)->format('Y-m-d H:i:s');
            return $activity;
        }) ;
        return Inertia::render('Logs', compact('lastActivity', 'auth_user'));

    }
}
