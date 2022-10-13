import { useSession } from 'next-auth/react'
import Input from "@components/admin/detail-belanja/input"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

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
            <DetailBelanjaProvider> 
                <Input/>
            </DetailBelanjaProvider>
           </>
        }
        </>
    )
}
export default Add