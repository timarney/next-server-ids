'use server'

import { cookies } from 'next/headers'

export async function saveData(formData: FormData) {
    const cookieStore = await cookies();
    const data = {};
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
        data[pair[0]] = pair[1];
    }

    cookieStore.set('data', JSON.stringify(data));
}

export async function saveUsingAction(prevState, formData: FormData) {

    // Add delay so we get a pending state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const cookieStore = await cookies();
    const data = {};
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
        data[pair[0]] = pair[1];
    }

    cookieStore.set('data', JSON.stringify(data));
}