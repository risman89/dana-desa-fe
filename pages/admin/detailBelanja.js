import Index from "@components/admin/detail-belanja"
// import Admin_layout from "src/admin-layouts/admin_layout"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const DetailBelanjaPage = () => {
    return (
         <DetailBelanjaProvider> 
         <Index/>
         </DetailBelanjaProvider> 
    )
}
export default DetailBelanjaPage