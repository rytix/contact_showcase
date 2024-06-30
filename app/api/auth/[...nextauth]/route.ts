import { getUserModel, createUserModel } from "@/models/User";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials?.username || !credentials?.password) {
                throw new Error('Please enter both username and password');
            }

            //await createUserModel({username: "admin", password: bcrypt.hashSync("12300",15), type: "ADMIN", enabled: true, name: "NOME DO USUARIO"})
            const user = await getUserModel().findOne({ username: credentials.username }).exec();
    
            if (!user) {
                throw new Error('No user found with this username');
            }
    
            const isValid = await bcrypt.compare(credentials.password, user.password);
    
            if (!isValid) {
                throw new Error('Incorrect password');
            }
      
            if (user) {
              return {name: user.id, id: user.id}
            } else {
              return null
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ]
})

export { handler as GET, handler as POST }