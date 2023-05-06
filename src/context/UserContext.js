import { useSession } from 'next-auth/react'
import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router'
export const UserContext = createContext();
const initialValues = {
    nama: "",
    username: "",
    password: ""
  };
export const UserProvider = (props) => {
    const {data: session } = useSession()
    const [values, setValues] = useState(initialValues);
    const [user, setUser] = useState([]);    
    const [userById, setUserById] = useState({});
    const [Id, setId] = useState({});
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const getData = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/users`);
            const data = await getData.json();
            setUser(data.data);
            }
        )()
    }, []);

    const handleInput = async (e) => {
        e.preventDefault();
        const Data = {nama: values.nama, username: values.username, password: values.password};
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.accessToken}`,
            },
            body: JSON.stringify(Data),
          });
          router.push("/admin/user")
    }   

    const handleEdit = async (e) =>{
        e.preventDefault();
        const dataEdit = {nama: values.nama, username: values.username};
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/users/${Id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.accessToken}`,
            },
            body: JSON.stringify(dataEdit),
          });
          router.push("/admin/user")
    }

    const handleDelete = async (e) =>{
          const id = e.target.id;
          const confirmDelete = confirm("yakin mau hapus ?");
          if (confirmDelete) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/users/${id}`, {
                method: 'DELETE',
                headers: {  
                  'Authorization': `Bearer ${session.user.accessToken}`,        
                },
              });
            const newUser = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/users`);
            const dataNew = await newUser.json();
            setUser(dataNew.data);
            router.push("/admin/user")
          }
    }

    const userState = {
        user,
        setUser,
        handleInput,
        values,
        setValues,
        userById,
        setUserById,
        handleEdit,
        Id,
        setId,
        handleDelete
    };

    return(
        <UserContext.Provider value={userState}>
            {props.children}
        </UserContext.Provider>
    )
}