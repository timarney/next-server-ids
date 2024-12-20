import { Form } from '@/app/components/Form';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">Docker Dec 2oth 1:49pm + Server IDs</h1>
        <Form />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Submit form and check your cookie storage for saved data :)</p>
      </footer>
    </div>
  );
}
