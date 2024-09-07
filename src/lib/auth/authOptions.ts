import GoogleProvider from "next-auth/providers/google";
import config from "../config";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: config.google.clientId as string,
            clientSecret: config.google.clientSecret as string
        }), 
    ],
}

export {authOptions}