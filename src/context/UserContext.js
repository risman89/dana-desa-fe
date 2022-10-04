import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router'
export const UserContext = createContext();
const initialValues = {
    nama: "",
    username: "",
    password: ""
  };
export const UserProvider = (props) => {
    const [values, setValues] = useState(initialValues);
    const [user, setUser] = useState([]);    
    const [userById, setUserById] = useState({});
    const [Id, setId] = useState({});
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const getData = await fetch(`http://localhost:9001/users`);
            const data = await getData.json();
            setUser(data.data);
            }
        )()
    }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if(userById.id){
    //         const newData = [...user]
    //         const NewUserByid = newData.findIndex((u => u.id == userById.id));
    //         newData[NewUserByid].nama = values.nama == "" ? userById.nama : values.nama
    //         newData[NewUserByid].username = values.username == "" ? userById.username : values.username
    //         newData[NewUserByid].password = values.password == "" ? userById.password : values.password
    //         setUser(newData);
    //         setValues(initialValues)            
    //         setUserById('')
    //     }  else{       
    //         const Data = {nama: values.nama, username: values.username, password: values.password};
    //         const res = await fetch('http://localhost:9001/users', {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(Data),
    //           });
    //           router.push("/admin/user")
    //     }
    // }   

    const handleInput = async (e) => {
        e.preventDefault();
        const Data = {nama: values.nama, username: values.username, password: values.password};
        const res = await fetch('http://localhost:9001/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Data),
          });
          router.push("/admin/user")
    }   

    const handleEdit = async (e) =>{
        e.preventDefault();
        const dataEdit = {nama: values.nama, username: values.username};
        const res = await fetch(`http://localhost:9001/users/${Id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataEdit),
          });
          router.push("/admin/user")
    }

    const handleDelete = async (e) =>{
          const id = e.target.id;
          const confirmDelete = confirm("yakin mau hapus ?");
          if (confirmDelete) {
            const res = await fetch(`http://localhost:9001/users/${id}`, {
                method: 'DELETE',
              });
            const newUser = await fetch(`http://localhost:9001/users`);
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