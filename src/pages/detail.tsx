import { Link, useParams } from "react-router-dom"
import { DataRestaurant } from "../interface/data";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../components/ui/rating";
import { FaArrowLeft } from "react-icons/fa";

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState<DataRestaurant | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://678f641549875e5a1a91a286.mockapi.io/api/v1/restaurant/${id}`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    console.log(data)

    return (
        <div className="w-full h-max min-h-screen flex justify-center py-10">
            <div className="container flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Link to={'/'}>
                        <div className="flex items-center gap-2">
                            <FaArrowLeft />
                            <p>Back</p>
                        </div>
                    </Link>
                </div>
                <img src={data?.images} alt="" />
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">{data?.name}</h1>
                        {data?.isOpen ? (
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
                    <Rating rating={Number(data?.rating)} />
                    <p>{data?.category} - {data?.priceRange}</p>
                    <p>{data?.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail