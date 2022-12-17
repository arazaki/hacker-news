export type TopStoriesApiResponse = number[];

export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type TopStoriesResponse = {
  nextPage: number;
  total: number;
  items: Story[];
};
