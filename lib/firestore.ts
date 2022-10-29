import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from "../config/firebase";
import { ListType } from "../types/ListType";
import { auth } from "../config/firebase";
import { User } from "firebase/auth";


export const updateUserLists = async (newLists: ListType[]) => {
    const user = auth.currentUser as User;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
        lists: newLists,
    });
}

export const getUserLists = async () => {
    const user = auth.currentUser as User;
    console.log(user.uid)
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const lists = docSnap.data()?.lists;
        console.log(lists)
        return lists as ListType[];
    } else {
        return [];
    }
}