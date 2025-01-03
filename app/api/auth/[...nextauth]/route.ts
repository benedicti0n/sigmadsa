import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Signup with your email and password",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "Password" },
                confirmPassword: { label: "Confirm Password", type: "password", placeholder: "Confirm Password" },
            },
            // async authorize(credentials, req) {

            // }
        }),
        GoogleProvider({
            clientId: "aa",
            clientSecret: "aa"
        }),
        GithubProvider({
            clientId: "aa",
            clientSecret: "aa"
        }),
    ]
})

export { handler as GET, handler as POST }