import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbgy76ThxHaKlOhpiLQ6Nw4ekR1b9t3DA",
  authDomain: "lunace-web.firebaseapp.com",
  databaseURL: "https://s0lace-web-default-rtdb.firebaseio.com",
  projectId: "lunace-web"
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
