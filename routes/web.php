<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clearapp', function () {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('view:clear');
    Session::flush();
    return redirect('/');
});




Route::group(['middleware' => ['guest', 'web']], function () {
    //will only work for guests

    Route::get('/hi', function(){
        return 'hi there! Guest!';
   });

   Route::get('/login', [AuthController::class, 'index']);
   Route::get('/signup', [AuthController::class, 'index']);

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/signup', [AuthController::class, 'signup']);
});



Route::group(['middleware' => ['auth']], function() {

    //will only work when logged in!
    Route::get('/loggedin', function() {
        return 'only logged in guys can see this!';
    });
    
    Route::get('/logout', [AuthController::class, 'logout']);
});







Route::get('/', function() {
    return view('welcome');
});