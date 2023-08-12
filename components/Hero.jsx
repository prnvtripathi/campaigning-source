const Hero = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-2 p-2">
                <div className="col-span-2 h-[8rem] p-2 flex justify-between items-center bg-orange-500 text-2xl rounded-lg">
                    Political Election Promotion
                    <div className="bg-bg py-2 px-3 rounded-full text-base hover:bg-gray-600 cursor-pointer">
                        Let's Start
                    </div>
                </div>
                <div className="h-[8rem] p-2 flex items-center bg-blue-500 text-2xl rounded-lg">
                    Business Development
                </div>
            </div>
        </div>
    )
}

export default Hero