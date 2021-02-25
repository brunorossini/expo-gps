import * as firebase from 'firebase';
import firebaseError from '../util/firebaseError';

interface UserI {
  email: string;
  password: string;
}

export async function signIn({
  email,
  password,
}: UserI): Promise<void | string> {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(response);
  } catch (error) {
    throw firebaseError(error.code);
  }
}

export async function signUp({ email, password }: UserI): Promise<void> {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await user?.sendEmailVerification();
}

export async function signOut(): Promise<void> {
  await firebase.auth().signOut();
}

export async function getToken(): Promise<string | undefined> {
  const token = await firebase.auth().currentUser?.getIdToken();
  console.log(token);
  return token;
}

export async function getMe(): Promise<void> {
  const response = await firebase.auth().currentUser;
  console.log(response?.email);
}
