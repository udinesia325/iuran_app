import React from "react";

function TabDash({ dataLunas,dataBelumLunas }) {
   

    return (
        <div className="px-3 pb-5">
            <div className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label="Lunas"
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 rounded-box p-10">
                    <Table data={dataLunas} />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label="Belum Lunas"
                />
                <div className="tab-content tab-active bg-base-100 border-base-300 rounded-box p-10">
                    <Table data={dataBelumLunas} />
                </div>
            </div>
        </div>
    );
}

export default TabDash;

const Table = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Pemilik</th>
                        <th>Kategori</th>
                        <th>Tanggal Bayar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data.map((d, i) => (
                        <tr key={i} className="hover">
                            <th>{i + 1}</th>
                            <td>{d.pemilik}</td>
                            <td>{d.kategori}</td>
                            <td>{d.date_payment || "-"}</td>
                        </tr>
                    ))}
                    {/* row 2 */}
                </tbody>
            </table>
        </div>
    );
};
