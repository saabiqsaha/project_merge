import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CanvasSectionProps {
  title: string;
  description: string;
  content: string[];
  className?: string;
}

const CanvasSection: React.FC<CanvasSectionProps> = ({
  title,
  description,
  content,
  className,
}) => {
  return (
    <Card className={`h-full border border-blue-200 hover:shadow-md transition-all duration-300 ${className}`}>
      <CardHeader className="bg-blue-50 dark:bg-blue-900/20 p-3">
        <CardTitle className="text-blue-800 dark:text-blue-300 text-sm">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2 p-3">
        <ul className="list-disc pl-4 space-y-1">
          {content.map((item, index) => (
            <li key={index} className="text-xs">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const BusinessModelCanvas = () => {
  // Sample data for demonstration purposes
  const sections = [
    {
      title: "Key Partners",
      description: "Who are our key partners and suppliers?",
      content: [
        "Strategic alliance with technology providers",
        "Key suppliers for hardware components",
        "Investment partners for funding rounds",
        "Manufacturing partners for production",
      ],
    },
    {
      title: "Key Activities",
      description: "What key activities do we perform?",
      content: [
        "Product development and innovation",
        "Marketing and customer acquisition",
        "Platform maintenance and updates",
        "Customer support and service",
      ],
    },
    {
      title: "Key Resources",
      description: "What key resources do we need?",
      content: [
        "Intellectual property and patents",
        "Talented development team",
        "Physical infrastructure",
        "Capital funding",
      ],
    },
    {
      title: "Value Propositions",
      description: "What value do we deliver to customers?",
      content: [
        "Innovative solution to a significant problem",
        "Cost reduction for customers",
        "Performance improvements over alternatives",
        "Customization and personalization",
        "Brand/status recognition",
      ],
    },
    {
      title: "Customer Relationships",
      description: "What relationships do we establish?",
      content: [
        "Personal assistance and support",
        "Self-service platform",
        "Automated services",
        "Community engagement",
      ],
    },
    {
      title: "Channels",
      description: "How do we reach our customers?",
      content: [
        "Direct sales team",
        "Website and e-commerce",
        "Partner distribution networks",
        "Social media and digital marketing",
      ],
    },
    {
      title: "Customer Segments",
      description: "Who are we creating value for?",
      content: [
        "Enterprise businesses",
        "Small and medium businesses",
        "Individual consumers",
        "Government agencies",
      ],
    },
    {
      title: "Cost Structure",
      description: "What are our most important costs?",
      content: [
        "Research and development",
        "Sales and marketing",
        "Infrastructure maintenance",
        "Employee salaries and benefits",
      ],
    },
    {
      title: "Revenue Streams",
      description: "How do we generate revenue?",
      content: [
        "Subscription model",
        "Usage-based pricing",
        "Licensing fees",
        "One-time purchases",
      ],
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-white dark:bg-gray-950">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">
        Business Model Canvas
      </h2>
      
      <div className="grid grid-cols-12 gap-2">
        {/* Top row */}
        <div className="col-span-3">
          <CanvasSection
            title={sections[0].title}
            description={sections[0].description}
            content={sections[0].content}
          />
        </div>
        
        <div className="col-span-5">
          <div className="grid grid-rows-2 h-full gap-2">
            <CanvasSection
              title={sections[1].title}
              description={sections[1].description}
              content={sections[1].content}
            />
            <CanvasSection
              title={sections[2].title}
              description={sections[2].description}
              content={sections[2].content}
            />
          </div>
        </div>
        
        <div className="col-span-4">
          <CanvasSection
            title={sections[3].title}
            description={sections[3].description}
            content={sections[3].content}
            className="h-full"
          />
        </div>
        
        {/* Middle row */}
        <div className="col-span-8">
          <div className="grid grid-rows-2 h-full gap-2">
            <CanvasSection
              title={sections[4].title}
              description={sections[4].description}
              content={sections[4].content}
            />
            <CanvasSection
              title={sections[5].title}
              description={sections[5].description}
              content={sections[5].content}
            />
          </div>
        </div>
        
        <div className="col-span-4">
          <CanvasSection
            title={sections[6].title}
            description={sections[6].description}
            content={sections[6].content}
            className="h-full"
          />
        </div>
        
        {/* Bottom row */}
        <div className="col-span-6">
          <CanvasSection
            title={sections[7].title}
            description={sections[7].description}
            content={sections[7].content}
          />
        </div>
        
        <div className="col-span-6">
          <CanvasSection
            title={sections[8].title}
            description={sections[8].description}
            content={sections[8].content}
          />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          This business model canvas outlines our core strategy for creating and delivering value to customers while establishing a sustainable and profitable venture.
        </p>
      </div>
    </div>
  );
};

export default BusinessModelCanvas; 