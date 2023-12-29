import Link from 'next/link';

export function PageNotFound() {
  return (
    <div className="flex flex-col m-10 h-screen justify-between">
      <h1>PageNotFound</h1>

      <Link href="/">Regresar</Link>
    </div>
  );
}
