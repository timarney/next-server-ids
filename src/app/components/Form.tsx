"use client";
import { useActionState } from "react";
import { saveUsingAction } from '@/app/posts/actions';

export const Form = () => {
    const [, formAction, isPending] = useActionState(saveUsingAction, {});
    return (
        <form action={formAction} method="POST">
            <div>
                <div>
                    <label htmlFor="name" className="pr-2">Name</label>
                    <input name="name" className="my-4 p-2 text-gray-600" />
                </div>
                <div className="flex justify-end">
                    <button
                        className={`p-2 rounded ${isPending ? 'bg-gray-400 text-gray-700' : 'bg-blue-500 text-white'}`}
                        type="submit"
                        disabled={isPending}>
                        {isPending ? "Processing..." : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    );
};