import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "The First Meetup",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80",
    address: "Some address 5, 12345 street",
    description: "This is the first meeting",
  },
  {
    id: "m2",
    title: "The Second Meetup",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "Some address 6, 12345 street",
    description: "This is the second meeting",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
    revalidate: 10,
  };
}

export default HomePage;
