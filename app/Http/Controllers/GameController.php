<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Games/Index',[
            'games'=>Game::all(),
                ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Games/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Registrar en los logs los datos recibidos
        \Log::info('Datos recibidos:', $request->all());
        // return back ();
    
        // Validar los datos del formulario
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'classification' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string',
        ]);
    
        // Asegurar que 'price' sea numérico
        $validatedData['price'] = (float) $validatedData['price'];
    
        // Guardar el juego en la base de datos
        try {
            $game = Game::create($validatedData);
            return response()->json([
                'message' => 'El juego se ha guardado correctamente',
                'data' => $game,
            ], 201);
        } catch (\Exception $e) {
            \Log::error('Error al guardar el juego: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al guardar el juego',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
