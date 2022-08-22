import Link from "next/link";

function NotFoundPage() {
  return (
    <div>
      <h1>
        you lost? <Link href="/">Go back home</Link>
      </h1>
    </div>
  );
}

export default NotFoundPage;
