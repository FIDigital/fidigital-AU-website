import BookDiscoveryClient from "./BookDiscoveryClient";
import { JsonLd, buildBreadcrumb, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: "Book a Free Discovery Session",
  alternates: { canonical: "https://fidigital.com.au/book-discovery" },
  openGraph: buildOpenGraph({ title: "Book a Free Discovery Session", description: "Free 30-minute discovery session with a senior FI Digital consultant. Discuss your software, data, AI, or business systems needs. No sales pitch.", path: "/book-discovery" }),
  description: "Free 30-minute discovery session with a senior FI Digital consultant. Discuss your software, data, AI, or business systems needs. No sales pitch.",
};

export default function BookDiscoveryPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Book a Discovery Session", path: "/book-discovery" },
        ])}
      />
      <BookDiscoveryClient />
    </>
  );
}
