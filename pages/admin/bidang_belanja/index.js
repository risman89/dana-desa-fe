import Index from "@components/admin/bidang-belanja"
import Admin_layout from "src/admin-layouts/admin_layout"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"

const BidangBelanja = () => {
    return (
    <BidangBelanjaProvider>
        <Admin_layout>          
            <Index/>
        </Admin_layout>
     </BidangBelanjaProvider>
    )
}
export default BidangBelanja