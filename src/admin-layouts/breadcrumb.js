import Link from 'next/link'
const Breadcrumb = () => {
    return(
      <ul className="flex gap-5 justify-center font-bold">
        <li className="mr-6">
        <Link href="/admin/">
          <a className="text-blue-500 hover:text-blue-800" href="#">Dashboard</a>          
        </Link>
        </li>
        <li className="mr-6">
        <Link href="/admin/user">
          <a className="text-blue-500 hover:text-blue-800" href="#">User</a>
        </Link>
        </li>
        <li className="mr-6">
        <Link href="/admin/pendapatan">
          <a className="text-blue-500 hover:text-blue-800" href="#">Pendapatan</a>
        </Link>
        </li>
        <li className="mr-6">
        <Link href="/admin/bidangBelanja">
          <a className="text-blue-500 hover:text-blue-800" href="#">Bidang Belanja</a>
        </Link>
        </li>
        <li className="mr-6">
        <Link href="/admin/detailBelanja">
          <a className="text-blue-500 hover:text-blue-800" href="#">Detail Belanja</a>
        </Link>
        </li>
      </ul>
    )

}
export default Breadcrumb