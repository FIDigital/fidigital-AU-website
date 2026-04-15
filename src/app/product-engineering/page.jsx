import ProductEngineeringClient from './ProductEngineeringClient';

export const metadata = {
  title: "Custom Software Development Australia | Product Engineering | FI Digital",
  description: "Build web apps, mobile apps, SaaS platforms, and internal tools. React, Python, FastAPI. 200+ engineers. Australian data residency. From MVP to enterprise scale.",
};

export default function ProductEngineeringPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does custom software development cost in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom software projects typically range from $50,000 for a focused MVP to $500,000 or more for enterprise-grade platforms. The key variables are complexity, timeline, and ongoing support requirements. We provide a detailed estimate during the Discovery phase."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical web application takes 10 to 16 weeks from Discovery to launch. Simpler applications can ship in 6 to 8 weeks. Complex, multi-user platforms with extensive integrations may take 20 to 24 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do I own the source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You own 100% of the source code, intellectual property, and all documentation. We deliver the complete codebase to your repository at handover. There is no vendor lock-in and no ongoing licence fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build mobile apps for both iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use React Native for cross-platform mobile development, which means a single codebase runs on both iOS and Android. This reduces cost and development time without sacrificing performance."
        }
      },
      {
        "@type": "Question",
        "name": "What if my project needs AI or data capabilities too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is where FI Digital is uniquely positioned. Our four service pillars are designed to work together. We design the architecture to support cross-pillar integration from day one."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups or only enterprise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both. We build MVPs for funded startups (typically Seed to Series A) and enterprise-grade platforms for established companies. The engineering approach is the same. The difference is scope, compliance requirements, and integration complexity."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ProductEngineeringClient />
    </>
  );
}
