import Index from "@components/admin/user"
import { UserProvider } from "src/context/UserContext"

const User = () => {
    return (
    <UserProvider>        
        <Index/>
     </UserProvider>
    )
}
export default User