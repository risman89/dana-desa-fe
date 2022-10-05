import Index from "@components/admin/pendapatan"
import Admin_layout from "src/admin-layouts/admin_layout"
import { PendapatanProvider } from "src/context/PendapatanContext"

const Pendapatan = () => {
    return (
    <PendapatanProvider>
        <Admin_layout>          
            <Index/>
        </Admin_layout>
     </PendapatanProvider>
    )
}
export default Pendapatan