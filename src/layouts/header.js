import { useSession, signOut } from 'next-auth/react'
import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { data: session, loading } = useSession()
  // console.log(session);
  const handleLogout = () =>{
    const confirmDelete = confirm("yakin mau Log Out ?");
    if (confirmDelete) {
      signOut()
    }
}

  return (
    <header className="bg-green-600">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image
            src="/tailwind-logo.svg"
            width={40}
            height={40}
            priority
            alt="Tailwind CSS logo"
          />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              {process.env.APP_NAME}
            </a>           
          </Link>         
        </div>
        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >

          {!loading && !session?.user.accessToken ?
            <>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
                <Link href="/login">
                  <a className="block text-white">Login</a>
                </Link>
              </li>
            </>
            :
            <>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
              <Link href="/admin/">
                <a className="block text-white">Dashboard</a>
              </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
              <Link href="/admin/user">
                <a className="block text-white">User</a>
              </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
              <Link href="/admin/pendapatan">
                <a className="block text-white">Pendapatan</a>
              </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
              <Link href="/admin/bidang_belanja">
                <a className="block text-white">Bidang Belanja</a>
              </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
              <Link href="/admin/detail_belanja">
                <a className="block text-white">Detail Belanja</a>
              </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-6 font-bold">
                <span className='font-bold'>{session.user.nama} : </span>
                <button onClick={() => handleLogout()} className="text-white font-bold">Log Out</button>
              </li>
            </>
          }

        </ul>
      </div>
    </header>
  );
}
