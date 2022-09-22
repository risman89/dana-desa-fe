import Grafik from "@components/grafik";
import Banner from "src/components/banner";
import Bidang from "src/components/bidang-belanja";
import InfoDana from "src/components/info-dana";

export default function IndexPage() {
  return (
    <div className="bg-green-500 w-full p-10 flex-row">  
      <div className="flex flex-row mb-5 justify-around">
        <Banner/>
        <Grafik/>
      </div>
      <InfoDana/>    
      <Bidang/>
    </div>
  );
}
