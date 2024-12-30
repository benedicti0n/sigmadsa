import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "aa",
            clientSecret: "aa"
        })
    ]
})

export { handler as GET, handler as POST }