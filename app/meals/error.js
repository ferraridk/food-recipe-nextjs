'use client';

export default function Error({error}) {
    return <main className="error">
        <h1>
            An Error Occurred!
        </h1>
        <p>
            Could not get Meal data. Please try again later!
        </p>
    </main>
}