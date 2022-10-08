import { PendapatanProvider } from "src/context/PendapatanContext"
import Edit from "@components/admin/pendapatan/Edit"

const EditPendapatan = () => {
    return (
    <PendapatanProvider> 
        <Edit/>
     </PendapatanProvider>
    )
}
export default EditPendapatan