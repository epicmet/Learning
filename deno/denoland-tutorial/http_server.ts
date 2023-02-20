import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const URL = "https://api.github.com/users/denoland";

async function handler(req: Request): Promise<Response> {
  console.log("REQUEST: ", req);

  const resp = await fetch(URL, { headers: { accept: "application/json" } });

  return new Response(resp.body, {
    status: resp.status,
    headers: { "content-type": "application/json" },
  });
}

serve(handler);
