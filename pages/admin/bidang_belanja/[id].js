import Admin_layout from "src/admin-layouts/admin_layout"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import Edit from "@components/admin/bidang-belanja/edit"

const EditBidangBelanja = () => {
    return (
    <BidangBelanjaProvider>
        <Admin_layout>          
            <Edit/>
        </Admin_layout>
     </BidangBelanjaProvider>
    )
}
export default EditBidangBelanja