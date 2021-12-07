import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetiup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetiup),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="Add your own meetup and make an amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}

export default NewMeetupPage;
