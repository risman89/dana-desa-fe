
import { useContext } from "react";
import { UserContext } from "src/context/UserContext";
import { PendapatanContext } from "src/context/PendapatanContext";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import { BidangBelanjaContext } from "src/context/BidangBelanjaContext";
const DashboardAdmin= () => {
    const userState = useContext(UserContext);
    const pendapatanState = useContext(PendapatanContext); 
    const detailBelanjaState = useContext(DetailBelanjaContext); 
    const bidangBelanjaState = useContext(BidangBelanjaContext);
    return(
        <div className="flex flex-row gap-3 mt-5 justify-center">
        <div className="p-5 bg-slate-300">
            <h1 className="text-2xl text-black">{userState.user.length} Data User</h1>
        </div>
        <div className="p-5 bg-slate-300">
            <h1 className="text-2xl text-black">{pendapatanState.pendapatan.length} Data Pendapatan</h1>
        </div>
        <div className="p-5 bg-slate-300">
            <h1 className="text-2xl text-black">{bidangBelanjaState.bidangBelanja.length} Data Bidang Belanja</h1>
        </div>
        <div className="p-5 bg-slate-300">
            <h1 className="text-2xl text-black">{detailBelanjaState.detailBelanja.length} Data Detail Belanja</h1>
        </div>
    </div> 
    )
}
export default DashboardAdmin