import {useEffect, useContext} from "react";
import { UserContext } from "src/context/UserContext";
import { useRouter } from 'next/router'
import Link from 'next/link';
const Edit = () => {
    const userState = useContext(UserContext);
    const router = useRouter()
    const { id } = router.query;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        userState.setValues({...userState.values, [name]: value, });             
    } 

    useEffect(() => {
        (async () => {
            const getData = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVICE}/users/`+id);
            const data = await getData.json();
            userState.setValues({nama: data.data.nama, username : data.data.username})
            userState.setId(id);
            }
        )()
       
    }, [userState.setValues, userState.userById]);


    return (
        <div className="container mx-auto w-1/2">
            <h4 className="text-black font-bold text-center text-2xl mb-2">Form Edit User</h4>
            <form className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={userState.handleEdit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nama">
                        Nama
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama" name="nama"  value={userState.values.nama} onChange={ handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="username"  value={userState.values.username} onChange={ handleInputChange}/>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Simpan
                    </button>
                    <Link href="/admin/user">
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