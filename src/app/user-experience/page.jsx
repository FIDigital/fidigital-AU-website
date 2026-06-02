import UserExperienceClient from './UserExperienceClient';

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "User Experience (UX) Services | FI Digital",
  description: "Elevate your business with human-centric User Experience (UX) design and strategy. From audience research to interactive prototyping, we help you connect with users."
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "User Experience", path: "/user-experience" }]),
          buildService({ name: "User Experience", serviceType: "User Experience", path: "/user-experience" }),
        ]}
      />
      <UserExperienceClient />
    </>
  );
}