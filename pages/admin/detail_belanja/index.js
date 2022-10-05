import Index from "@components/admin/detail-belanja"
import Admin_layout from "src/admin-layouts/admin_layout"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const DetailBelanja = () => {
    return (
    <DetailBelanjaProvider>
        <Admin_layout>          
            <Index/>
        </Admin_layout>
     </DetailBelanjaProvider>
    )
}
export default DetailBelanja