import Index from "@components/admin/pendapatan"
import { PendapatanProvider } from "src/context/PendapatanContext"

const Pendapatan = () => {
    return (
    <PendapatanProvider> 
        <Index/>
     </PendapatanProvider>
    )
}
export default Pendapatan