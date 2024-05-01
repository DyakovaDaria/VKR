import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EventsList.module.css";
import { EventPreview } from "../../../entities/Event";
import { fetchEvents } from "../model/EventsListThunks";

function EventsList() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.eventsList);
  const { role } = useSelector((state) => state.login);

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
      {role === "admin" && (
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="#ffffff"
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </button>
      )}
    </div>
  );
}

export default EventsList;
