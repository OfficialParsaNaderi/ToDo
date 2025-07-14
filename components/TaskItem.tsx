"use client"

import { useState } from "react"
import { Button } from "@/ToDo/components/ui/button";
import { Card, CardContent } from "@/ToDo/components/ui/Card";
import { Checkbox } from "@/ToDo/components/ui/checkbox";
import { Badge } from "@/ToDo/components/ui/badge";
import { TaskForm } from "./TaskForm";

import type { Task } from "@/lib/database";
import { cn } from "@/lib/utils";
import { HandleToggleTaskComplete, HandleDeleteTask } from "@/lib/actions";

import { Edit2, Trash2, Calendar } from "lucide-react";

interface TaskItemProps {
    task: Task
}

export function TaskItem({ task }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const handleToggleComplete = async () => {
        setIsUpdating(true)
        try {
            await HandleToggleTaskComplete(task.id)
        } catch (error) {
            console.error("Error toggling task:", error)
        } finally {
            setIsUpdating(false)
        }
    }

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this task?")) {
            try {
                await HandleDeleteTask(task.id)
            } catch (error) {
                console.error("Error deleting task:", error)
            }
        }
    }

    if (isEditing) {
        return <TaskForm task={task} onCancel={() => setIsEditing(false)} />
    }

    return (
        <Card className={cn("transition-all duration-200 hover:shadow-md", task.completed && "opacity-75")}>
            <CardContent className="p-4">
                <div className="flex items-start gap-3">
                    <Checkbox
                        checked={task.completed}
                        onCheckedChange={handleToggleComplete}
                        disabled={isUpdating}
                        className="mt-1"
                    />

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                                <h3
                                    className={cn(
                                        "font-medium text-base leading-tight",
                                        task.completed && "line-through text-muted-foreground",
                                    )}
                                >
                                    {task.title}
                                </h3>
                                {task.description && (
                                    <p className={cn("text-sm text-muted-foreground mt-1", task.completed && "line-through")}>
                                        {task.description}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center gap-1">
                                {task.completed && (
                                    <Badge variant="secondary" className="text-xs">
                                        Completed
                                    </Badge>
                                )}
                                <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)} className="h-8 w-8 p-0">
                                    <Edit2 className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleDelete}
                                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            Created {new Date(task.created_at).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
