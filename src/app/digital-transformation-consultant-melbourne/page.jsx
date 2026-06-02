import DigitalTransformationClient from './DigitalTransformationClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Digital Transformation", path: "/digital-transformation-consultant-melbourne" }]),
          buildService({ name: "Digital Transformation", serviceType: "Digital Transformation", path: "/digital-transformation-consultant-melbourne" }),
        ]}
      />
      <DigitalTransformationClient />
    </>
  );
}