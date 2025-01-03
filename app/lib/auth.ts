import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Username and Password",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "Password" },
                confirmPassword: { label: "Confirm Password", type: "password", placeholder: "Confirm Password" },
            },
            async authorize(credentials) {
                if (credentials?.password === credentials?.confirmPassword) {
                    return { id: "1", name: "test", email: "" };
                } else {
                    throw new Error("Passwords do not match");
                }
            }
        }),
    ]
};