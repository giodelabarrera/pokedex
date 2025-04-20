import { HttpResponse, http } from "msw";

import { env } from "@/config/env";

import { networkDelay } from "../utils";
import { findAllBy, findByIdOrName, SORT_TYPES } from "./utils";

export const pokemonHandlers = [
  http.get(`${env.API_URL}/pokemon`, async ({ request }) => {
    await networkDelay();

    try {
      const url = new URL(request.url);

      const query = url.searchParams.get("query") || "";

      const types = url.searchParams.get("types");
      const parsedTypes = types === null ? undefined : types.split(",");

      const parsedSort =
        url.searchParams.get("sort") === null
          ? undefined
          : SORT_TYPES.lowestNumber;

      const limit = url.searchParams.get("limit");
      const parsedLimit = limit === null ? undefined : Number(limit);

      const offset = url.searchParams.get("offset");
      const parsedOffset = limit === null ? undefined : Number(offset);

      const result = findAllBy({
        query,
        types: parsedTypes,
        sort: parsedSort,
        limit: parsedLimit,
        offset: parsedOffset,
      });

      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || "Server Error" },
        { status: 500 }
      );
    }
  }),

  http.get(`${env.API_URL}/pokemon/:idOrName`, async ({ params }) => {
    await networkDelay();

    try {
      const idOrName = params.idOrName as string;

      const result = findByIdOrName(idOrName);

      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || "Server Error" },
        { status: 500 }
      );
    }
  }),
];
