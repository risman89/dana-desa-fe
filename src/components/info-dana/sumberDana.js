import { useContext } from "react";
import { PendapatanContext } from "src/context/PendapatanContext";
import FormatRupiah from "src/helpers/formatRupiah";
const SumberDana = () => {    
    const pendapatanState = useContext(PendapatanContext); 
    return(
        <div className="flex-row bg-black text-white w-1/2 p-3 rounded-md">
            <table className="table-fixed"> 
                <tbody>
                {pendapatanState.pendapatan.map((item, index) => (
                    <tr key={index}>
                        <td className="pr-5">{item.sumber}</td>
                        <td>:</td>
                        <td>{FormatRupiah(item.jumlah)}</td>
                    </tr>
                 ))}
                </tbody>
            </table>
        </div>
    )
}

export default SumberDana