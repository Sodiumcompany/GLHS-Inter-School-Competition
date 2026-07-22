// js/firebase-config.js
const firebaseConfig = {
            apiKey: "AIzaSyAEeFkvDRJej6423g0sK131z9OlNXid72U",
            authDomain: "inter-school-competion.firebaseapp.com",
            projectId: "inter-school-competion",
            storageBucket: "inter-school-competion.firebasestorage.app",
            messagingSenderId: "864837384571",
            appId: "1:864837384571:web:7347b91ef44abedb1da5de"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence (optional, but improves loading)
db.enablePersistence({ synchronizeTabs: true })
  .catch((err) => console.warn('Persistence error:', err));

console.log('✅ Firebase initialized');