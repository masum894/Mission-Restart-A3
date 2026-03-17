import { useParams } from "react-router-dom";
import { useState } from "react";
import appsData from "../../data/apps.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import AppNotFound from "../AppNotFound/AppNotFound";

const AppDetails = () => {
    const { id } = useParams();


    const app = appsData.find(item => item.id === parseInt(id));

    const [isInstalled, setIsInstalled] = useState(() => {
        if (!app) return false;
        const savedData = localStorage.getItem('installed-apps');
        if (savedData) {
            try {
                const savedApps = JSON.parse(savedData);
                return savedApps.some(item => item.id === app.id);
            } catch {
                return false;
            }
        }
        return false;
    });

    const handleInstall = () => {
        if (!app) return;
        const savedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];


        const isExist = savedApps.find(item => item.id === app.id);
        if (!isExist) {
            const newApps = [...savedApps, app];
            localStorage.setItem('installed-apps', JSON.stringify(newApps));
            setIsInstalled(true);

            // Success Alert
            alert(`${app.title} installed successfully!`);
        }
    };


    if (!app) {
        return <AppNotFound />;
    }

    return (
        <div className="max-w-5xl mx-auto py-10 space-y-12 px-4 animate-fadeIn">
            {/* App Header Section */}
            <div className="flex flex-col md:flex-row gap-10 items-center bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-48 h-48 rounded-[2.5rem] shadow-lg object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/200?text=App+Icon";
                    }}
                />
                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h1 className="text-5xl font-black tracking-tight text-[#1A1A1A]">{app.title}</h1>
                    <p className="text-xl text-gray-500 font-semibold">{app.companyName}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <div className="badge badge-lg badge-outline py-4 px-5 font-bold border-gray-200">⭐ {app.ratingAvg} Rating</div>
                        <div className="badge badge-lg badge-outline py-4 px-5 font-bold border-gray-200">📥 {app.downloads.toLocaleString()} Downloads</div>
                        <div className="badge badge-lg badge-outline py-4 px-5 font-bold border-gray-200">📦 {app.size} MB</div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`btn btn-lg px-12 rounded-2xl font-bold transition-all duration-300 border-none ${isInstalled
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-200 hover:scale-105'
                                }`}
                        >
                            {isInstalled ? "Installed" : "Install Now"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200">
                <h2 className="text-2xl font-black mb-4 border-b pb-2 inline-block border-[#7C3AED]">App Description</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    {app.description}
                </p>
            </div>

            {/* Recharts Section (Bar Chart) */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200">
                <h2 className="text-2xl font-black mb-8 border-b pb-2 inline-block border-[#7C3AED]">Review Analytics</h2>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={app.ratings}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 600 }}
                            />
                            <YAxis hide />
                            <Tooltip
                                cursor={{ fill: '#f9fafb' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            />
                            <Bar
                                dataKey="count"
                                fill="#7C3AED"
                                radius={[10, 10, 0, 0]}
                                barSize={60}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-center text-gray-400 mt-6 font-medium">Visualization of app reviews based on user ratings</p>
            </div>
        </div>
    );
};

export default AppDetails;