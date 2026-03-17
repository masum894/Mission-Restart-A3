import { Link, useNavigate } from "react-router-dom";
import appsData from "../../data/apps.json";
import heroImg from "../../../assets/hero.png";
import starIcon from "../../../assets/icon-ratings.png";
import downloadIcon from "../../../assets/icon-downloads.png";

const Home = () => {
    const navigate = useNavigate();
    
    const trendingApps = appsData.slice(0, 8);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* --- Hero Section --- */}
            <section className="text-center pt-20 pb-10 px-4">
                <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-tight">
                    We Build <br />
                    <span className="text-[#7C3AED]">Productive</span> Apps
                </h1>
                <p className="max-w-3xl mx-auto text-gray-500 mt-6 text-lg">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, 
                    smarter, and more exciting. Our goal is to turn your ideas into digital experiences.
                </p>
                
                {/* --- Store Buttons  --- */}
                <div className="flex justify-center gap-4 mt-10 mb-16">
                    <a 
                        href="https://play.google.com/store" 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-outline border-gray-300 px-8 rounded-lg hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition-all"
                    >
                        Google Play
                    </a>
                    <a 
                        href="https://www.apple.com/app-store/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-outline border-gray-300 px-8 rounded-lg hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition-all"
                    >
                        App Store
                    </a>
                </div>

                <div className="relative max-w-2xl mx-auto">
                    <img src={heroImg} alt="Hero Mobile" className="w-full h-auto" />
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="bg-[#7C3AED] text-white py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4">
                    <div>
                        <p className="text-sm opacity-80 uppercase">Total Downloads</p>
                        <h2 className="text-5xl font-black mt-2">29.6M</h2>
                        <p className="text-xs mt-2 opacity-70">21% More Than Last Month</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80 uppercase">Total Reviews</p>
                        <h2 className="text-5xl font-black mt-2">906K</h2>
                        <p className="text-xs mt-2 opacity-70">45% More Than Last Month</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80 uppercase">Active Apps</p>
                        <h2 className="text-5xl font-black mt-2">132+</h2>
                        <p className="text-xs mt-2 opacity-70">31 More Will Launch</p>
                    </div>
                </div>
            </section>

            {/* --- Trending Apps Section --- */}
            <section className="container mx-auto py-24 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#1A1A1A]">Trending Apps</h2>
                    <p className="text-gray-400 mt-3 text-lg">Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {trendingApps.map((app) => (
                        <div 
                            key={app.id} 
                            onClick={() => navigate(`/app/${app.id}`)} 
                            className="group cursor-pointer"
                        >
                            <div className="bg-[#F3F4F6] aspect-square rounded-[2.5rem] mb-6 overflow-hidden border-2 border-transparent group-hover:border-[#7C3AED] transition-all p-10 flex items-center justify-center">
                                <img 
                                    src={app.image} 
                                    alt={app.title} 
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    // ইমেজ না পেলে প্লেসহোল্ডার দেখাবে
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/150?text=App+Icon";
                                    }}
                                />
                            </div>
                            <h3 className="font-bold text-xl text-[#1A1A1A] leading-tight mb-4 group-hover:text-[#7C3AED]">
                                {app.title}
                            </h3>
                            <div className="flex justify-between items-center border-t pt-4 border-gray-100">
                                <div className="flex items-center gap-2 text-[#22C55E] font-bold">
                                    <img src={downloadIcon} alt="dw" className="w-5 h-5" />
                                    <span>{app.size}M</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#F59E0B] font-bold">
                                    <img src={starIcon} alt="star" className="w-5 h-5" />
                                    <span>{app.ratingAvg}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link to="/apps">
                        <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none px-16 py-4 h-auto rounded-xl font-bold text-lg shadow-lg">
                            Show All
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;