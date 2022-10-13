import { useSession } from 'next-auth/react'
import DashboardAdmin from '@components/admin/dashboardAdmin'
import { PendapatanProvider } from "src/context/PendapatanContext"
import { DetailBelanjaProvider } from "src/context/DetailBelanjaContext"
import { BidangBelanjaProvider } from "src/context/BidangBelanjaContext"
import { UserProvider } from "src/context/UserContext"
const Dashboard = () => {
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
                <BidangBelanjaProvider>
                    <DetailBelanjaProvider> 
                        <UserProvider> 
                            <DashboardAdmin/>
                        </UserProvider> 
                    </DetailBelanjaProvider> 
                </BidangBelanjaProvider>
            </PendapatanProvider>      
            </>
          }
        </>
    )
}
export default Dashboard