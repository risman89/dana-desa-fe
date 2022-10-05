import {useContext} from "react";
import { DetailBelanjaContext } from "src/context/DetailBelanjaContext";
import Link from 'next/link';
const Input = () => {
    const detailBelanjaState = useContext(DetailBelanjaContext); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        detailBelanjaState.setValues({...detailBelanjaState.values, [name]: value, });             
} 

    return (
        <div className="container mx-auto w-1/2">
            <h4 className="text-black font-bold text-center text-2xl mb-2">Form Input Bidang Belanja</h4>
            <form className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={detailBelanjaState.handleInput}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="jumlah">
                        Jumlah
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jumlah" type="text" placeholder="1000000" name="jumlah"  value={ detailBelanjaState.values.jumlah } onChange={ handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nama">
                        Bidang
                    </label>
                    <select id="id_bidang" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="id_bidang"  value={ detailBelanjaState.values.id_bidang } onChange={ handleInputChange}>
                        <option selected>Pilih Bidang</option>
                        {detailBelanjaState.bidangBelanja.map((item, index) => ( 
                            <option value={item.id} key={index}>{item.bidang}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="tanggal">
                        Tanggal
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal" type="date" placeholder="Tanggal" name="tanggal"  value={ detailBelanjaState.values.tanggal } onChange={ handleInputChange}/>
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
export default Input