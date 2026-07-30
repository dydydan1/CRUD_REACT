import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Link} from "react-router-dom"

 function Signup (){
    return(
        <>
        <section className="flex flex-row w-full max-w-7xl min-h-screen justify-center items-center">
            <div className=" w-4/12">
                <Card>
                    <CardHeader>
                        <CardTitle>Signup</CardTitle>
                        <CardDescription>Create a new account to start creating tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input className="mb-4"
                            id="input"
                            type="text"
                            placeholder="First Name"
                    
                        />

                        <Input className="mb-4"
                            id="input"
                            type="text"
                            placeholder="Last Name"
              
                        />

                        <Input className="mb-4"
                            id="input"
                            type="email"
                            placeholder="Email"
                   
                        />

                        <Input className="mb-4"
                            id="input"
                            type="password"
                            placeholder="Password"  
            
                        />
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between">
                        <p>
                            Already have an account? {" "} <Link to="/" className="hover:text-blue-500">Login here</Link>
                        </p>
                        <Button>Signup</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
        </>
    )

}

export default Signup;  