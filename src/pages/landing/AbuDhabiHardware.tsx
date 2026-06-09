import React from 'react';
import { LandingTemplate } from './LandingTemplate';
import { Wrench, HardHat, PackageSearch } from 'lucide-react';

export const AbuDhabiHardware: React.FC = () => {
  return (
    <LandingTemplate
      seoTitle="Wholesale Hardware Supplier in Abu Dhabi | Classic Way"
      seoDescription="Classic Way is the leading wholesale hardware supplier in Abu Dhabi. We provide bulk construction hardware, fasteners, and tools for large-scale projects."
      heroHeadline="Wholesale Hardware Solutions in Abu Dhabi"
      heroSubheadline="Streamline your procurement process with our extensive catalog of heavy-duty construction hardware, engineered fasteners, and professional tools for Abu Dhabi's mega-projects."
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
      locationKeyword="Abu Dhabi"
      valueProposition="Engineered for Abu Dhabi's Infrastructure"
      features={[
        {
          icon: <Wrench />,
          title: "Heavy-Duty Fastening",
          description: "High-tensile bolts, anchors, and specialized fixing hardware designed for maximum structural integrity."
        },
        {
          icon: <PackageSearch />,
          title: "Bulk Wholesale Volumes",
          description: "Capacity to fulfill massive volume orders rapidly, ensuring your infrastructure project never faces supply bottlenecks."
        },
        {
          icon: <HardHat />,
          title: "Contractor Compliance",
          description: "All hardware supplies meet stringent safety and quality protocols demanded by major UAE contracting firms."
        }
      ]}
    />
  );
};
