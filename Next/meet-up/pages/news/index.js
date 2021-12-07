import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/somehing">NextJs is a Great FrameWork</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
