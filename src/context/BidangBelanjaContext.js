import { useSession } from 'next-auth/react'
import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router'
export const BidangBelanjaContext = createContext();
const initialValues = {
    bidang: ""
  };
export const BidangBelanjaProvider = (props) => {
    const {data: session } = useSession()
    const [values, setValues] = useState(initialValues);
    const [bidangBelanja, setBidangBelanja] = useState([]);    
    const [bidangBelanjaById, setBidangBelanjaById] = useState({});
    const [Id, setId] = useState({});
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const getData = await fetch(`http://localhost:9001/bidang-belanja`);
            const data = await getData.json();
            setBidangBelanja(data.data);
            }
        )()
    }, []); 

    const handleInput = async (e) => {
        e.preventDefault();
        const Data = {bidang: values.bidang};
        const res = await fetch('http://localhost:9001/bidang-belanja', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.accessToken}`, 
            },
            body: JSON.stringify(Data),
          });
          router.push("/admin/bidang_belanja")
    }   

    const handleEdit = async (e) =>{
        e.preventDefault();
        const dataEdit = {bidang: values.bidang};
        const res = await fetch(`http://localhost:9001/bidang-belanja/${Id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',    
              'Authorization': `Bearer ${session.user.accessToken}`,        
            },
            body: JSON.stringify(dataEdit),
          });
          router.push("/admin/bidang_belanja")
    }

    const handleDelete = async (e) =>{
          const id = e.target.id;
          const confirmDelete = confirm("yakin mau hapus ?");
          if (confirmDelete) {
            const res = await fetch(`http://localhost:9001/bidang-belanja/${id}`, {
                method: 'DELETE',
                headers: {  
                  'Authorization': `Bearer ${session.user.accessToken}`,        
                },
              });
            const newData = await fetch(`http://localhost:9001/bidang-belanja`);
            const dataNew = await newData.json();
            setBidangBelanja(dataNew.data);
            router.push("/admin/bidang_belanja")
          }
    }

    const bidangBelanjaState = {
        bidangBelanja,
        setBidangBelanja,
        handleInput,
        values,
        setValues,
        bidangBelanjaById,
        setBidangBelanjaById,
        handleEdit,
        Id,
        setId,
        handleDelete
    };

    return(
        <BidangBelanjaContext.Provider value={bidangBelanjaState}>
            {props.children}
        </BidangBelanjaContext.Provider>
    )
}