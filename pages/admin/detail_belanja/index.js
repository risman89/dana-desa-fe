import { useSession } from 'next-auth/react'
import Index from "@components/admin/detail-belanja"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"

const DetailBelanjaIndex = () => {    
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
                <Index/>
            </DetailBelanjaProvider>
           </>
        }
        </>
    )
}
export default DetailBelanjaIndex