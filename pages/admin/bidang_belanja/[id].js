import { useSession } from 'next-auth/react'
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import Edit from "@components/admin/bidang-belanja/edit"

const EditBidangBelanja = () => {    
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
                <Edit/>
            </BidangBelanjaProvider>
           </>
        }
        </>
    )
}
export default EditBidangBelanja