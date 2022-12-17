import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Props } from "./types";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      cacheTime: 1 * 60 * 1000, // 1 minute,
      // Keep it off and enable where you want.
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const ReactQueryProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools position="bottom-right" />
    {children}
  </QueryClientProvider>
);

export default ReactQueryProvider;
