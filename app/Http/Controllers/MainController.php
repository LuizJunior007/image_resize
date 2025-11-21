<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class MainController extends Controller
{
    public function redimensionarImg(Request $req){

        $req->validate([
            'imagem' => 'required|image|mimes:jpg,jpeg,svg,gif,png|max:5120',
            'largura' => 'required|integer|min:1|max:5000',
            'altura' => 'required|integer|min:1|max:5000',
        ], [
            'imagem.required' => 'Envie uma imagem.',
            'imagem.image' => 'O arquivo enviado não é uma imagem válida.',
            'imagem.mimes' => 'A imagem deve ser JPG, JPEG, SVG, PNG ou GIF.',
            'imagem.max' => 'A imagem pode ter no máximo 5MB.',
            'largura.required' => 'A largura deve ser um número inteiro.',
            'altura.required' => 'A altura deve ser um número inteiro.',
        ]);

        $manager = new ImageManager(
            new Driver
        );

        $image = $manager->read($req->file('imagem'))
        ->resize($req->largura, $req->altura, function($constraint){

            $constraint->aspectRatio();

        });
        $ext = $req->file('imagem')->getClientOriginalExtension();

        $nome = uniqid() . '.' . $ext;
        $caminho = storage_path("app/public/$nome");

        if($image->save($caminho)){

            session(['imagem_download' => $nome]);

            return back()->with('success', 'Imagem foi redimensionada com sucesso.');

        } else{

            return back()->with('error', 'Erro ao tentar redimensionar imagem.');
        }

    }

    public function download(){

        $nome = session('imagem_download');

        if (!$nome) {
            abort(404);
        }

        $path = storage_path("app/public/$nome");

        if(!file_exists($path)){

            return redirect('/');

        } else{

            return response()->download($path)->deleteFileAfterSend(true);
        }
 
    }

    public function getInfoImage(Request $req){

        $req->validate([
            'imagem' => 'required|image|max:5120'
         ]);

         $manager = new ImageManager(
            new Driver
        );

        $image = $manager->read($req->file('imagem'));

        return response()->json([
            'width' => $image->width(),
            'height' => $image->height(),
            'size_kb' => round($req->file('imagem')->getSize() / 1024, 2)
        ]);

    }
}
