import Index from "@components/admin/detail-belanja"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const DetailBelanja = () => {
    return (
    <DetailBelanjaProvider> 
        <Index/>
     </DetailBelanjaProvider>
    )
}
export default DetailBelanja