import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80"
        title="The First Meetup"
        address="Some address 5, 12345 street"
        description="This is the first meeting"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80",
        title: "The First Meetup",
        address: "Some address 5, 12345 street",
        description: "This is the first meeting",
      },
    },
  };
}

export default MeetupDetails;
