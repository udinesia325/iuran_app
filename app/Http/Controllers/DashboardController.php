<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = DB::table('houses as h')
        ->leftJoin('payments as p','h.id','=','house_id')
        ->get(["pemilik",'kategori','active','h.created_at','p.created_at as date_payment'])->toArray();
        // dd($data);
        return Inertia::render("Dashboard",compact('data'));
    }
}
