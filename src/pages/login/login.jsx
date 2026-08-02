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


function Login() {
    return(
        <>
        <section className="flex flex-row w-full max-w-7xl min-h-screen justify-center items-center">
            <div className=" w-4/12">
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Login and create tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
            
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
                        <p className="basis-1/2">
                            Dont have an account? {" "} <Link to="/signup" className="hover:text-blue-500">Signup here</Link>
                        </p>
                        <Button>Signup</Button>
                    </CardFooter>
                </Card> 
            </div>
        </section>
        </>
    )
}

export default Login;