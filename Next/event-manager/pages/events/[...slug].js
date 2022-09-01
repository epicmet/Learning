import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/events/results-title";

function FilteredEventPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading</p>;
  }

  const [filteredYear, filteredMonth] = filteredData;
  const year = +filteredYear;
  const month = +filteredMonth;

  if (
    Number.isNaN(year) ||
    Number.isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filterd. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all the events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all the events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventPage;
