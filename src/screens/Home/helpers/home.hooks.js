import { useState, useEffect } from "react";

const QUERY = {
  pageSize: 5,
  filters: {
    inFutureOnly: true,
  },
  reqParams: {
    search: "all",
    dataSet: undefined,
    fetched: true,
  },
};
export function useGetHomeEvents(fetchEvents) {
  //   const [query, setQuery] = useState(QUERY);
  const [events, setEvents] = useState([QUERY]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);

  function fetch(query) {
    if (isFetching) {
      return;
    }
    if (query.page !== undefined) {
      if (query.page >= query.totalPages) {
        return;
      }
    }
    setIsFetching(true);
    const fetchQ = { ...query, ...QUERY };
    delete fetchQ.rows;
    delete fetchQ.totalPages;
    delete fetchQ.totalRows;
    fetchEvents(fetchQ)
      .then((data) => {
        const newData = { ...data };
        const prevRows = events?.rows ? [...events.rows] : [];
        const newEvents = (data.rows || []).filter((newEvent) => {
          return prevRows.findIndex((event) => event.id === newEvent.id) === -1;
        });
        const newRows = prevRows.concat(newEvents);

        newData.rows = newRows;
        setEvents(newData);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
        setIsFetching(false);
      });
  }

  useEffect(() => {
    fetch(QUERY);
  }, []);
  return { events, loading, isFetching, fetch };
}
