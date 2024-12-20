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