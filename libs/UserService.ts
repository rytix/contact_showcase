import { IUser, getUserModel } from "@/models/User";
import { getServerSession } from "next-auth";

type UserType = "ADMIN" | "MANAGER" | "USER"
type User = IUser | null | undefined

const getCurrentUser = async function() {
    const session = await getServerSession();
    if(!session?.user){
        return null;
    }
    return await getUserModel().findById(session?.user?.name)
}

const findUserById = async function(id: string) {
    try{
        return await getUserModel().findById(id)
    } catch (e) {
        return null;
    }
}

const hasAccess = (currentUser: User, targetUser: User, pageType : UserType) => {
    currentUser?.creator_id
    if(!currentUser || !targetUser) {
        return false;
    }

    if(targetUser.type != pageType) {
        return false;
    }

    if(currentUser.type != "ADMIN" && currentUser.type != "MANAGER" && currentUser.type != "USER") {
        return false;
    }

    if(currentUser.type == "USER") {
        if(currentUser.id != targetUser.id) {
            return false;
        }
        if(pageType == "ADMIN" || pageType == "MANAGER") {
            return false;
        }
    }

    if(currentUser.type == "MANAGER") {
        if(currentUser.id != targetUser.id && targetUser.creator_id != currentUser.id) {
            return false;
        }
        if(pageType == "ADMIN") {
            return false;
        }
    }

    return true;
}

export {getCurrentUser, findUserById, hasAccess};