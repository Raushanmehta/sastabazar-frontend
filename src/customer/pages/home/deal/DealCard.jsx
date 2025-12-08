

const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
        <img 
        src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=" 
        alt="watch"
        className="border-x-[7px] border-t-[7px] border-[#0eb6e9] w-full h-[12rem] object-cover object-top" 
        
        />

        <div className="border-4 border-black bg-black text-white p-2 items-center ">
            <p className="text-lg font-semibold">Smart watch</p>
            <p className="text-2xl font-bold">30% off</p>
            <p className="text-balance text-lg">shop now</p>
        </div>
    </div>
  )
}

export default DealCard