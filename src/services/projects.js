import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

const PROJECTS_COLLECTION = 'projects';

export async function getProjects() {
  const q = query(collection(db, PROJECTS_COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getAllProjects() {
  const q = query(collection(db, PROJECTS_COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getProjectBySlug(slug) {
  const q = query(collection(db, PROJECTS_COLLECTION), where('slug', '==', slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getProjectById(id) {
  const docSnap = await getDoc(doc(db, PROJECTS_COLLECTION, id));
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
}

export async function createProject(data) {
  const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateProject(id, data) {
  const docRef = doc(db, PROJECTS_COLLECTION, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProject(id) {
  await deleteDoc(doc(db, PROJECTS_COLLECTION, id));
}
