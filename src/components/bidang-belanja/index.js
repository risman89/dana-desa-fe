
import { useContext } from "react";
import { BidangBelanjaContext } from "src/context/BidangBelanjaContext";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import FormatRupiah from "src/helpers/formatRupiah";
const Bidang = () => {  
  const bidangBelanjaState = useContext(BidangBelanjaContext); 
  const detailBelanjaState = useContext(DetailBelanjaContext); 

  const getTotalDetail = (id_bidang)=>{
    const totalDetail = detailBelanjaState.detailBelanja.filter(detail => detail.id_bidang == id_bidang)
    .reduce((accumulator, i) => {
      const total = accumulator + i.jumlah;
        return total
      }, 0)
      return totalDetail
  }

  return (
    <>
      {bidangBelanjaState.bidangBelanja.map((item, index) => (
      <div className="bg-white text-black flex-col mb-5" key={index}>
        <h1 className="text-3xl p-3">Bidang {item.bidang}</h1>
        <div className="bg-black rounded-br-full p-3 text-white w-3/4">
          <p className="text-base">
            {FormatRupiah(getTotalDetail(item.id))}
          </p>
        </div>
        <table>
          <tbody>
             {detailBelanjaState.detailBelanja.filter(detail => detail.id_bidang == item.id).map(filtereDetail => (
              <tr>
                <td className="px-2">{filtereDetail.nama_item}</td>
                <td>:</td>
                <td className="px-2">{FormatRupiah(filtereDetail.jumlah)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ))}
     </>
  )
}
export default Bidang