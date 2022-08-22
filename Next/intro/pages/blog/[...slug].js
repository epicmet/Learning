import { useRouter } from 'next/router'

function Slug() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Slug</h1>
    </div>
  );
}

export default Slug;
