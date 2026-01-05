
import ProfileFieldCard from '../../../components/ProfileFieldCard'


const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold'>Persional Details</h1>

            </div>
            <div className='space-y-5'>
                <ProfileFieldCard keys='Name' value={'John Doe'}/>
                <ProfileFieldCard keys='Mobile' value={9854545151}/>
                <ProfileFieldCard keys='Email' value={'mWx2F@example.com'}/>
            </div>
        </div>
    </div>
  )
}

export default UserDetails