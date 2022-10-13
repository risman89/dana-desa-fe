import { useSession } from 'next-auth/react'
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"
import Edit from "@components/admin/detail-belanja/edit"

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
            <DetailBelanjaProvider>  
                <Edit/>
            </DetailBelanjaProvider>
           </>
        }
        </>
    )
}
export default EditBidangBelanja