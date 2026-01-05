import UserAddressCard from "./UserAddressCard"


const Address = () => {
  return (
    <div className="spacd-y-5">
        {[1].map((item) => (<UserAddressCard />) )}
    </div>
  )
}

export default Address