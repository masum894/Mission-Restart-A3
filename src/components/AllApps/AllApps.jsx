import { useState } from "react";
import appsData from "../../data/apps.json";
import { Link } from "react-router-dom";
import AppNotFound from "../AppNotFound/AppNotFound"; 
import starIcon from "../../../assets/icon-ratings.png";
import downloadIcon from "../../../assets/icon-downloads.png";

const AllApps = () => {
    const [searchQuery, setSearchQuery] = useState("");

    
    const filteredApps = appsData.filter((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
            <div className="container mx-auto">
                
                {/* Search Bar Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-3xl font-black text-[#1A1A1A]">Explore All Apps</h1>
                        <p className="text-gray-500">{filteredApps.length} Apps Found</p>
                    </div>

                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search by app name..."
                            className="input input-bordered w-full pl-12 rounded-xl border-gray-200 focus:border-[#7C3AED] focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Main Content Area */}
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredApps.map((app) => (
                            <Link 
                                to={`/app/${app.id}`} 
                                key={app.id} 
                                className="group bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                            >
                                <div className="bg-[#F3F4F6] aspect-square rounded-[2rem] mb-6 flex items-center justify-center p-8">
                                    <img src={app.image} alt={app.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="font-bold text-xl text-[#1A1A1A] mb-4 group-hover:text-[#7C3AED]">{app.title}</h3>
                                <div className="flex justify-between items-center border-t pt-4 border-gray-50 text-sm font-bold">
                                    <div className="flex items-center gap-2 text-[#22C55E]">
                                        <img src={downloadIcon} alt="dw" className="w-4 h-4" />
                                        <span>{app.size}M</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#F59E0B]">
                                        <img src={starIcon} alt="star" className="w-4 h-4" />
                                        <span>{app.ratingAvg}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    
                    <div className="py-10 bg-white rounded-[3rem] shadow-sm">
                        <AppNotFound onGoBack={() => setSearchQuery("")} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllApps;