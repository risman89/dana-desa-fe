import ItemBelanja from "./itemBelanja"
import Total from "./total"

const Bidang = () => {
  return (
    <div className="bg-white text-black flex-col">
      <h1 className="text-3xl p-3">Bidang </h1>
      <Total/>     
      <ItemBelanja/>
    </div>
  )
}
export default Bidang