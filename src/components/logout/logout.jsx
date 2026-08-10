
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Cookies from "js-cookie"
import {useNavigate} from "react-router"

export function Logout() {

  let navigate = useNavigate()
  
  function handleClick(){
    Cookies.remove("token");
    navigate("/login")
  }


  return (
    <div className="py-2 flex justify-end">
      <Button onClick={handleClick} variant="outline"className="h-10 w-10">
        <ChevronRight />
      </Button>
    </div>
  )
}