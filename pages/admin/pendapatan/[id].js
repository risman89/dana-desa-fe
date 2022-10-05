import Admin_layout from "src/admin-layouts/admin_layout"
import { PendapatanProvider } from "src/context/PendapatanContext"
import Edit from "@components/admin/pendapatan/Edit"

const EditPendapatan = () => {
    return (
    <PendapatanProvider>
        <Admin_layout>          
            <Edit/>
        </Admin_layout>
     </PendapatanProvider>
    )
}
export default EditPendapatan