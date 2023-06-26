import Pendapatan from "pages/admin/pendapatan";
import { createContext, useState, useEffect } from "react";
import FormatRupiah from 'src/helpers/formatRupiah';
export const TotalDanaContext = createContext();

export const TotalDanaProvider = (props) => {
    const [totalDanaDesa, setTotalDanaDesa] = useState();
    const [totalOthers, setTotalOthers] = useState([]);
    const [sisaToCharts, setSisaToCharts] = useState([]);
    const [sumberToCharts, setSumberToCharts] = useState([]);

    useEffect(() => {
        (async () => {
            const getBidangBelanja = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/bidang-belanja`);
            const dataBidang = await getBidangBelanja.json();

            const getPendapatan = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/pendapatan`);
            const dataPendapatan = await getPendapatan.json();

            const getDetailBelanja = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/detail-belanja`);
            const dataDetailBelanja = await getDetailBelanja.json();

            let total = 0;
            dataDetailBelanja.data.forEach(item => {
                if (item.id_bidang === 3 || item.id_bidang === 9 || item.id_bidang === 10) {
                    total += item.jumlah;
                }
            });
            const jumlahDanaDesa = dataPendapatan.data.filter(item => item.id === 1).map(item => item.jumlah);
            setTotalDanaDesa(FormatRupiah(jumlahDanaDesa - total))

            let totalDetailBelanjaOthers = 0;
            dataDetailBelanja.data.forEach(item => {
                if (item.id_bidang !== 3 && item.id_bidang !== 9 && item.id_bidang !== 10) {
                  totalDetailBelanjaOthers += item.jumlah;
                }
            });

            const totalDanaOthers = dataPendapatan.data.reduce((total, item) => {
              if (item.id !== 1) {
                return total + item.jumlah;
              }
              return total;
            }, 0);

            const persentaseDetailOthers = Math.round((totalDetailBelanjaOthers / totalDanaOthers) * 100);            
            
            const dataPendapatanOthers = dataPendapatan.data.filter(item => item.id !== 1).map(item => item);
            const finalTotalDanaOthers = dataPendapatanOthers.map(item => {
              return {
                sumber: item.sumber,
                dana: FormatRupiah(Math.round(item.jumlah * (100 - persentaseDetailOthers) / 100))
              };
            });           
            setTotalOthers(finalTotalDanaOthers)

            const sisaNilaiPendapatanTocharts = dataPendapatan.data.map(item => item.id === 1 ? Math.round(item.jumlah - total) : Math.round(item.jumlah * (100 - persentaseDetailOthers) / 100));
            setSisaToCharts(sisaNilaiPendapatanTocharts)
            const sumberPendapatanToChrats = dataPendapatan.data.map(item => item.sumber);
            setSumberToCharts(sumberPendapatanToChrats)

          }
        )()
    }, []); 


    const totalDanaState = {
      totalDanaDesa,
      totalOthers,
      sisaToCharts,
      sumberToCharts
    };
    return(
        <TotalDanaContext.Provider value={totalDanaState}>
            {props.children}
        </TotalDanaContext.Provider>
    )
}