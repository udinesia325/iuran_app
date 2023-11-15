<?php

namespace App\Http\Controllers;

use App\Models\House;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HouseController extends Controller
{
    function index()
    {
        $data = House::all();
        return Inertia::render("DataRumah", compact("data"));
    }

    function bayar(House $house)
    {
        $isExist = Payment::where('house_id', $house->id)
            ->where(DB::raw('MONTH(created_at)'), now()->format('m'))
            ->get()->first();
        return Inertia::render("Bayar", compact('isExist', 'house'));
    }

    function bayar_proses(Request $request)
    {

        Payment::create([
            'house_id' => $request->input('id'),
            'amount' => $request->input('amount')
        ]);
        $request->session()->flash('success', 'Pembayaran Berhasil!');
        return redirect()->to(route('datarumah'));
    }

    function update_pemilik(Request $request)
    {
        $id = $request->input('id');
        $pemilik = $request->input('pemilik');
        $kategori = $request->input('kategori');

        $house = House::find($id);

        $house->pemilik = $pemilik;
        $house->kategori = $kategori;

        $house->save();

        $request->session()->flash('success', 'Pemilik Diperbarui!');
        return redirect()->to(route('datarumah'));
    }

    public function kosongkan(Request $request, House $house)
    {
        $house->pemilik = '';
        $house->kategori = null;
        $house->save();

        // jika bukan penduduk tetap maka hapus di payment
        if (!$house->active) {
            Payment::where('house_id', $house->id)
                ->delete();
        }


        $request->session()->flash('success', 'Rumah Dikosongkan!');
        return redirect()->to(route('datarumah'));
    }
}
