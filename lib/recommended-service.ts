import { db } from "@/lib/db"
import { getSelf } from "./auth-service"

export const getRecommended = async () => {
    let userId: string | null; 
    try {
        const self = await getSelf();
        userId = self.id; 
    }catch {
        userId = null;
    }

    let users = [];

    if (userId) {
        users = await db.user.findMany({
            where: {
                AND: [
                    {
                        NOT: {
                            id: userId,
                        },
                    },
                    {
                        NOT: {
                            followedBy: {
                                some: {
                                    followerId: userId,
                                }
                            }
                        }
                    },
                    {
                        NOT: {
                            bloking: {
                                some: {
                                    blockedId: userId,
                                }
                            }
                        }
                    }
                ],
                NOT: {
                    id: userId,
                },
            },
            include: {
                stream: {
                    select: {
                        isLive: true,
                    }
                }
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }else {
        users = await db.user.findMany({
            include: {
                stream: {
                    select: {
                        isLive: true,
                    }
                }
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    return users;
}