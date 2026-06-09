import React from 'react';
import { LandingTemplate } from './LandingTemplate';
import { Droplet, Factory, PenTool } from 'lucide-react';

export const SharjahSanitaryware: React.FC = () => {
  return (
    <LandingTemplate
      seoTitle="Commercial Sanitaryware Supplier in Sharjah | Classic Way"
      seoDescription="Premium commercial sanitaryware and plumbing solutions in Sharjah. Classic Way provides heavy-duty, compliant fittings for large-scale developments."
      heroHeadline="Commercial Sanitaryware Solutions in Sharjah"
      heroSubheadline="Supply your next large-scale development in Sharjah with heavy-duty, IEC/BS compliant plumbing and sanitary fittings built for extreme industrial endurance."
      heroImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
      locationKeyword="Sharjah"
      valueProposition="Engineered for Sharjah's Commercial Sector"
      features={[
        {
          icon: <Droplet />,
          title: "High-Pressure Fittings",
          description: "Corrosion-resistant sanitary fittings designed to withstand the rigorous demands of commercial high-rises and industrial facilities."
        },
        {
          icon: <Factory />,
          title: "Bulk Commercial Supply",
          description: "Dedicated procurement pipelines ensuring uninterrupted supply of sanitaryware for large-scale construction projects in Sharjah."
        },
        {
          icon: <PenTool />,
          title: "BS/EN Compliant",
          description: "All plumbing and sanitary products strictly adhere to British and European standards for safety and longevity."
        }
      ]}
    />
  );
};
