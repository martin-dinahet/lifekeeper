import { type ApiClient, createApiClient } from "@packages/api-client";
import { useEffect, useState } from "react";

const client: ApiClient = createApiClient("");

export function IndexPage() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await client.api.health.$get();
      const { status } = await response.json();
      setStatus(status);
    };
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>API Health: {status ?? "Loading..."}</p>
    </div>
  );
}
