import { Card, CardContent, CardHeader, CardTitle } from "@/ToDo/components/ui/Card";

import { HandleGetTasks } from "@/lib/actions";

export async function ProgressSummary() {
    const tasks = await HandleGetTasks()
    const completedCount = tasks.filter((task) => task.completed).length
    const totalCount = tasks.length

    return (
        <>
            {totalCount > 0 && (
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-center">Progress Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span>Completed</span>
                                <span>
                                    {completedCount} of {totalCount}
                                </span>
                            </div>
                            <div className="w-full bg-secondary rounded-sm h-2">
                                <div
                                    className="bg-primary h-2 rounded-sm transition-all duration-300"
                                    style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
                                />
                            </div>
                            <p className="text-center text-muted-foreground">
                                {totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}% Complete
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    )
}