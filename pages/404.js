import Link from "next/link";

export default function ErrorPage() {
	return (
    <div className="text-2xl flex flex-col justify-center items-center gap-5 max-w-xs mx-auto mt-9 border p-7 rounded-lg border-cyan-600">
      <h1>Error 404</h1>
      <p>
        Please{' '}
        <Link href={'/'}>
          <a className="text-cyan-600 hover:text-rose-300">go back</a>
        </Link>
      </p>
    </div>
  );
}
