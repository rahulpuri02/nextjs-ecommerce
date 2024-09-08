import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import config from "../config";
import { AuthOptions} from "next-auth";
import { db } from "../db/db";
import { users } from "../db/schema";

export interface CustomUser {
    role: string,
    id: string
}
const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: config.google.clientId as string,
            clientSecret: config.google.clientSecret as string,
            profile: async function(profile: GoogleProfile){
                const data = {
                    firstName: profile.given_name,
                    lastName: profile.family_name,
                    email: profile.email,
                    provider: 'GOOGLE',
                    externalId: profile.sub,
                    image: profile.picture,
                }
                try{
                const user = await db.insert(users).values(data).onConflictDoUpdate({target: users.email, set: data}).returning({name: users.firstName, role: users.role, id: users.id});
                return {
                    ...data,
                    id: String(user[0].id),
                    name: user[0].name,
                    role: user[0].role,
                }

                }catch(err){
                    return {id: ''}
                }
            },
        },
    ), 
    ],
    callbacks: {
        //todo - add proper types
        session(data: any) {
            return data;
        },
        jwt({ token, user }: {token: any, user: any}) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
    }
}

export {authOptions}