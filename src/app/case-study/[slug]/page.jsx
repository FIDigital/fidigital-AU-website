import { caseStudies } from "@/lib/caseStudiesData";
import CaseStudyContent from "./CaseStudyContent";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study | FI Digital`,
    description: `Learn how FI Digital helped ${study.company} achieve digital transformation through ${study.tag}.`,
  };
}

export default function Page({ params }) {
  const { slug } = params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyContent study={study} />;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
