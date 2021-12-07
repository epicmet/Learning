import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meet Ups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { req, res } = context;

//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://matty:mahdimahdi@testcluster.xvbv2.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        image: m.image,
        description: m.description,
        id: m._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
