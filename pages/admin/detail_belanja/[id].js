import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"
import Edit from "@components/admin/detail-belanja/edit"

const EditBidangBelanja = () => {
    return (
    <DetailBelanjaProvider>  
        <Edit/>
     </DetailBelanjaProvider>
    )
}
export default EditBidangBelanja