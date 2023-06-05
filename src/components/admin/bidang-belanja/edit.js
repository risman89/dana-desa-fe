import {useEffect, useContext} from "react";
import { BidangBelanjaContext } from "src/context/BidangBelanjaContext";
import { useRouter } from 'next/router'
import Link from 'next/link';
const Edit = () => {
    const bidangBelanjaState = useContext(BidangBelanjaContext); 
    const router = useRouter()
    const { id } = router.query;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        bidangBelanjaState.setValues({...bidangBelanjaState.values, [name]: value, });             
    } 

    useEffect(() => {
        (async () => {
            const getData = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/bidang-belanja/`+id);
            const data = await getData.json();
            bidangBelanjaState.setValues({bidang: data.data.bidang})
            bidangBelanjaState.setId(id);
            }
        )()
       
    }, [bidangBelanjaState.setValues, bidangBelanjaState.pendapatanById]);


    return (
        <div className="container w-1/2 mx-auto">
            <h4 className="mb-2 text-2xl font-bold text-center text-black">Form Edit Bidang Belanja</h4>
            <form className="px-8 pt-6 pb-8 mb-4 rounded shadow-md bg-slate-800" onSubmit={bidangBelanjaState.handleEdit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="nama">
                        Bidang Belanja
                    </label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="bidang" type="text" placeholder="Bidang" name="bidang"  value={bidangBelanjaState.values.bidang} onChange={ handleInputChange}/>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                        Simpan
                    </button>
                    <Link href="/admin/bidang_belanja">
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