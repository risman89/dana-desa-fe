import PendapatanBelanja from "./pendapatanBelanja"
import SumberDana from "./sumberDana"

const InfoDana = () => {
    return(
        <div className="flex flex-row gap-5 mb-5">
            <PendapatanBelanja/>
            <SumberDana/>
        </div>
    )
}
export default InfoDana