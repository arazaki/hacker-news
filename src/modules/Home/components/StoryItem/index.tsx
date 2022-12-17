import { ExternalLink } from "assets/svg";
import { Container } from "./styles";
import { StoryProps } from "./types";

const StoryItem = ({ title, by, url }: StoryProps) => {
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        <label>Author: {by}</label>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink
              height="25px"
              width="25px"
              outline="#8e98a2"
              color="transparent"
            />
          </a>
        )}
      </div>
    </Container>
  );
};
export default StoryItem;
