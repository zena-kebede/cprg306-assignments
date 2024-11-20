{/* This page requires more implementation. This code is simply what was provided in the assignment to-do list. */}

"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        // Sign in to Firebase with GitHub authentication
        await gitHubSignIn();
    };

    const logout = async () => {
        // Sign out of Firebase
        await firebaseSignOut();
    };

    return (
        <main> 
            <h1>Week 10 Demo</h1>
            <div>
                {user ? (
                <div>
                // Display some of the user's information
                <p>Welcome, {user.displayName}!</p>
                <button onClick={logout}>Logout</button>
                </div>
                ) : (
                <button onClick={login}>Login with Github</button>
                )}
            </div>
        </main>
    );
}
 
