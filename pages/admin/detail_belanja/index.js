import Index from "@components/admin/detail-belanja"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const DetailBelanjaIndex = () => {
    return (
    <DetailBelanjaProvider> 
        <Index/>
     </DetailBelanjaProvider>
    )
}
export default DetailBelanjaIndex