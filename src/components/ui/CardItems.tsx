
import { CardItemsProps } from "../../interface/components"
import { Link } from "react-router-dom"
import Rating from "./rating"


const CardItems = ({
    id,
    title,
    rating,
    price,
    image,
    isOpen,
    category
} : CardItemsProps) => {
    return (
        <Link to={`/detail/${id}`}>
            <div className="h-[350px] flex flex-col gap-4  justify-between">
                <div className="flex flex-col gap-2">
                    <img src={image} className="w-full h-[200px]" alt="" />
                    <div className="flex flex-col gap-1 ">
                        <h1 className="text-md font-medium ">{title}</h1>
                        <Rating rating={rating} />
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-400">{category} - {price}</p>
                            {isOpen ? (
                                <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                                    <p className="text-sm text-gray-400">OPEN NOW</p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 bg-red-400 rounded-full"></div>
                                    <p className="text-sm text-gray-400">CLOSED</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    className="h-10 w-full bg-blue-950 hover:bg-blue-900 text-white"
                >
                    Learn More
                </button>
            </div>
        </Link>
    )
}

export default CardItems