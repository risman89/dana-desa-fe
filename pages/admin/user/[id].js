import { useSession } from 'next-auth/react'
import { UserProvider } from "src/context/UserContext"
import Edit from "@components/admin/user/edit"

const EditUser = () => {
    const { data: session, loading } = useSession()
    return (
        <>
        {!loading && !session?.user.accessToken ?
            <>
            <h3 className='text-2xl text-center'>Anda belum login, Silahkan login...!</h3>
           </>
           :
           <>
                <UserProvider>      
                    <Edit/>
                </UserProvider>  
            </>
        }
        </>
    )
}
export default EditUser