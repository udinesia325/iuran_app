import TabDash from "@/Components/TabDash";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Chart from "react-apexcharts";

export default function Dashboard({ auth, data, ...all }) {
    const dataLunas = data.filter(
        (d) => d.date_payment != null && d.pemilik != ""
    );
    const dataBelumLunas = data.filter(
        (d) => d.date_payment == null && d.pemilik != ""
    );

    const options = {
        options: {
            labels: ["Lunas", "Belum Lunas"],
            colors: ["#E91E63", "#00e295"],
        },
        series: [dataLunas.length, dataBelumLunas.length],

    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Chart
                                options={options.options}
                                series={options.series}
                                type="donut"
                                width="450"
                            />
                        </div>
                        <TabDash
                            dataLunas={dataLunas}
                            dataBelumLunas={dataBelumLunas}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
