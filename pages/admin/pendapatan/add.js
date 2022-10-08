import { PendapatanProvider } from "src/context/PendapatanContext"
import Input from "@components/admin/pendapatan/input"

const Add = () => {
    return (
    <PendapatanProvider>      
        <Input/>
     </PendapatanProvider>
    )
}
export default Add