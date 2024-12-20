import Form from 'next/form'
import { saveData } from '@/app/posts/actions'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form action={saveData}>
          <div>
            <input name="name" className="my-4 p-2 text-gray-600" />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </Form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
