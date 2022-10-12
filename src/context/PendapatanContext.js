import { useSession } from 'next-auth/react'
import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router'
export const PendapatanContext = createContext();
const initialValues = {
    jumlah: "",
    sumber: ""
  };
export const PendapatanProvider = (props) => {
    const {data: session } = useSession()
    const [values, setValues] = useState(initialValues);
    const [pendapatan, setPendapatan] = useState([]);    
    const [pendapatanById, setPendapatanById] = useState({});
    const [Id, setId] = useState({});
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const getData = await fetch(`https://dana-desa.herokuapp.com/pendapatan`);
            const data = await getData.json();
            setPendapatan(data.data);
            }
        )()
    }, []); 

    const handleInput = async (e) => {
        e.preventDefault();
        const Data = {jumlah: values.jumlah, sumber: values.sumber};
        const res = await fetch('https://dana-desa.herokuapp.com/pendapatan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.accessToken}`, 
            },
            body: JSON.stringify(Data),
          });
          // console.log(res.status);
          router.push("/admin/pendapatan")
    }   

    const handleEdit = async (e) =>{
        e.preventDefault();
        const dataEdit = {jumlah: values.jumlah, sumber: values.sumber};
        const res = await fetch(`https://dana-desa.herokuapp.com/pendapatan/${Id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.accessToken}`, 
            },
            body: JSON.stringify(dataEdit),
          });
          router.push("/admin/pendapatan")
    }

    const handleDelete = async (e) =>{
          const id = e.target.id;
          const confirmDelete = confirm("yakin mau hapus ?");
          if (confirmDelete) {
            const res = await fetch(`https://dana-desa.herokuapp.com/pendapatan/${id}`, {
                method: 'DELETE',
                headers: {  
                  'Authorization': `Bearer ${session.user.accessToken}`,        
                },
              });
            const newData = await fetch(`https://dana-desa.herokuapp.com/pendapatan`);
            const dataNew = await newData.json();
            setPendapatan(dataNew.data);
            router.push("/admin/pendapatan")
          }
    }

    const pendapatanState = {
        pendapatan,
        setPendapatan,
        handleInput,
        values,
        setValues,
        pendapatanById,
        setPendapatanById,
        handleEdit,
        Id,
        setId,
        handleDelete
    };

    return(
        <PendapatanContext.Provider value={pendapatanState}>
            {props.children}
        </PendapatanContext.Provider>
    )
}