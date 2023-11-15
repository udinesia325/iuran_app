import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function DataRumah({ auth, data }) {
    const [openModal, setOpenModal] = useState(false);

    

    const inputPemilikRef = useRef(null);
    const inputKategoriRef = useRef(null);

    const {
        data: houseForm,
        setData,
        patch,
    } = useForm({
        id: 0,
        pemilik: "",
        active: 0,
        kategori: "kebersihan",
    });
    //  tambah data pemilik rumah
   
    const close = () => {
        setOpenModal(false)
        setData({
            id:0,
            active:0,
            pemilik:'',
            kategori:'kebersihan'
        })
    };
    const open = () => setOpenModal(true);

    const tambahPemilik = (id) => {
        open();
        setData('id',id);
    };

    const simpanPemilik = () => {
        patch(route('datarumah.update_pemilik'),{preserveScroll:false,preserveState:true})
        close()
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

            {/* modal update rumah kosong */}
            <dialog
                id="my_modal_1"
                className={`modal ${openModal ? "modal-open" : ""}`}
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Identitas Penghuni</h3>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Nama Pemilik</span>
                        </label>
                        <input
                            type="text"
                            className="input input-accent input-bordered w-full max-w-xs"
                            value={houseForm.pemilik}
                            onChange={e => setData('pemilik',e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Kategori</span>
                        </label>
                        <select
                            value={houseForm.kategori}
                            onChange={e => setData('kategori',e.target.value)}
                            className="select select-bordered select-accent"
                        >
                            <option value="kebersihan" className="">
                                kebersihan
                            </option>
                            <option value="satpam" className="">
                                satpam
                            </option>
                        </select>
                    </div>
                    <button className="btn btn-accent px-10 mt-3" onClick={simpanPemilik}>
                        Kirim
                    </button>
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 flex flex-wrap justify-center gap-3">
                        {data.map((d, i) => (
                            <div
                                key={i}
                                className="card w-96 bg-base-100 shadow-xl"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {d.pemilik || (
                                            <span className="text-gray-400">
                                                Tidak Berpenghuni
                                            </span>
                                        )}
                                    </h2>
                                    <p>{d.kategori || "-"}</p>
                                    <div className="card-actions justify-end">
                                        {d.pemilik ? (
                                            <>
                                                <Link
                                                    className="btn btn-primary"
                                                    href={route("bayar", {
                                                        house: d.id,
                                                    })}
                                                >
                                                    Bayar Bulanan
                                                </Link>
                                                {d.active == 0 ? (
                                                    <Link
                                                        className="btn btn-error"
                                                        href={route("bayar", {
                                                            house: d.id,
                                                        })}
                                                    >
                                                        Kosongkan
                                                    </Link>
                                                ) : null}
                                            </>
                                        ) : (
                                            <button
                                                className="btn btn-accent"
                                                onClick={tambahPemilik.bind(
                                                    this,
                                                    d.id
                                                )}
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
