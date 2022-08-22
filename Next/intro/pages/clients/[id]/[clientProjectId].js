import { useRouter } from "next/router";

function ClientEachProject() {
  const router = useRouter();

  console.log(router.query)

  return (
    <div>
      <h1>ClientEachProject</h1>
    </div>
  );
}

export default ClientEachProject;
