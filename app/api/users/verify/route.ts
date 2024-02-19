import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import crypto from "crypto"
import { sendEmail } from "@/app/libs/email";

interface EmailVerifyRequest{
    token : string;
    userId : string
}

function isValidObjectId(id: string) {
    return /^[0-9a-fA-F]{24}$/.test(id);
}

export async function POST (req: Request) {
    try{
        const {token, userId} = (await req.json()) as EmailVerifyRequest;

        if(!isValidObjectId(userId) || !token){
            return NextResponse.json(
                { error: "Invalid request, userId and token is required!" },
                { status: 401 }
            );
        }

        const verifyToken = await prisma.emailVerificationToken.findUnique({
            where: {
               userId
            }
        });
        
        //check the format of verify token over here

        //   if(verifyToken!=token){
        //     return NextResponse.json({error: "Invalid token!"}, {status: 401})
        //   }

        await prisma.user.update({
            where:{id:userId},
            data: {
                emailVerified:true}
            }
        );
    
        await prisma.emailVerificationToken.delete({
            where:{userId},
        });

        const user = await prisma.user.findFirst({
            where: {id:userId}
        }
        )

        const res = await sendEmail({
            profile: { name: user?.name || '',email: user?.email || ''},
            subject: "verification"
        });
    

        return NextResponse.json({ message: "Your email is verified." });
    }
    catch(error) {
        return NextResponse.json(
            { error: "could not verify email, something went wrong!" },
            { status: 500 }
        );
    }
}

// export const GET = async (req:Request) => {
//     try{
//         const userId = req.url.split("?userId=")[1];
//         if(!isValidObjectId(userId)){
//             return NextResponse.json(
//                 { error: "Invalid request, user id missing!" },
//                 { status: 401 }
//             )
//         }

//         const user = prisma.user.findUnique({
//             where : {id:userId}
//         })

//         if (!user)
//             return NextResponse.json(
//                 { error: "Invalid request, user not found!" },
//                 { status: 401 }
//       );

//       if (user.emailVerified)
//             return NextResponse.json(
//                 { error: "Invalid request, user already verified!" },
//                 { status: 401 }
//       );

//       const token = crypto.randomBytes(36).toString("hex");

//     }
// }