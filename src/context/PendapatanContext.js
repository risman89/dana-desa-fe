import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router'
export const PendapatanContext = createContext();
const initialValues = {
    jumlah: "",
    sumber: ""
  };
export const PendapatanProvider = (props) => {
    const [values, setValues] = useState(initialValues);
    const [pendapatan, setPendapatan] = useState([]);    
    const [pendapatanById, setPendapatanById] = useState({});
    const [Id, setId] = useState({});
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const getData = await fetch(`http://localhost:9001/pendapatan`);
            const data = await getData.json();
            setPendapatan(data.data);
            }
        )()
    }, []); 

    const handleInput = async (e) => {
        e.preventDefault();
        const Data = {jumlah: values.jumlah, sumber: values.sumber};
        const res = await fetch('http://localhost:9001/pendapatan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Data),
          });
          console.log(res.status);
          router.push("/admin/pendapatan")
    }   

    const handleEdit = async (e) =>{
        e.preventDefault();
        const dataEdit = {jumlah: values.jumlah, sumber: values.sumber};
        const res = await fetch(`http://localhost:9001/pendapatan/${Id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataEdit),
          });
          router.push("/admin/pendapatan")
    }

    const handleDelete = async (e) =>{
          const id = e.target.id;
          const confirmDelete = confirm("yakin mau hapus ?");
          if (confirmDelete) {
            const res = await fetch(`http://localhost:9001/pendapatan/${id}`, {
                method: 'DELETE',
              });
            const newData = await fetch(`http://localhost:9001/pendapatan`);
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