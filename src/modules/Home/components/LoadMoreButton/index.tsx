import Loading from "components/Loading";
import { Button } from "./styles";
import { LoadMoreButtonProps } from "./types";

const LoadMoreButton = ({ fetchNextPage, isFetching }: LoadMoreButtonProps) => {
  return (
    <Button onClick={fetchNextPage}>
      {isFetching ? <Loading /> : "Load More"}
    </Button>
  );
};
export default LoadMoreButton;
