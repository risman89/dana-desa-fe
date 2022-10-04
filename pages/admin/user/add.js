import Admin_layout from "src/admin-layouts/admin_layout"
import { UserProvider } from "src/context/UserContext"
import Input from "@components/admin/user/input"

const Add = () => {
    return (
    <UserProvider>
        <Admin_layout>          
            <Input/>
        </Admin_layout>
     </UserProvider>
    )
}
export default Add