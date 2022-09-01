import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventPage() {
  const router = useRouter();

  const allEvents = getAllEvents();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </>
  );
}

export default AllEventPage;
