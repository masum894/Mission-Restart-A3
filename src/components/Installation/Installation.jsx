import { useState, useEffect } from "react";
import appsData from "../../data/apps.json"; 

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        
        const savedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];
        
        
        if(savedApps.length === 0) {
            setInstalledApps(appsData.slice(0, 3));
        } else {
            setInstalledApps(savedApps);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    
    const handleSort = (type) => {
        setSortBy(type);
        let sorted = [...installedApps];
        if (type === "lowToHigh") {
            sorted.sort((a, b) => Number(a.size) - Number(b.size));
        } else if (type === "highToLow") {
            sorted.sort((a, b) => Number(b.size) - Number(a.size));
        }
        setInstalledApps(sorted);
    };

    
    const handleUninstall = (id) => {
        const remainingApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(remainingApps);
        localStorage.setItem('installed-apps', JSON.stringify(remainingApps));
        alert("App uninstalled successfully!");
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] pb-20">
            {/* Header Section */}
            <section className="bg-white pt-16 pb-12 text-center border-b border-gray-100">
                <h1 className="text-4xl font-black text-[#002B44] mb-3">Your Installed Apps</h1>
                <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </section>

            <div className="container mx-auto px-4 mt-8">
                {/* Sort Bar */}
                <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-[#1A1A1A]">
                        ({installedApps.length}) Apps Found
                    </h2>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-sm btn-outline border-gray-300 gap-2 capitalize">
                            {sortBy ? `Sorted: ${sortBy}` : "Sort By Size"} ▼
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                            <li><button className="text-left w-full px-4 py-2 hover:bg-gray-100" onClick={() => handleSort("lowToHigh")}>Size: Low to High</button></li>
                            <li><button className="text-left w-full px-4 py-2 hover:bg-gray-100" onClick={() => handleSort("highToLow")}>Size: High to Low</button></li>
                        </ul>
                    </div>
                </div>

                {/* Installed Apps List */}
                <div className="flex flex-col gap-4">
                    {installedApps.map((app) => (
                        <div key={app.id} className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-6">
                                {/* Image with Error Handling */}
                                <div className="w-20 h-20 bg-[#F3F4F6] rounded-xl flex items-center justify-center p-4 overflow-hidden">
                                    <img 
                                        src={app.image} 
                                        alt={app.title} 
                                        className="w-full h-full object-contain"
                                        
                                        
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = "https://via.placeholder.com/150?text=App+Icon";
                                        }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{app.title}</h3>
                                    <div className="flex items-center gap-4 text-sm font-medium">
                                        <span className="text-[#22C55E]">↓ {app.size}M</span>
                                        <span className="text-[#F59E0B]">★ {app.ratingAvg}</span>
                                        <span className="text-gray-400 font-normal">Size: {app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleUninstall(app.id)}
                                className="btn bg-[#22C55E] hover:bg-red-500 text-white border-none rounded-lg px-6 transition-colors"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}

                    {/* Empty State */}
                    {installedApps.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                            <h3 className="text-xl font-bold text-gray-400">No Apps Installed Yet.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installation;