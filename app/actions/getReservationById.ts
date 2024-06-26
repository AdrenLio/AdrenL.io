import prisma from "@/app/libs/prismadb";

interface IParams {
    reservationId: string;
}

export default async function getReservationById( params: IParams ) {
    try {
        const { reservationId } = params;

        const reservation = await prisma.reservation.findUnique({
            where: {
                id: reservationId
            },
            include: {
                listing: {
                    include: {
                        user: true
                    }
                },
                transaction: {
                    include: {
                        refund: true
                    }
                },
                user: true
            },
        });

        if(!reservation) {
            return null;
        }

        return reservation;
    } catch (error: any) {
        throw new Error(error);
    }
}