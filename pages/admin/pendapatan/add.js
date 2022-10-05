import Admin_layout from "src/admin-layouts/admin_layout"
import { PendapatanProvider } from "src/context/PendapatanContext"
import Input from "@components/admin/pendapatan/input"

const Add = () => {
    return (
    <PendapatanProvider>
        <Admin_layout>          
            <Input/>
        </Admin_layout>
     </PendapatanProvider>
    )
}
export default Add