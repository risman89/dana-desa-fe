import { useSession } from 'next-auth/react'
import { UserProvider } from "src/context/UserContext"
import Input from "@components/admin/user/input"

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
            <UserProvider> 
                <Input/>
            </UserProvider>
           </>
        }
        </>
    )
}
export default Add