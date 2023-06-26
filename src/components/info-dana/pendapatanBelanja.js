import { useContext} from "react";
import { PendapatanContext } from "src/context/PendapatanContext";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import { BidangBelanjaContext } from "src/context/BidangBelanjaContext";
import { TotalDanaContext } from "src/context/TotalDanaContext";
import FormatRupiah from "src/helpers/formatRupiah";
const PendapatanBelanja = () => {        
    const detailBelanjaState = useContext(DetailBelanjaContext); 
    const pendapatanState = useContext(PendapatanContext); 
    const totalDanaState = useContext(TotalDanaContext); 

    const jumlahPendapatan =  pendapatanState.pendapatan.reduce((accumulator, item) => {
        const total = accumulator + item.jumlah;
        return total
    }, 0)
    

    const jumlahBelanja = detailBelanjaState.detailBelanja.reduce((accumulator, item) => {
        const total = accumulator + item.jumlah;
        return total
    }, 0)
   

    return(
        <div className="flex-row w-1/2 p-3 text-white bg-black rounded-md">
            <div className="flex-col">
                <table className="table-fixed"> 
                    <tbody>
                        <tr>
                            <td className="pr-4">Total Pendapatan</td>
                            <td>:</td>
                            <td>{FormatRupiah(jumlahPendapatan)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex-col">
                <table className="table-fixed"> 
                    <tbody>
                        <tr>
                            <td className="pr-12">Total Belanja</td>
                            <td>:</td>
                            <td>{FormatRupiah(jumlahBelanja)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex-col mt-3">
                <table className="table-fixed"> 
                    <tbody>
                        <tr>
                            <td className="pr-12"><b>Sisa Pendapatan</b></td>
                        </tr>
                        <tr>
                            <td>Dana Desa</td>                            
                            <td>:</td>                       
                            <td>{totalDanaState.totalDanaDesa}</td>                            
                        </tr>
                        {totalDanaState.totalOthers.map((t, i) => (
                            <tr key={i}>
                                <td>{t.sumber}</td>
                                <td>:</td>  
                                <td>{t.dana}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendapatanBelanja