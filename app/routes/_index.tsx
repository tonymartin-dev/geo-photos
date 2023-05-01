import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import SpainMap from "~/components/spain-map/spain-map";
import {links as spainMapLinks} from '~/components/spain-map/spain-map'

export let links: LinksFunction = () => {
   return [...spainMapLinks()];
 }

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <SpainMap />
    </div>
  );
}
