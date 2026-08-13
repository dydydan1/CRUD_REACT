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

export function Task(props) {
  const {
    title = "Task Title",
    description = "Task Description",
    dueDate = "2026-08-03T00:00:00.000Z",
    status = "todo",
    priority = "normal",
    id,
    onInProgress,
    onCompleted,
    isDeleting,
  } = props;

  const formatDate = dueDate
    ? new Date(dueDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
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

            {priority === "normal" && (
              <Badge
                className="bg-sky-800 text-white"
                variant="outline"
              >
                {priority}
              </Badge>
            )}

            {priority === "medium" && (
              <Badge
                className="bg-orange-800 text-white"
                variant="outline"
              >
                {priority}
              </Badge>
            )}

            {priority === "high" && (
              <Badge
                className="bg-red-800 text-white"
                variant="outline"
              >
                {priority}
              </Badge>
            )}
          </div>

        </div>
      </CardHeader>

      <CardFooter className="flex justify-between border-t px-6 pt-4">

        {/* In Progress */}
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
          disabled={isDeleting}
        >
          {isDeleting ? "Completing..." : "Completed"}
        </Button>

      </CardFooter>
    </Card>
  );
}