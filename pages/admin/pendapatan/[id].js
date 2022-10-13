import { useSession } from 'next-auth/react'
import { PendapatanProvider } from "src/context/PendapatanContext"
import Edit from "@components/admin/pendapatan/edit"
import { useRouter } from 'next/router'

const EditPendapatan = () => {    
    const { data: session, loading } = useSession()
    const router = useRouter()
    const { id } = router.query
    return (
        <>
        {!loading && !session?.user.accessToken ?
            <>
            <h3 className='text-2xl text-center'>Anda belum login, Silahkan login...!</h3>
           </>
           :
           <>
            <PendapatanProvider> 
                <Edit/>
            </PendapatanProvider>
           </>
        }
        </>
    )
}
export default EditPendapatan