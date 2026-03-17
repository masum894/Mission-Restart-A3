import { useNavigate } from "react-router-dom";
import errorImg from "../../../assets/App-Error.png";

const AppNotFound = ({ onGoBack }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (onGoBack) {
            onGoBack(); 
        } else {
            navigate("/"); 
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center animate-fadeIn">
            <div className="relative mb-8">
                <img 
                    src={errorImg} 
                    alt="App Not Found" 
                    className="w-full max-w-sm mx-auto object-contain"
                />
            </div>

            <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A]">
                    OPPS!! APP NOT FOUND
                </h2>
                <p className="text-gray-500 max-w-md mx-auto text-lg">
                    The App you are requesting is not found on our system. 
                    Please try another apps.
                </p>
            </div>

            <div className="mt-8">
                <button 
                    onClick={handleBackClick}
                    className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-12 py-4 h-auto rounded-xl border-none font-bold text-lg shadow-lg transition-all active:scale-95"
                >
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default AppNotFound;