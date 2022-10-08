import Header from "src/components/header";
import Bidang from "src/components/bidang-belanja";
import InfoDana from "src/components/info-dana";
import { PendapatanProvider } from "src/context/PendapatanContext"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
export default function IndexPage() {
  return (
    <div className="bg-gray-200 w-full p-10 flex-row">  
      <PendapatanProvider> 
        <DetailBelanjaProvider> 
          <BidangBelanjaProvider>
            <Header/>
            <InfoDana/>              
            <Bidang/>
          </BidangBelanjaProvider>
        </DetailBelanjaProvider> 
      </PendapatanProvider>      
    </div>
  );
}
