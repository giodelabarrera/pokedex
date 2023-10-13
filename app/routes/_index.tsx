import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokedex } from "~/data";

export const loader = async () => {
  const pokedex = await getPokedex();
  return json({ pokedex });
};

export default function Index() {
  const { pokedex } = useLoaderData<typeof loader>();

  return <pre>{JSON.stringify(pokedex, null, 2)}</pre>
}
