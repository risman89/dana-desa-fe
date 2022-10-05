import {useEffect, useContext, useState} from "react";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import { useRouter } from 'next/router'
import Link from 'next/link';
import moment from 'moment';
import FormatDate from "src/helpers/formatDate";
const Edit = () => {
    const detailBelanjaState = useContext(DetailBelanjaContext); 
    const router = useRouter()
    const { id } = router.query;
    const [detailByid, setDetailById] = useState([]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        detailBelanjaState.setValues({...detailBelanjaState.values, [name]: value, });             
    } 

    useEffect(() => {
        (async () => {
            const getData = await fetch('http://localhost:9001/detail-belanja/'+id);
            const data = await getData.json();
            detailBelanjaState.setValues({
                ...detailBelanjaState.values,
                id_bidang: data.data.id_bidang, jumlah: data.data.jumlah, tanggal: FormatDate(data.data.tanggal), bidang: data.data.bidang
            })
            detailBelanjaState.setId(id);
            setDetailById(data.data);
            }
        )()
       
    }, [detailBelanjaState.setValues, detailBelanjaState.detailBelanjaById]);


    return (
        <div className="container mx-auto w-1/2">
            <h4 className="text-black font-bold text-center text-2xl mb-2">Form Edit Pendapatan</h4>
            <form className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={detailBelanjaState.handleEdit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nama">
                        Jumlah
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jumlah" type="text" placeholder="Jumlah" name="jumlah"  value={detailBelanjaState.values.jumlah} onChange={ handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nama">
                        Bidang
                    </label>
                    <select id="id_bidang" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="id_bidang" onChange={ handleInputChange}>
                        <option selected value={ detailBelanjaState.values.id_bidang} >{detailBelanjaState.values.bidang}</option>
                        {detailBelanjaState.bidangBelanja.map((item, index) => ( 
                            <option value={item.id} key={index}>{item.bidang}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="tanggal">
                        Tanggal
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal" type="text" placeholder="Tanggal" name="tanggal"  value={detailBelanjaState.values.tanggal} onChange={ handleInputChange}/>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Simpan
                    </button>
                    <Link href="/admin/detail_belanja">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Kembali
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default Edit