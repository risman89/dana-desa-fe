import Admin_layout from "src/admin-layouts/admin_layout"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"
import Edit from "@components/admin/detail-belanja/edit"

const EditBidangBelanja = () => {
    return (
    <DetailBelanjaProvider>
        <Admin_layout>          
            <Edit/>
        </Admin_layout>
     </DetailBelanjaProvider>
    )
}
export default EditBidangBelanja