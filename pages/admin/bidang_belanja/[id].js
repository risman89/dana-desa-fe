import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import Edit from "@components/admin/bidang-belanja/edit"

const EditBidangBelanja = () => {
    return (
    <BidangBelanjaProvider>
        <Edit/>
     </BidangBelanjaProvider>
    )
}
export default EditBidangBelanja