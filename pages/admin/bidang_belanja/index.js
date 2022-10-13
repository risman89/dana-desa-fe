import { useSession } from 'next-auth/react'
import Index from "@components/admin/bidang-belanja"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"

const BidangBelanja = () => {
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
                <Index/>
            </BidangBelanjaProvider>
           </>
        }
        </>
    )
}
export default BidangBelanja