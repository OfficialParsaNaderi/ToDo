// import ToDo from "./todo/page";

import Robot from "@/components/Robo";
import ToDo from "@/app/(routes)/todo/page";

export default function Home() {
    return (
        <>
            <div className="bg-black h-screen w-screen flex justify-center items-center">
                <div className="grid items-center justify-center h-full w-full">
                    <div className="Intro relative w-[500px] h-[600px] border-1 border-t-0 border-b-0 border-gray-700/50 overflow-hidden">
                        <Robot />
                    </div>
                    <div className="ToDo relative w-[500px] h-[600px] border-b-0">
                        <ToDo />
                    </div>
                </div>
            </div>
        </>
    )
}