import Admin_layout from "src/admin-layouts/admin_layout"

const Dashboard = () => {
    return (
     <Admin_layout>          
            <div className="flex flex-row gap-3 mt-5 justify-center">
                <div className="p-5 bg-slate-300">
                    <h1 className="text-2xl text-black">10 Data User</h1>
                </div>
                <div className="p-5 bg-slate-300">
                    <h1 className="text-2xl text-black">10 Data Pendapatan</h1>
                </div>
                <div className="p-5 bg-slate-300">
                    <h1 className="text-2xl text-black">10 Data Bidang Belanja</h1>
                </div>
                <div className="p-5 bg-slate-300">
                    <h1 className="text-2xl text-black">10 Data Detail Belanja</h1>
                </div>
            </div>    
     </Admin_layout>
    )
}
export default Dashboard