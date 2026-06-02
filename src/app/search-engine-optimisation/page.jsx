import SearchEngineOptimisationClient from './SearchEngineOptimisationClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Search Engine Optimisation", path: "/search-engine-optimisation" }]),
          buildService({ name: "Search Engine Optimisation", serviceType: "Search Engine Optimisation", path: "/search-engine-optimisation" }),
        ]}
      />
      <SearchEngineOptimisationClient />
    </>
  );
}