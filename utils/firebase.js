//connection to firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    addDoc, 
    deleteDoc, 
    updateDoc, 
    getDoc,
    getDocs, 
    collection,
    onSnapshot, 
    orderBy } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgVShGESMLL5Tj_iuGJIMcciGZteebgeA",
    authDomain: "fir-crud-fa4fb.firebaseapp.com",
    projectId: "fir-crud-fa4fb",
    storageBucket: "fir-crud-fa4fb.appspot.com",
    messagingSenderId: "582279871780",
    appId: "1:582279871780:web:bf86c25d0cf98e0140c7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const docRef = collection(db,"post");

const docId = collection(db,"id");

export const saveId = (idClicked) => {
    addDoc(docId,{
        id: idClicked
    })
}

export const getId = () => getDocs(collection(db, 'id'));

//Fetch document values

//AddDoc tells firestore where to store the data, and as a parameter you put the collection, and what "bucket"

export const getTasks = () => getDocs(collection(db,'post'));

export const onGetTasks = (callback) => onSnapshot(collection(db,'post'),callback);

export const deleteTask = id => deleteDoc(doc(db,'post',id));

export const savePost = (addTitle,addTags,addContent) => {
    addDoc(docRef,{
        title: addTitle,
        tag: addTags,
        content: addContent
    })
}

export const getPost = (id) => getDoc(doc(db,'post',id));

export const updatePost = (id,newFields) => updateDoc(doc(db,'post',id),newFields);
