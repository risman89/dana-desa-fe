import {useContext} from "react";
import { PendapatanContext } from "src/context/PendapatanContext";
import Link from 'next/link';
const Input = () => {
    const pendpatanState = useContext(PendapatanContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        pendpatanState.setValues({...pendpatanState.values, [name]: value, });             
} 

    return (
        <div className="container mx-auto w-1/2">
            <h4 className="text-black font-bold text-center text-2xl mb-2">Form Input Pendapatan</h4>
            <form className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={pendpatanState.handleInput}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nama">
                        Jumlah
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jumlah" type="text" placeholder="Jumlah" name="jumlah"  value={ pendpatanState.values.jumlah } onChange={ handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                        Sumber
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sumber" type="text" placeholder="Sumber" name="sumber"  value={ pendpatanState.values.sumber } onChange={ handleInputChange}/>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Simpan
                    </button>
                    <Link href="/admin/pendapatan">
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