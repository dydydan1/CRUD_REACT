import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate} from "react-router-dom"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"

import { Toaster, toast } from "@/components/ui/toast";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {useLogin} from "@/hooks/useLogin.hook.js"
import { Children, useEffect } from "react"
import { LoginSchema } from "@/schema/login.schema"


function Login() {

    let {mutate, isError, isSuccess} = useLogin();
    let navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

const onSubmit = (data) => {
  mutate(data, {
    onSuccess: (response) => {
      form.reset();

      toast.add({
        title: "Login Successful",
        description: "You can start planning your tasks!",
        type: "success",
      });

      navigate("/tasks");
    },

    onError: (error) => {
      toast.add({
        title: "Login Failed",
        description: "Please check your credentials!",
        type: "error",
        actionProps: {
          children: "Signup",
          onClick: () => navigate("/signup"),
        },
      });
    },
  });
};


  return (
    <section className="flex flex-row w-full max-w-7xl min-h-screen justify-center items-center">
      <div className="w-4/12">

        <Card>

          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login and create tasks
            </CardDescription>
          </CardHeader>

          <form onSubmit={form.handleSubmit(onSubmit)}>

            <CardContent className="space-y-4">

              {/* EMAIL */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>

                    <FieldLabel>Email</FieldLabel>

                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}

                  </Field>
                )}
              />


              {/* PASSWORD */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>

                    <FieldLabel>Password</FieldLabel>

                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}

                  </Field>
                )}
              />

            </CardContent>


            <CardFooter className="flex flex-row justify-between mt-6">

              <p className="basis-1/2">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="hover:text-blue-500"
                >
                  Signup here
                </Link>
              </p>

              <Button type="submit">
                Login
              </Button>

            </CardFooter>

          </form>

        </Card>

      </div>
    </section>
  )
}

export default Login