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

const hasAccess = (user: User, minimumUserType : UserType) => {
    user?.creator_id
    if(!user) {
        return false;
    }

    if(user.type == "ADMIN") {
        return true;
    }

    if(user.type == "MANAGER" && (minimumUserType == "USER" || minimumUserType == "MANAGER")) {
        return true;
    }

    if(user.type == "USER" && minimumUserType == "USER") {
        return true;
    }

    return false;
}

const thisUserCanSeeThatUser = (thisUser: User, thatUser: User) => {
    if(!thisUser || !thatUser) {
        return false;
    }

    if(thisUser.type == "ADMIN") {
        return true;
    }

    if(thisUser.id == thatUser?.id) {
        return true;
    }

    if(thisUser.id == thatUser.creator_id) {
        return true;
    }

    return false;
}

export {getCurrentUser, findUserById, hasAccess, thisUserCanSeeThatUser};