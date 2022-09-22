const Banner = () => {
    return(
        <div className="flex-row">
            <h1 className="text-4xl">APBG {new Date().getFullYear()}</h1>
            <h1 className="text-4xl">{process.env.DESA}</h1>        
            <h1 className="text-2xl">Kecamatan {process.env.KECAMATAN}</h1>        
            <h1 className="text-2xl">Kabupaten {process.env.KAB}</h1>        
        </div>
    )
}

export default Banner