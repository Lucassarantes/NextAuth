import NextAuth from "next-auth";

// HERE I CHOOSE TO USE GOOGLE AS PROVIDER, WE NEED TO IMPORT EACH PROVIDER THAT WE WANT TO USE.
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.GOOGLE_CLIENT_SECRET,
  providers: [
    // ID AND KEY BELOW ARE PROVIDED BY GOOGLE CLOUD PLATFORM ON CREDENTIALS SECTION.
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };