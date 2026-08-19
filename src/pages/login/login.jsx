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
  <section className="flex min-h-screen w-full items-center justify-center bg-[#0b0b0b] px-6 text-white">

    <div className="w-full max-w-md">

      {/* Home Button */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
      >
        ← Home
      </Link>

      <Card className="border-[#222] bg-[#111111] text-white">

        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className="text-gray-500">
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

          <CardFooter className="mt-6 flex flex-row justify-between">

            <p className="basis-1/2 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-gray-400 transition hover:text-white"
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