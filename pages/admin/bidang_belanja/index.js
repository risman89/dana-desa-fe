import Index from "@components/admin/bidang-belanja"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"

const BidangBelanja = () => {
    return (
    <BidangBelanjaProvider>
        <Index/>
     </BidangBelanjaProvider>
    )
}
export default BidangBelanja