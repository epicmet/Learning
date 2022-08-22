import Link from "next/link";

const clients = [
  { id: "max", name: "Maxim" },
  { id: "mahdi", name: "Mahdi" },
];

function ClientPage() {
  return (
    <>
      <div>Client home</div>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            <Link href={{ pathname: "/clients/[id]", query: { id: c.id } }}>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ClientPage;
