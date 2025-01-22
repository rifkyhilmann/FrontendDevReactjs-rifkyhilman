import { useEffect, useState } from "react";
import CardItems from "../components/ui/CardItems";
import axios from "axios";
import { DataRestaurant } from "../interface/data";

const Pages = () => {
    const [data, setData] = useState<DataRestaurant[] | null>(null);
    const [visibleData, setVisibleData] = useState<DataRestaurant[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [filterOpenNow, setFilterOpenNow] = useState(false); // State for "Open Now" filter
    const [priceFilter, setPriceFilter] = useState(""); // State for price filter
    const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter

    const fetchData = async () => {
        try {
            const response = await axios.get('https://678f641549875e5a1a91a286.mockapi.io/api/v1/restaurant');
            setData(response.data);
            setVisibleData(response.data.slice(0, 8));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLoadMore = () => {
        if (data) {
            setVisibleData(data);
            setShowAll(true);
        }
    };

    useEffect(() => {
        handleFilterChange();
    }, [filterOpenNow, priceFilter, categoryFilter]); // Jalankan filter ulang saat state berubah    


    const handleFilterChange = () => {
        if (data) {
            let filteredData = [...data];
    
            // Filter untuk "Open Now"
            if (filterOpenNow) {
                filteredData = filteredData.filter((item) => item.isOpen === true);
            }
    
            // Filter berdasarkan kategori
            if (categoryFilter) {
                filteredData = filteredData.filter((item) => item.category === categoryFilter);
            }
    
            // Filter berdasarkan harga
            if (priceFilter) {
                filteredData = filteredData.filter((item) => item.priceRange === priceFilter);
            }
    
            setVisibleData(filteredData.slice(0, 6)); // Tampilkan 6 data pertama
            setShowAll(false); // Reset state "Load More"
        }
    };
    
    

    const handleResetFilters = () => {
        setFilterOpenNow(false); // Reset "Open Now" filter
        setPriceFilter(""); // Reset price filter
        setCategoryFilter(""); // Reset category filter
        if (data) {
            setVisibleData(data.slice(0, 6)); // Reset visible data
            setShowAll(false); // Reset "Load More" state
        }
    };

    return (
        <div className="w-full min-h-screen font-poppins h-max flex flex-col items-center gap-8 py-7">
            <div className="container flex flex-col gap-4">
                <h1 className="text-3xl">Restaurant</h1>
                <p className="w-full md:w-[60%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo, sunt vero, quidem earum, nihil aliquam delectus dolor optio consequatur!
                </p>
            </div>
            <div className="w-full h-max flex flex-col gap-3 items-center">
                <hr className="w-full border-t border-gray-200" />
                <div className="container h-max flex items-center justify-between md:flex-row flex-col gap-5">
                    <div className="flex  md:items-center gap-5 md:flex-row flex-col">
                        <p className="text-sm">Filter By:</p>
                        <div className="flex items-center gap-1 text-sm border-b">
                            <input
                                type="radio"
                                checked={filterOpenNow}
                                onChange={(e) => setFilterOpenNow(e.target.checked)} 
                            />
                            <p>Open Now</p>
                        </div>
                        <select
                            className="text-sm border-b w-24 focus:outline-none"
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value)}
                        >
                            <option value="">Price</option>
                            <option value="10000">10,000</option>
                            <option value="30000">30,000</option>
                            <option value="50000">50,000</option>
                            <option value="100000">100,000</option>
                            <option value="300000">300,000</option>
                        </select>

                        <select
                            className="text-sm border-b w-32 focus:outline-none"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="">Categories</option>
                            <option value="America">America</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Spain">Spain</option>
                            <option value="Japanese">Japan</option>
                            <option value="Chinese">China</option>
                        </select>
                    </div>
                    <button
                        className="h-8 px-7 border text-xs text-gray-400"
                        onClick={handleResetFilters}
                    >
                        CLEAR ALL
                    </button>
                </div>
                <hr className="w-full border-t border-gray-200" />
            </div>
            <div className="w-full h-max flex justify-center pb-10">
                <div className="container h-max flex flex-col gap-6">
                    <h4 className="text-lg">All Restaurant</h4>
                    <div className="h-max w-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-7">
                        {visibleData && visibleData.map((item, i) => (
                            <CardItems
                                key={i}
                                id={item.id}
                                title={item.name}
                                rating={item.rating}
                                price={Number(item.priceRange)}
                                image={visibleData[0].images}
                                isOpen={item.isOpen}
                                category={visibleData[0]?.category}
                            />
                        ))}
                    </div>
                    {!showAll && visibleData.length < (data?.length || 0) && (
                        <div className="center-flex mt-9">
                            <button
                                onClick={handleLoadMore}
                                className="w-52 h-9 border border-blue-950 hover:bg-blue-950 hover:text-white"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pages;
