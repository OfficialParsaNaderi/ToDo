import { TaskItem } from "@/components/TaskItem";
import { Card, CardContent } from "@/components/ui/Card";

import { HandleGetTasks } from "@/lib/actions";

import { Plus } from "lucide-react";

export async function TaskList() {
    const tasks = await HandleGetTasks();

    return (
        <>
            <div className="space-y-4">
                {tasks.length === 0 ? (
                    <Card className="max-w-2xl mx-auto">
                        <CardContent className="text-center py-12">
                            <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-medium mb-2">No tasks yet</h3>
                            <p className="text-muted-foreground">Add your first task above to get started!</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-4 max-w-2xl mx-auto">
                        {tasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}