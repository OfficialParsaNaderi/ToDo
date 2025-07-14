import { FaInfinity, FaLaptopCode, FaRoute, FaMapMarkerAlt } from "react-icons/fa";

export default function Robo_Footer() {
    return (
        <>
            <div className="absolute bottom-0 w-full h-16 flex justify-around items-center bg-black/70 backdrop-blur-sm border-t border-gray-500/50 hover:cursor-default">
                <div className="flex flex-col items-center text-white">
                    <FaInfinity size={20} />
                    <span className="text-xs mt-1">Artificial intelligence</span>
                </div>
                <div className="flex flex-col items-center text-white">
                    <FaLaptopCode size={20} />
                    <span className="text-xs mt-1">Digital Marketing</span>
                </div>
                <div className="flex flex-col items-center text-white">
                    <FaRoute size={20} />
                    <span className="text-xs mt-1">Awesome Trip</span>
                </div>
                <div className="flex flex-col items-center text-white">
                    <FaMapMarkerAlt size={20} />
                    <span className="text-xs mt-1">Persia</span>
                </div>
            </div>

            <div className="absolute bottom-0 w-full bg-black/70 backdrop-blur-lg hover:cursor-default overflow-hidden">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2flex flex-col items-center justify-center h-full p-4">
                    <h1 className="text-white text-center text-lg">Hi my name is Robo, I am an AI assistant for Tasks.</h1>
                    <h2 className="text-white text-center text-base mt-1">Let&apos;s Start with Writing your Tasks!</h2>
                    <h2 className="text-white text-center text-sm font-light mt-2">Yahh This is my Task for Rubikamp and I hope you Enjoy it ...</h2>
                </div>

            </div>
        </>
    )
}