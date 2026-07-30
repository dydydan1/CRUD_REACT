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
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </section>
        </>
    )

}

export default Signup;  