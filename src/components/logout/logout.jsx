
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Logout() {
  return (
    <div className="py-2 flex justify-end">
      <Button variant="outline"className="h-10 w-10">
        <ChevronRight />
      </Button>
    </div>
  )
}