<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/converter', function(){

    return Inertia::render('Converter');
});

Route::post('/redimensionarImg', [ MainController::class, 'redimensionarImg' ]);
Route::get('/download-imagem', [MainController::class, 'download']);
Route::post('/getInfoImage', [ MainController::class, 'getInfoImage' ]);
