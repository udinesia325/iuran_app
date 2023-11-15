import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function DataRumah({ auth, isExist, house }) {

    if (isExist != null) {
        return <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pembayaran Bulanan
                </h2>
            }
        >
            <Head title="Data Rumah" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm flex flex-col justify-center items-center gap-5">
                        <h1 className=" my-5">
                            Pemilik rumah tersebut telah membayar di bulan ini
                        </h1>
                        <Link href={route('datarumah')} className="btn btn-primary mb-5">Kembali</Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>;
    }

    const { data, post } = useForm({
        id: house.id,
        amount: house.kategori == "kebersihan" ? 15000 : 100000,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("bayar", { house: house.id }));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pembayaran Bulanan
                </h2>
            }
        >
            <Head title="Data Rumah" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white py-12 overflow-hidden shadow-sm  flex justify-center">
                        <form
                            onSubmit={handleSubmit}
                            className="card w-96 bg-base-100 shadow-xl p-5 border border-black flex flex-col justify-center items-center"
                        >
                            <h1 className="text-center">Pembayaran</h1>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Pemilik</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                    disabled
                                    value={house.pemilik}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Kategori</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                    disabled
                                    value={house.kategori}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">
                                        Biaya Iuran
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                    disabled
                                    value={
                                        house.kategori == "kebersihan"
                                            ? "15.000"
                                            : "100.000"
                                    }
                                />
                            </div>
                            <button className="btn btn-accent w-full max-w-xs mt-2">Bayar</button>
                            <Link href={route("datarumah")} className="btn btn-error w-full max-w-xs mt-2 text-white">Kembali</Link>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
