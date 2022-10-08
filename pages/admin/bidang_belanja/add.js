import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import Input from "@components/admin/bidang-belanja/input"

const Add = () => {
    return (
    <BidangBelanjaProvider> 
        <Input/>
     </BidangBelanjaProvider>
    )
}
export default Add