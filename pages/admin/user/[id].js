import { UserProvider } from "src/context/UserContext"
import Edit from "@components/admin/user/Edit"

const EditUser = () => {
    return (
    <UserProvider>      
        <Edit/>
     </UserProvider>
    )
}
export default EditUser