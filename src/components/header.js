import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend,   CategoryScale, LinearScale, BarElement, Title);
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
      
    // const data2 = {
    //   labels: totalDanaState.sumberToCharts,
    //   datasets: [
    //     {
    //       label: 'Sisa Dana',
    //       data: totalDanaState.sisaToCharts,
    //       backgroundColor: [              
    //         'blue',
    //         'green',
    //         'yellow',
    //         'purple',
    //         'red',
    //         'aqua',
    //         'magenta'
    //       ],
    //       borderColor: [
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(255, 0, 242, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(254, 254, 0, 1)',
    //         'rgba(58, 225, 227, 1)',
    //       ],
    //       borderWidth: 1,
    //     },
    //   ],
    // };

    const labels = totalDanaState.sumberToCharts
    const colors = ['rgba(75, 192, 192, 1)', 'rgba(255, 0, 242, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(254, 254, 0, 1)', 'rgba(255, 99, 132, 1)', 'rgba(58, 225, 227, 1)'];

      const datasets = [{
        label: 'Sisa Dana',
        data: totalDanaState.sisaToCharts,
        backgroundColor: colors.slice(0, totalDanaState.sisaToCharts.length),
      }];
      
      const data3 = {
        labels: labels,
        datasets: datasets,
      };

    return(
      // <>
      //   <div className="flex justify-center w-full justify-items-center">
      //       <h1 className="text-2xl text-center mb-7 ">APBG {new Date().getFullYear() -1 }&nbsp;
      //         {process.env.DESA} Kecamatan {process.env.KECAMATAN} <br/>
      //         Kabupaten {process.env.KAB}
      //       </h1>      
      //   </div>
      //   <div className="flex flex-row justify-around mb-5">
      //       <div className="w-2/5">      
      //           <h3 className='mb-2 font-bold'>Grafik sisa Dana menurut sumber Pendapatan</h3>
      //           <Doughnut options={options} data={data2} />
      //           </div>
      //       <div className="w-2/5">
      //         <h3 className='mb-2 font-bold'>Grafik penggunaan Dana menurut Bidang</h3>
      //         <Doughnut options={options} data={data} />
      //       </div>
      //   </div>
      //   </>
      <div className="flex flex-row justify-around mb-5">
      <div className="flex-row">
          <h1 className="text-4xl">APBG {new Date().getFullYear() -1 }</h1>
          <h1 className="text-4xl">{process.env.DESA}</h1>        
          <h1 className="text-2xl">Kecamatan {process.env.KECAMATAN}</h1>        
          <h1 className="text-2xl">Kabupaten {process.env.KAB}</h1>   
          <h3 className='mt-4 mb-2 font-bold'>Grafik sisa Dana menurut sumber Pendapatan</h3>
          <Bar data={data3}/>     
      </div>
      <div className="w-2/5">
      <h3 className='mb-2 font-bold'>Grafik penggunaan Dana menurut Bidang</h3>
        <Doughnut data={data} />
      </div>
    </div>
    )
}

export default Header
