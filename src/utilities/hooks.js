import { useReducer } from "react";

export function usePagination(fetch) {
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  React.useEffect(() => {
    fetchUsers(0);
  }, []);

  async function fetchUsers(page) {
    try {
      dispatch({ type: "set_payload", payload: { isFetching: true } });

      const { count, results } = (await fetch(page)) || {};
      const totalPages = Math.ceil(count / initialState.pageSize);

      const payload = {
        totalPages,
        isFetching: false,
        results,
        currentPage: page,
      };
      dispatch({ type: "set_payload", payload });
    } catch (err) {
      dispatch({
        type: "set_payload",
        payload: { error: err?.message, isFetching: false },
      });
    }
  }

  const firstPage = () => {
    fetchUsers(0);
  };

  const nextPage = () => {
    if (state.currentPage == state.totalPages) {
      return;
    }
    fetchUsers(state.currentPage + 1);
  };
  const prevPage = () => {
    if (state.currentPage == 0) {
      return;
    }
    fetchUsers(state.currentPage - 1);
  };

  const lastPage = () => {
    const page = Math.min(0, state.totalPages - 1);
    if (state.currentPage == page) {
      return;
    }
    fetchUsers(page);
  };

  return { state, firstPage, nextPage, prevPage, lastPage };
}
