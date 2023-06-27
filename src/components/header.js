import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useContext } from "react";
import { BidangBelanjaContext } from "src/context/BidangBelanjaContext";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import { TotalDanaContext } from "src/context/TotalDanaContext";

const Header = () => {
    const bidangBelanjaState = useContext(BidangBelanjaContext); 
    const detailBelanjaState = useContext(DetailBelanjaContext); 
    const totalDanaState = useContext(TotalDanaContext); 

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
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      },
    };
    const data = {
        labels: getBidang,
        datasets: [
          {
            label: 'Pem Dana',
            data: getTotalDetail,
            backgroundColor: [              
              'blue',
              'green',
              'yellow',
              'purple',
              'red',
              'aqua',
              'magenta'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 0, 242, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(254, 254, 0, 1)',
              'rgba(58, 225, 227, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
    const data2 = {
      labels: totalDanaState.sumberToCharts,
      datasets: [
        {
          label: 'Sisa Dana',
          data: totalDanaState.sisaToCharts,
          backgroundColor: [              
            'blue',
            'green',
            'yellow',
            'purple',
            'red',
            'aqua',
            'magenta'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 0, 242, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(254, 254, 0, 1)',
            'rgba(58, 225, 227, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return(
      <>
        <div className="flex justify-center w-full justify-items-center">
            <h1 className="text-2xl text-center mb-7 ">APBG {new Date().getFullYear() -1 }&nbsp;
              {process.env.DESA} Kecamatan {process.env.KECAMATAN} <br/>
              Kabupaten {process.env.KAB}
            </h1>      
        </div>
        <div className="flex flex-row justify-around mb-5">
            <div className="w-2/5">      
                <h3 className='mb-2 font-bold'>Grafik sisa Dana menurut sumber Pendapatan</h3>
                <Doughnut options={options} data={data2} />
                </div>
            <div className="w-2/5">
              <h3 className='mb-2 font-bold'>Grafik penggunaan Dana menurut Bidang</h3>
              <Doughnut options={options} data={data} />
            </div>
        </div>
        </>
    )
}

export default Header
