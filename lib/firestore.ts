import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from "../config/firebase";
import { ListType } from "../types/ListType";
import { auth } from "../config/firebase";
import { User } from "firebase/auth";
import { v4 as uuidv4  } from "uuid";


export const updateUserLists = async (newLists: ListType[]) => {
    const user = auth.currentUser as User;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
        lists: newLists,
    });
}

export const getUserLists = async () => {
    const user = auth.currentUser as User;
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

export const createSampleLists = async () => {
    const user = auth.currentUser as User;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
        lists: [
          {
            name: "Today",
            icon: "IoStar",
            color: "blue",
            tasks: [
              {
                name: "Your first task!",
                id: uuidv4()
              },
            ],
            isPinned: true,
          },
          {
            name: "Planned",
            icon: "IoCalendar",
            color: "red",
            tasks: [],
            isPinned: true,
          },  
          {
            name: "All",
            icon: "IoList",
            color: "slate",
            tasks: [],
            isPinned: true,
          },  
          {
            name: "Important",
            icon: "IoFlag",
            color: "yellow",
            tasks: [],
            isPinned: true,
          },
          {
            name: "School",
            icon: "IoSchool",
            color: "violet",
            tasks: [],
            isPinned: false,
          },
          {
            name: "Groceries",
            icon: "IoCart",
            color: "green",
            tasks: [],
            isPinned: false,
          },    
        ]
    });
}