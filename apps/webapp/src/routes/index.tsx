import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@p/ui";
import { api } from "../utils/api";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const result = api.helloWorld.useQuery();

  return (
    <>
      <div className="bg-accent-300 text-2xl font-bold text-white">
        Test Monorepo /!
      </div>
      <Button></Button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
}
