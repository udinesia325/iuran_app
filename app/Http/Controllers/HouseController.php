<?php

namespace App\Http\Controllers;

use App\Models\House;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HouseController extends Controller
{
    function index() {
        $data = House::all();
        return Inertia::render("DataRumah",compact("data"));
    }

    function bayar(House $house) {
        $isExist = Payment::where('house_id', $house->id)
        ->where(DB::raw('MONTH(created_at)'),now()->format('m'))
        ->get()->first();
        return Inertia::render("Bayar",compact('isExist','house'));
    }

    function bayar_proses(Request $request,House $house) {

        Payment::create([
            'house_id' => $request->input('id'),
            'amount' => $request->input('amount')
        ]);
        return redirect()->to(route('datarumah'));
    }
}
