<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function users()
    {
        $user = new User;
        $auth_user = $user->auth_user();
        $users = User::paginate();
        return Inertia::render('Users', compact('users', 'auth_user'));
    }
}
