"use server";
import { z } from "zod";
import { formSchema } from "./schemas";

const postMessage = process.env.POST_MESSAGE;

export const send = async (data: z.infer<typeof formSchema>) => {
    try {
        const res = await fetch(postMessage!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if(!res.ok) {
            throw new Error (`Failed to send data: ${res.status} ${res.statusText}`);
        }

        const result = await res.json();
        return result;
    } catch (err) {
        throw err;
    }
}