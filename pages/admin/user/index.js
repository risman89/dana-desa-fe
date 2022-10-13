import { useSession } from 'next-auth/react'
import Index from "@components/admin/user"
import { UserProvider } from "src/context/UserContext"

const User = () => {    
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
                <Index/>
            </UserProvider>
            </>
        }
        </>
    )
}
export default User