"use server";

import { followUser, unfollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow: any = async (id: string) => {
    try {
        const followedUser = await followUser(id);

        revalidatePath("/");

        if (followedUser) {
            revalidatePath(`/${followedUser.following.username}`);
        }
        return followedUser;
    }catch (e) {
        throw new Error('Internal Error');
    }
}

export const Unfollow = async (id: string) => {
    try {
        const unfollowedUser = await unfollowUser(id);

        revalidatePath("/");

        if (unfollowedUser) {
            revalidatePath(`/${unfollowedUser.following.username}`);
        }

        return unfollowedUser;
    }catch (error) {
        throw new Error('Internal Error');
    }
}