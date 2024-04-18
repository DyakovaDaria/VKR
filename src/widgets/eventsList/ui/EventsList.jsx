import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EventsList.module.css";
import { EventPreview } from "../../../entities/Event";
import { fetchEvents } from "../model/EventsListThunks";

function EventsList() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.eventsList);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.eventsListContainer}>
      <div className={styles.scrollEventsContainer}>
        {events.map((event) => (
          <EventPreview
            key={event.id}
            eventInfo={event}
            isFirstEventFlag={event.id !== 1}
          ></EventPreview>
        ))}
      </div>
    </div>
  );
}

export default EventsList;
