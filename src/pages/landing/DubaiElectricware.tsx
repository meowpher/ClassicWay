import React from 'react';
import { LandingTemplate } from './LandingTemplate';
import { Zap, Cable, ShieldCheck } from 'lucide-react';

export const DubaiElectricware: React.FC = () => {
  return (
    <LandingTemplate
      seoTitle="Industrial Electricware Supplier in Dubai | Classic Way"
      seoDescription="Source premium industrial electricware in Dubai. Classic Way supplies high-voltage, IEC-compliant electrical components for commercial and industrial projects."
      heroHeadline="Industrial Electricware Solutions in Dubai"
      heroSubheadline="Power Dubai's fast-paced engineering and construction sector with high-voltage, premium-grade electrical components and cable management systems."
      heroImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"
      locationKeyword="Dubai"
      valueProposition="Engineered for Dubai's Industrial Sector"
      features={[
        {
          icon: <Zap />,
          title: "High-Voltage Distribution",
          description: "Industrial-grade distribution boards and switchgears capable of safely managing high-voltage commercial loads."
        },
        {
          icon: <Cable />,
          title: "Cable Management",
          description: "Robust cable trays, ties, and conduit systems designed for complex electrical routing in massive structural builds."
        },
        {
          icon: <ShieldCheck />,
          title: "IEC Standard Compliance",
          description: "Every electrical component we supply strictly adheres to International Electrotechnical Commission (IEC) standards."
        }
      ]}
    />
  );
};
