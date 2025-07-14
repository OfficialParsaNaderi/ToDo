import { HeaderState } from "@/components/HeaderState";
import { ProgressSummary } from "@/components/ProgressSummary";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";

export default async function ToDo() {
    return (
        <div className="container w-auto">
            <div className="space-y-8 border-1 border-b-0 border-gray-700/50">

                <HeaderState />

                <div className="max-w-2xl mx-auto">
                    <TaskForm />
                </div>

                <div className="space-y-4">
                    <TaskList />
                </div>

                <ProgressSummary />
            </div>
        </div>
    )
}
