// import { CONTENT_CATEGORY_TYPE } from "config/constants";
import { merge, pick } from "lodash";
// import { errorHandler } from "utilities/services";
import EventService from "../services/event";

// import {addHomeLiveEvents, setHomeLiveEvents} from "../homeLiveEvents/actions";
// import {addHomeLiveEventsSuggestion1, setHomeLiveEventsSuggestion1} from "../homeLiveEventsSuggestion1/actions";
// import {addHomeLiveEventsSuggestion2, setHomeLiveEventsSuggestion2} from "../homeLiveEventsSuggestion2/actions";
// import {addHomeEvents, setHomeEvents} from "../homeEvents/actions";
// import {addHomeEventsSuggestion1, setHomeEventsSuggestion1} from "../homeEventsSuggestion1/actions";
// import {addHomeEventsSuggestion2, setHomeEventsSuggestion2} from "../homeEventsSuggestion2/actions";

export const defaultEventFields = [
  "id",
  "isEvent", // = true,
  "isLive", // = true,
  "allowDropIn", // = true,
  "paymentType",
  "title", // = 'Some Title',
  "summary", //
  "coverPhotoDetails",
  "coverPhoto", // = logo,
  "coverPhotoHomePage",
  "price", // ='$37',
  "currency",
  "rating", //
  "ratingCount",
  "occurrences", //
  "duration", // = '5 Hours',
  "user", // = {id, fullName, avatar, avatarThumbnail, avatarHomePage, rating, ratingCount, followersCount}
  "UserId", // = 17
  "WorkshopId",
  "status",
  "categories",
];

const filterLive = {
  filters: {
    isLive: true,
  },
};
const eventService = new EventService();
export function fetchHomeLiveEvents(query, addNextPage, type) {
  return eventService.getAll(merge(query, filterLive)).then((response) => {
    const {
      data: { events },
    } = response;
    return events;
  });
}
// export function fetchHomeLiveEvents(query, addNextPage, type) {
//   return dispatch => eventService
//     .getAll(merge(query, filterLive))
//     .then((response) => {
//       const {data: {events}} = response;
//       events.reqParams = query.reqParams;
//       switch (type) {
//         case CONTENT_CATEGORY_TYPE.new:
//           if (addNextPage) {
//             dispatch(addHomeLiveEvents(events));
//           } else {
//             dispatch(setHomeLiveEvents(events));
//           }
//           break;

//         case CONTENT_CATEGORY_TYPE.suggestion1:
//           if (addNextPage) {
//             dispatch(addHomeLiveEventsSuggestion1(events));
//           } else {
//             dispatch(setHomeLiveEventsSuggestion1(events));
//           }
//           break;

//         case CONTENT_CATEGORY_TYPE.suggestion2:
//           if (addNextPage) {
//             dispatch(addHomeLiveEventsSuggestion2(events));
//           } else {
//             dispatch(setHomeLiveEventsSuggestion2(events));
//           }
//           break;

//         default:
//           console.log(`fetchHomeLiveEvents default case hit`, type)
//           break;
//       }
//       return response;
//     })
//     .catch(err => {
//       errorHandler(err)
//     });
// }

// const filterVod = {
//   filters: {
//     isLive: false
//   }
// };

// export function fetchHomeEvents(query, addNextPage, type) {
//   return dispatch => eventService
//     .getAll(merge(query, filterVod))
//     .then((response) => {
//       const {data: {events}} = response;
//       events.reqParams = query.reqParams;

//       switch (type) {
//         case CONTENT_CATEGORY_TYPE.new:
//           if (addNextPage) {
//             dispatch(addHomeEvents(events));
//           } else {
//             dispatch(setHomeEvents(events));
//           }
//           break;

//         case CONTENT_CATEGORY_TYPE.suggestion1:
//           if (addNextPage) {
//             dispatch(addHomeEventsSuggestion1(events));
//           } else {
//             dispatch(setHomeEventsSuggestion1(events));
//           }
//           break;

//         case CONTENT_CATEGORY_TYPE.suggestion2:
//           if (addNextPage) {
//             dispatch(addHomeEventsSuggestion2(events));
//           } else {
//             dispatch(setHomeEventsSuggestion2(events));
//           }
//           break;

//         default:
//           console.log(`fetchHomeEvents default case hit`, type)
//           break;
//       }

//       return response;
//     })
//     .catch(err => {
//       errorHandler(err)
//     });
// }

// export function reduxEventHelper(state, payload) {
//   return {
//     ...state,
//     ...payload,
//     rows: payload.rows.map((event) => pick(event, defaultEventFields))
//   };
// }

// export function reduxAddEventHelper(state, payload) {
//   const events = state.rows;

//   const newEvents = (payload.rows || [])
//     .filter((newEvent) => {
//       return events.findIndex((event) => event.id === newEvent.id) === -1;
//     })
//     .map((newEvent) => pick(newEvent, defaultEventFields));

//   if (!newEvents.length) {
//     return state;
//   }

//   return {
//     ...state,
//     ...payload,
//     rows: [...events, ...newEvents]
//   };
// }

// export function reduxUpdateEventOccurrenceHelper(state, payload) {
//   const events = state.rows;
//   const foundEventIndex = events.findIndex((event) => event.id === payload.EventId);

//   if (foundEventIndex > -1) {
//     const event = events[foundEventIndex];

//     const occIndex = event?.occurrences.findIndex((el) => el.id === payload.id);
//     if (occIndex > -1) {

//       const occ = event.occurrences[occIndex];
//       const newEvents = [...events];
//       newEvents[foundEventIndex] = {...newEvents[foundEventIndex]};
//       newEvents[foundEventIndex].occurrences = [...newEvents[foundEventIndex].occurrences];
//       newEvents[foundEventIndex].occurrences[occIndex] = {...occ, ...payload};
//       return {
//         ...state,
//         rows: newEvents
//       };
//     }

//   }

//   return state;
// }
