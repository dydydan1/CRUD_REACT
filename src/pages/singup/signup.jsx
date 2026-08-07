import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Toaster, toast } from "@/components/ui/toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { SignupSchema } from "@/schema/signup.schema";
import { useSignup } from "@/hooks/useSignup.hook";



function Signup() {

  const { mutate, isPending } = useSignup();
  let navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

    const onSubmit = (data) => {
      mutate(data, {
        onSuccess: (response) => {
          form.reset();

          toast.add({
            title: "Signup Successful",
            description: response.message,
            type: "success",
            actionProps: {
              children: "Login",
              onClick: () => navigate("/login"),
            },
          });
        },

    onError: (error) => {
      toast.add({
        title: "Signup Failed",
        description: "Error signup, check your credentials",
        type: "error",
      });
    },
  });
};

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>

            <CardDescription>
              Create a new account to start creating tasks
            </CardDescription>
          </CardHeader>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">

              {/* FIRST NAME */}
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>First Name</FieldLabel>

                    <Input
                      {...field}
                      type="text"
                      placeholder="First Name"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* LAST NAME */}
              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Last Name</FieldLabel>

                    <Input
                      {...field}
                      type="text"
                      placeholder="Last Name"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

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

            <CardFooter className="flex justify-between mt-6">
              <p className="basis-1/2 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:text-blue-500"
                >
                  Login here
                </Link>
              </p>

              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating account..." : "Signup"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>

      <Toaster />
    </section>
  );
}

export default Signup;