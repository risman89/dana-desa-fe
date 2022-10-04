import Admin_layout from "src/admin-layouts/admin_layout"
import { UserProvider } from "src/context/UserContext"
import Edit from "@components/admin/user/Edit"

const EditUser = () => {
    return (
    <UserProvider>
        <Admin_layout>          
            <Edit/>
        </Admin_layout>
     </UserProvider>
    )
}
export default EditUser