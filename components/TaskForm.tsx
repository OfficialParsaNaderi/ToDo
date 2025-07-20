"use client"

import { useState } from "react";

import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { HandleAddTask, HandleUpdateTask } from "@/lib/actions";

import type { Task } from "@/lib/database"
import { Plus, Save, X } from "lucide-react"

interface TaskFormProps {
    task?: Task
    onCancel?: () => void
}

export function TaskForm({ task, onCancel }: TaskFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        try {
            if (task) {
                await HandleUpdateTask(task.id, formData)
            } else {
                await HandleAddTask(formData)
            }
            onCancel?.()
        } catch (error) {
            console.error("Error saving task:", error)
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <>
            <div className="gird gap-0">
                <Card className="Card">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-start">
                            {task ? <Save className="h-8 w-8 pr-2" /> : <Plus className="h-8 w-8 pr-2" />}
                            {task ? "Edit Task" : "Add New Task"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action={handleSubmit} className="space-y-4">
                            <div className="Task">
                                <div className="Task-Title pb-5">
                                    <div className="Label">
                                        <Label className="font-light text-lg text-white" htmlFor="task-title"> Task Title </Label>
                                    </div>
                                    <div className="Input pt-2 pl-0">
                                        <Input
                                            name="title"
                                            placeholder="Enter your Task ..."
                                            defaultValue={task?.title || ""}
                                            required
                                            className="w-full rounded-xl border-0 bg-white/2 px-4 py-3 text-white placeholder:text-neutral-400 p-5 ring-1 ring-inset ring-gray-700/50 transition-all duration-300 focus:ring-2 focus:ring-white"
                                        />
                                    </div>
                                </div>

                                <div className="Task-Desc">
                                    <div className="label">
                                        <Label className="font-light text-lg text-white" htmlFor="text-area"> Task Description </Label>
                                    </div>
                                    <div className="Textarea pt-2 pl-0">
                                        <Textarea
                                            name="description"
                                            placeholder="Enter your Description ..."
                                            defaultValue={task?.description || ""}
                                            rows={5}
                                            cols={5}
                                            className="w-full rounded-xl border-0 bg-white/2 px-4 py-3 text-white placeholder:text-neutral-400 p-3 ring-1 ring-inset ring-gray-700/50 transition-all duration-300 focus:ring-2 focus:ring-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 text-center">
                                <Button type="submit" disabled={isSubmitting} className="flex-1 w-full">
                                    {isSubmitting ? "Saving..." : task ? "Update Task" : "Submit Task"}
                                </Button>
                                {onCancel && (
                                    <Button className="rounded-xl border-0 bg-white/2 px-4 py-3 text-white placeholder:text-neutral-400 p-3 ring-1 ring-inset ring-gray-700/50 transition-all duration-300 focus:ring-2 focus:ring-white" type="button" variant="outline" onClick={onCancel}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
