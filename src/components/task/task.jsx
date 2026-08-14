import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Task({
  title = "Task Title",
  description = "Task Description",
  dueDate,
  status = "todo",
  priority = "medium",
  id,
  onInProgress,
  onCompleted,
}) {
  const formatDate = dueDate
    ? new Date(dueDate).toLocaleDateString(
        "en-GB",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      )
    : "No due date";

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <div className="flex items-start justify-between">

          <div className="flex flex-col gap-2">
            <CardTitle className="font-semibold text-2xl">
              {title}
            </CardTitle>

            <CardDescription>
              {description}
            </CardDescription>
          </div>

          <div className="flex items-center gap-2">

            <Badge variant="outline">
              {formatDate}
            </Badge>

            <Badge
              variant="outline"
              className={
                priority === "high"
                  ? "bg-red-800 text-white"
                  : priority === "medium"
                  ? "bg-orange-800 text-white"
                  : "bg-sky-800 text-white"
              }
            >
              {priority}
            </Badge>

          </div>
        </div>
      </CardHeader>

      <CardFooter className="flex justify-between border-t px-6 pt-4">

        {/* In Progress Toggle */}
        <div className="flex items-center space-x-2">
          <Switch
            checked={status === "in-progress"}
            onCheckedChange={onInProgress}
            id={`in-progress-${id}`}
          />

          <Label htmlFor={`in-progress-${id}`}>
            In Progress
          </Label>
        </div>

        {/* Completed */}
        <Button
          type="button"
          onClick={onCompleted}
        >
          Completed
        </Button>

      </CardFooter>
    </Card>
  );
}