import Input from "@components/admin/detail-belanja/input"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const Add = () => {
    return (
    <DetailBelanjaProvider> 
        <Input/>
     </DetailBelanjaProvider>
    )
}
export default Add