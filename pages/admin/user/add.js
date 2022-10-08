import { UserProvider } from "src/context/UserContext"
import Input from "@components/admin/user/input"

const Add = () => {
    return (
    <UserProvider> 
        <Input/>
     </UserProvider>
    )
}
export default Add