import Admin_layout from "src/admin-layouts/admin_layout"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import Input from "@components/admin/bidang-belanja/input"

const Add = () => {
    return (
    <BidangBelanjaProvider>
        <Admin_layout>          
            <Input/>
        </Admin_layout>
     </BidangBelanjaProvider>
    )
}
export default Add