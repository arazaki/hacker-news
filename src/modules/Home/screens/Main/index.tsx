import LoadMoreButton from "modules/Home/components/LoadMoreButton";
import Loading from "components/Loading";
import StoryItem from "modules/Home/components/StoryItem";
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
      {items.map((item) => (
        <StoryItem
          key={item.id}
          title={item.title}
          by={item.by}
          url={item.url}
          id={item.id}
        />
      ))}
      {hasNextPage && (
        <LoadMoreButton fetchNextPage={fetchNextPage} isFetching={isFetching} />
      )}
    </>
  );
};

export default HomeScreen;
