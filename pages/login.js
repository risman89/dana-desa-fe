import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginStarted, setIsLoginStarted] = useState(false)
    const [loginError, setLoginError] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (router.query.error) {
            setLoginError(router.query.error)
            setUsername(router.query.username)
            setPassword(router.query.password)
        }
    }, [router])

    const handleLogin  = async  (e) => {
        try {
            e.preventDefault()
            setIsLoginStarted(true)        
            // console.log(isLoginStarted);
           const  res = await  signIn('credentials',
                {
                    username,
                    password,
                    // callbackUrl: `${window.location.origin}/admin/`
                    redirect: false
                }
            );
            if(res.ok == false){
               alert('Password / Password salah, coba lagi ..!')
            }else{
                router.push('/admin/')
                // console.log("sukses");
            }
        } catch (error) {
            console.log(error);
        }
      
    }

    return (
        <div className="container">
            <main className="flex flex-col w-80 mx-auto">
                <div className="mt-10 overflow-hidden w-full">
                    <h1 className="text-2xl text-center font-bold mb-2">Login</h1>
                    <form onSubmit={(e) => handleLogin(e)} className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor='username' className="block text-white text-sm font-bold mb-2">Username</label>
                            <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} className={loginError ? 'border-solid ' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} placeholder="username"/>
                            <span className="text-red-600">{loginError}</span>
                        </div>
                        <div className="mb-4">
                            <label htmlFor='inputPassword' className="block text-white text-sm font-bold mb-2">Password</label>
                            <input id='inputPassword' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className={loginError ? 'border-solid ' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} placeholder="password"/>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
                            <Link href="/">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Kembali
                            </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
