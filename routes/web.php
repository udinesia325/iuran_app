<?php

use App\Http\Controllers\HouseController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get("datarumah",[HouseController::class,'index'])->name('datarumah');
    Route::patch("datarumah",[HouseController::class,'update_pemilik'])->name('datarumah.update_pemilik');

    Route::get("bayar/{house}",[HouseController::class,'bayar'])->name('bayar');
    Route::post("bayar/{house}",[HouseController::class,'bayar_proses'])->name('bayar.proses');
});

require __DIR__.'/auth.php';
