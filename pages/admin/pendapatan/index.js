import { useSession } from 'next-auth/react'
import Index from "@components/admin/pendapatan"
import { PendapatanProvider } from "src/context/PendapatanContext"

const Pendapatan = () => {
    const { data: session, loading } = useSession()
    return (
        <>
        {!loading && !session?.user.accessToken ?
            <>
            <h3 className='text-2xl text-center'>Anda belum login, Silahkan login...!</h3>
           </>
           :
           <>
            <PendapatanProvider> 
                <Index/>
            </PendapatanProvider>
           </>
        }
        </>
    )
}
export default Pendapatan