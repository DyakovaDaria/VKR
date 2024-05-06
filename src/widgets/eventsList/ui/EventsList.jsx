import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import eventsListStyles from "./EventsList.module.css";
import { CreateEvent, EventPreview } from "../../../entities/Event";
import { fetchEvents } from "../../../entities/Event";
import { toggleNewEventCreationMode } from "../model/EventsListSlice";

function EventsList() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.events);
  const { newEventCreationMode } = useSelector((state) => state.eventsList);
  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(fetchEvents());
    
    console.log(userDetails);
  }, []);

  const createNewEvent = () => {
    dispatch(toggleNewEventCreationMode(true));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={eventsListStyles.eventsListMainContainer}>
      <div className={eventsListStyles.eventsListContainer}>
        <div className={eventsListStyles.scrollEventsContainer}>
          {events.map((event) => (
            <EventPreview
              key={event.id}
              eventInfo={event}
              isFirstEventFlag={event.id !== 1}
            ></EventPreview>
          ))}
        </div>
        {/* TODO пофиксить роли, они могут сломаться */}
        {userDetails?.role === "Administrator" || userDetails?.roles[0] && (
          <button
            className={eventsListStyles.addNewEventBtn}
            onClick={createNewEvent}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </button>
        )}
      </div>
      {newEventCreationMode && (
        <div className={eventsListStyles.popupOverlay}>
          <CreateEvent></CreateEvent>
        </div>
      )}
    </div>
  );
}

export default EventsList;
