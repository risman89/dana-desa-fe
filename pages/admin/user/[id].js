import { UserProvider } from "src/context/UserContext"
import Edit from "@components/admin/user/edit"

const EditUser = () => {
    return (
    <UserProvider>      
        <Edit/>
     </UserProvider>
    )
}
export default EditUser