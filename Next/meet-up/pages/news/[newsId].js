import { useRouter } from "next/router";

function SomethingPage() {
  const router = useRouter();

  const { newsId } = router.query;

  return <h1>The Something Page</h1>;
}

export default SomethingPage;
