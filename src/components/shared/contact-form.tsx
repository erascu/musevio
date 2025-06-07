"use client";
import { cn } from "@/lib/utils";
import {
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Textarea,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { formSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { z } from "zod";
import { send } from "@/lib/email";

interface Props {
  className?: string;
}

export const ContactForm: React.FC<Props> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        await send(values);
        toast.success("Message sent!");
        form.reset();
    } catch {
        toast.error("Failed to send message.");
    }
  }
  return (
    <Card className={cn("md:w-md max-w-md", className)}>
      <CardHeader>
        <CardTitle className="playfair !text-3xl font-bold">
          Get in touch
        </CardTitle>
        <CardDescription className="font-light">
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Fist Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          className="!text-sm"
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your given name, minimum 2 characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          {...field}
                          className="!text-sm"
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your family name, minimum 2 characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="!text-sm"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter a valid email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        className="min-h-[120px]"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                       Write your message here, minimum 10 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="ml-auto font-light">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
