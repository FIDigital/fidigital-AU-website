import DesignClient from './DesignClient';

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Creative Design & Innovation | FI Digital",
  description: "Passion-driven design solutions for the digital age. From UI/UX and responsive design to high-fidelity prototyping and brand management."
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Design", path: "/design" }]),
          buildService({ name: "Design", serviceType: "Design", path: "/design" }),
        ]}
      />
      <DesignClient />
    </>
  );
}