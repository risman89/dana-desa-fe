import Input from "@components/admin/detail-belanja/input"
import Admin_layout from "src/admin-layouts/admin_layout"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const Add = () => {
    return (
    <DetailBelanjaProvider>
        <Admin_layout>          
            <Input/>
        </Admin_layout>
     </DetailBelanjaProvider>
    )
}
export default Add