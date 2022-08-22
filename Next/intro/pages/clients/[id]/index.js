import { useRouter } from 'next/router'

function ClientEachUserPage() {
  const router = useRouter()

  console.log(router.query)

  function goToProject(clientProjectId) {
    router.push(`/clients/${router.query.id}/${clientProjectId}`)
  }

  return (
    <div>
      <h1>ClientEachUserPage</h1>
      <button onClick={() => goToProject('12123')}>go to the project</button>
    </div>
  );
}

export default ClientEachUserPage;
