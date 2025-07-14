import { Badge } from "@/components/ui/badge";

import { CheckCircle, Circle } from "lucide-react";
import Link from "next/link";

import { HandleGetTasks } from "@/lib/actions";

export async function HeaderState() {
    const tasks = await HandleGetTasks()
    const completedCount = tasks.filter((task) => task.completed).length
    const totalCount = tasks.length

    return (
        <>
            <div className="ToDo w-full h-16 flex justify-around items-center bg-black/20 backdrop-blur-sm border-b border-t border-gray-500/50">
                <h1 className="font-bold text-lg text-white text-center m-5">ToDo App</h1>

                <div className="Links flex items-center">
                    <Link href="/" className="text-white text-lg font-light transition-all duration-500  hover:underline ml-5">Home</Link>

                    <span className="text-white text-lg font-light m-2">/</span>

                    <Link href="/blog" className="text-white text-lg font-light transition-all duration-500 hover:underline mr-5">Blog</Link>
                </div>
            </div>

            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white">My Tasks</h1>
                <div className="flex justify-center gap-4">
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1 text-white">
                        <Circle className="h-4 w-4" />
                        {totalCount - completedCount} Pending
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                        <CheckCircle className="h-4 w-4" />
                        {completedCount} Completed
                    </Badge>
                </div>
            </div>
        </>
    )
}