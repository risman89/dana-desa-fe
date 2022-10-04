import Index from "@components/admin/user"
import Admin_layout from "src/admin-layouts/admin_layout"
import { UserProvider } from "src/context/UserContext"

const User = () => {
    return (
    <UserProvider>
        <Admin_layout>          
            <Index/>
        </Admin_layout>
     </UserProvider>
    )
}
export default User