import Loading from "components/Loading";
import { useMemo } from "react";
import { useTopStories } from "services/home";
import { Story } from "services/home/types";

const HomeScreen = () => {
  const {
    data,
    error,
    isFetching,
    fetchNextPage,
    isLoading,
    hasNextPage,
    refetch,
  } = useTopStories();

  const items = useMemo<Story[]>(() => {
    return data?.pages.flatMap((page) => page.items) ?? [];
  }, [data]);

  const onRefresh = () => {
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h1>
        Error <button onClick={onRefresh}>Refresh</button>
      </h1>
    );
  }
  if (!isLoading && items.length === 0) {
    return <h1>Vazio</h1>;
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li>
            <h3>title: {item.title}</h3>
            <h4>by: {item.by}</h4>
            {item.url ? (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                ver mais
              </a>
            ) : (
              <p>sem url</p>
            )}
          </li>
        ))}
      </ul>
      {isFetching && <Loading />}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>Load more</button>
      )}
    </>
  );
};

export default HomeScreen;
