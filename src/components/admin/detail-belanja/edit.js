import {useEffect, useContext, useState} from "react";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import { useRouter } from 'next/router'
import Link from 'next/link';
// import moment from 'moment';
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
            const getData = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/detail-belanja/`+id);
            const data = await getData.json();
            detailBelanjaState.setValues({
                ...detailBelanjaState.values,
                id_bidang: data.data.id_bidang, jumlah: data.data.jumlah, nama_item: data.data.nama_item, tanggal: FormatDate(data.data.tanggal), bidang: data.data.bidang
            })
            detailBelanjaState.setId(id);
            setDetailById(data.data);
            }
        )()
       
    }, [detailBelanjaState.setValues, detailBelanjaState.detailBelanjaById]);


    return (
        <div className="container w-1/2 mx-auto">
            <h4 className="mb-2 text-2xl font-bold text-center text-black">Form Edit Detail Belanja</h4>
            <form className="px-8 pt-6 pb-8 mb-4 rounded shadow-md bg-slate-800" onSubmit={detailBelanjaState.handleEdit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="nama">
                        Jumlah
                    </label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="jumlah" type="text" placeholder="Jumlah" name="jumlah"  value={detailBelanjaState.values.jumlah} onChange={ handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="jumlah">
                        Item Balanja
                    </label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="nama_item" type="text" placeholder="Item Belanja" name="nama_item"  value={ detailBelanjaState.values.nama_item } onChange={ handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="nama">
                        Bidang
                    </label>
                    <select id="id_bidang" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="id_bidang" onChange={ handleInputChange}>
                        <option selected value={ detailBelanjaState.values.id_bidang} >{detailBelanjaState.values.bidang}</option>
                        {detailBelanjaState.bidangBelanja.map((item, index) => ( 
                            <option value={item.id} key={index}>{item.bidang}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="tanggal">
                        Tanggal
                    </label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="tanggal" type="text" placeholder="Tanggal" name="tanggal"  value={detailBelanjaState.values.tanggal} onChange={ handleInputChange}/>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                        Simpan
                    </button>
                    <Link href="/admin/detail_belanja">
                        <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
                            Kembali
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default Edit