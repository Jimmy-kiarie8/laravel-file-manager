<?php

namespace Database\Seeders;

use App\Models\File;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $adminRole = Role::create(['name' => 'Administrator']);
        $ictRole = Role::create(['name' => 'ICT']);
        $bidersRole = Role::create(['name' => 'Biders']);


        Permission::create(['name' => 'Add Files']);
        Permission::create(['name' => 'Delete Files']);
        Permission::create(['name' => 'View Files']);


        Permission::create(['name' => 'Add Users']);
        Permission::create(['name' => 'Delete Users']);
        Permission::create(['name' => 'View Logs']);
        Permission::create(['name' => 'View All Files']);



        $adminUser = User::factory()->create([
            'name' => 'Admin',
            'company' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('Kilimo@2024!')
        ]);

        // $id = $adminUser->id;
        // Log::alert($id);

        // $file = new File();
        // $file->created_by = 1;
        // $file->name = $adminUser->name;
        // $file->is_folder = true;
        // $file->save();


        $ictRole->givePermissionTo(['Add Files', 'Delete Files', 'View Files']);
        $bidersRole->givePermissionTo('View Files');

        $adminRole->givePermissionTo(Permission::all());
        $adminUser->assignRole('Administrator');
    }
}
