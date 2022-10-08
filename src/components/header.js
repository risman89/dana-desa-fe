import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useContext } from "react";
import { BidangBelanjaContext } from "src/context/BidangBelanjaContext";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";

const Header = () => {
    const bidangBelanjaState = useContext(BidangBelanjaContext); 
    const detailBelanjaState = useContext(DetailBelanjaContext); 

    const getBidang = bidangBelanjaState.bidangBelanja.map((item) => {
          const bidang = item.bidang         
        return bidang
    })

    const getTotalDetail = bidangBelanjaState.bidangBelanja.map((item) => {
        const totalDetail = detailBelanjaState.detailBelanja.filter(detail => detail.id_bidang == item.id)
        .reduce((accumulator, i) => {
          const total = accumulator + i.jumlah;
            return total
          }, 0)        
        return totalDetail
    })

console.log(getTotalDetail);

    const data = {
        labels: getBidang,
        datasets: [
          {
            label: '# of Votes',
            data: getTotalDetail,
            backgroundColor: [
              'red',
              'blue',
              'purple',
              'green',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return(
        <div className="flex flex-row mb-5 justify-around">
            <div className="flex-row">
                <h1 className="text-4xl">APBG {new Date().getFullYear()}</h1>
                <h1 className="text-4xl">{process.env.DESA}</h1>        
                <h1 className="text-2xl">Kecamatan {process.env.KECAMATAN}</h1>        
                <h1 className="text-2xl">Kabupaten {process.env.KAB}</h1>        
            </div>
            <div className="w-4/12">
            <Doughnut data={data} />
        </div>
        </div>
    )
}

export default Header