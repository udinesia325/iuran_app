import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function DataRumah({ auth, data }) {
    const [openModal, setOpenModal] = useState(false);

    const close = () => setOpenModal(false);
    const open = () => setOpenModal(true);

    //  tambah data pemilik rumah
    const tambahPemilik = (house_id) => {
        open()
        console.log(house_id);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Data Rumah
                </h2>
            }
        >
            <Head title="Data Rumah" />
            <dialog
                id="my_modal_1"
                className={`modal ${openModal ? "modal-open" : ""}`}
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={close}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-wrap gap-3">
                        {data.map((d, i) => (
                            <div
                                key={i}
                                className="card w-96 bg-base-100 shadow-xl"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">{d.pemilik || "-"}</h2>
                                    <p>{d.kategori || "-"}</p>
                                    <div className="card-actions justify-end">
                                        {d.pemilik ? (
                                            <>
                                            <Link className="btn btn-primary" href={route('bayar',{house:d.id})}>
                                                Bayar Bulanan
                                            </Link>
                                            {d.active == 0 ? <Link className="btn btn-error" href={route('bayar',{house:d.id})}>
                                                Kosongkan
                                            </Link>:null}
                                            </>
                                        ) : (
                                            <button
                                                className="btn btn-accent"
                                                onClick={tambahPemilik.bind(this,d.id)}
                                            >
                                                Tambahkan Pemilik
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
