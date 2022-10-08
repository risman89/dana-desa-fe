import { useContext} from "react";
import { PendapatanContext } from "src/context/PendapatanContext";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import FormatRupiah from "src/helpers/formatRupiah";
const PendapatanBelanja = () => {        
    const detailBelanjaState = useContext(DetailBelanjaContext); 
    const pendapatanState = useContext(PendapatanContext); 

    const jumlahPendapatan =  pendapatanState.pendapatan.reduce((accumulator, item) => {
        const total = accumulator + item.jumlah;
        return total
    }, 0)
    

    const jumlahBelanja = detailBelanjaState.detailBelanja.reduce((accumulator, item) => {
        const total = accumulator + item.jumlah;
        return total
    }, 0)

    return(
        <div className="flex-row bg-black text-white w-1/2 p-3 rounded-md">
            <div className="flex-col">
                <table className="table-fixed"> 
                    <tbody>
                        <tr>
                            <td className="pr-4">Pendapatan</td>
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
                            <td className="pr-12">Belanja</td>
                            <td>:</td>
                            <td>{FormatRupiah(jumlahBelanja)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendapatanBelanja