import { useSession } from 'next-auth/react'
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import Input from "@components/admin/bidang-belanja/input"

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
            <BidangBelanjaProvider> 
                <Input/>
            </BidangBelanjaProvider>
           </>
        }
        </>
    )
}
export default Add