import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { api } from "./utils/api";
import { env } from "./env";

const queryClient = new QueryClient();
const trpcClient = api.createClient({
  links: [
    httpBatchLink({
      url: `${env.VITE_PUBLIC_API_URL}/trpc`,
      transformer: superjson,
    }),
  ],
});

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    trpcClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </api.Provider>
    </StrictMode>,
  );
}
