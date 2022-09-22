import Pendapatan from "./pendapatanBelanja"
import SumberDana from "./sumberDana"

const InfoDana = () => {
    return(
        <div className="flex flex-row gap-5 mb-5">
            <Pendapatan/>
            <SumberDana/>
        </div>
    )
}
export default InfoDana