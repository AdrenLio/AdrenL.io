import getCurrentUser from "@/app/actions/getCurrentUser";
import BecomeAHostClient from "./BecomeAHostClient";
import { Host, User } from "@prisma/client";

interface UserIncludesHostProps extends User{
    host : Host
  }
  

export default async function BecomeAHost () {
    const currentUser = await getCurrentUser() as UserIncludesHostProps;
    
    return( 
       <>
       <BecomeAHostClient currentUser={currentUser}/> 
       </> 
    );
}