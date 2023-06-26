import Header from "src/components/header";
import Bidang from "src/components/bidang-belanja";
import InfoDana from "src/components/info-dana";
import { PendapatanProvider } from "src/context/PendapatanContext"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import { TotalDanaProvider } from "src/context/TotalDanaContext";
export default function IndexPage() {
  return (
    <div className="bg-gray-200 w-full p-10 flex-row">  
      <PendapatanProvider> 
        <BidangBelanjaProvider>
          <DetailBelanjaProvider> 
            <TotalDanaProvider>
              <Header/>
              <InfoDana/>              
              <Bidang/>
            </TotalDanaProvider>
          </DetailBelanjaProvider> 
        </BidangBelanjaProvider>
      </PendapatanProvider>      
    </div>
  );
}
