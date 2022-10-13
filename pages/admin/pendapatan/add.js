import { useSession } from 'next-auth/react'
import { PendapatanProvider } from "src/context/PendapatanContext"
import Input from "@components/admin/pendapatan/input"

const Add = () => {
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
                <Input/>
            </PendapatanProvider>
           </>
        }
        </>
    )
}
export default Add