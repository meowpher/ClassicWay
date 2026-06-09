import React from 'react';
import { LandingTemplate } from './LandingTemplate';
import { Truck, Warehouse, Package } from 'lucide-react';

export const AjmanProcurement: React.FC = () => {
  return (
    <LandingTemplate
      seoTitle="Hardware & Electrical Supplies in Ajman | Classic Way"
      seoDescription="Classic Way is the premier logistics hub and supplier for hardware and electrical components in Ajman, enabling rapid fulfillment for regional engineering projects."
      heroHeadline="Hardware & Electrical Supplies in Ajman"
      heroSubheadline="Leverage our dedicated logistics hub in Al Jerf Industrial 1, Ajman for rapid, reliable, and large-scale fulfillment of commercial hardware and electrical components."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      locationKeyword="Ajman"
      valueProposition="Rapid Logistics Hub in Ajman"
      features={[
        {
          icon: <Warehouse />,
          title: "Local Logistics Hub",
          description: "Our dedicated warehouse in Al Jerf Industrial 1 ensures immediate availability of stock for rapid deployment across Ajman and the Northern Emirates."
        },
        {
          icon: <Truck />,
          title: "Rapid Fleet Dispatch",
          description: "Streamlined logistics pipelines allow us to deliver bulk orders directly to your construction sites with minimal lead times."
        },
        {
          icon: <Package />,
          title: "Comprehensive Inventory",
          description: "From heavy-duty hardware to advanced electrical switchgears, access our complete catalog locally in Ajman."
        }
      ]}
    />
  );
};
