
import ElectricCategoryCard from './ElectricCategoryCard'

const ElectricCategory = () => {
  return (
    <div className='flex flex-wrap justify-between pb-6 lg:px-20 border-b  border-gray-200 cursor-pointer'>
        {[1,2,3,4,5,6,7,8,9,10].map((item) => <ElectricCategoryCard key={item}/>) }
    </div>
  )
}

export default ElectricCategory