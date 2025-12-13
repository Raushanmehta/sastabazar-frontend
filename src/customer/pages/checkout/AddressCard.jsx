import { Radio } from '@mui/material'


const AddressCard = () => {

  const handleChage = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='p-5 border border-gray-200 rounded-md flex'>
        <div>
            <Radio
            checked={true}
            name="radio-buttons"
            value=""
            onChange={handleChage}
           
            />
        </div>
        <div className='space-y-3 pt-3'>
          <h1>Name</h1>
          <p>Address</p>
          <p><strong>Mobile : </strong> 9304137446</p>
        </div>
    </div>
  )
}

export default AddressCard