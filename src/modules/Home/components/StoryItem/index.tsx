import { ExternalLink } from "assets/svg";
import { Container } from "./styles";
import { StoryProps } from "./types";

const StoryItem = ({ title, id, by, url }: StoryProps) => {
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        <h4>Author: {by}</h4>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink
              height="25px"
              width="25px"
              outline="#fff"
              color="transparent"
            />
          </a>
        )}
      </div>
    </Container>
  );
};
export default StoryItem;
