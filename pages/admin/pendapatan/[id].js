import { PendapatanProvider } from "src/context/PendapatanContext"
import Edit from "@components/admin/pendapatan/edit"
import { useRouter } from 'next/router'

const EditPendapatan = () => {
    const router = useRouter()
    const { id } = router.query
    return (
    <PendapatanProvider> 
        <Edit/>
     </PendapatanProvider>
    )
}
export default EditPendapatan