import { HttpResponse, http } from "msw";

import { env } from "@/config/env";
import { networkDelay } from "./utils";
import { pokemonHandlers } from "./pokemon";

export const handlers = [
  ...pokemonHandlers,
  http.get(`${env.API_URL}/healthcheck`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
