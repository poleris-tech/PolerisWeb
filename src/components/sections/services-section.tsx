import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { SERVICES } from "@/constants/site-data";
import { Code, Search, Target, Server, LucideIcon } from "lucide-react";

/**
 * Services Section Component
 * Displays available services in a card grid
 */

const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  Search,
  Target,
  Server,
};

export function ServicesSection() {
  return (
    <SectionContainer id="services" className="bg-muted/50">
      <SectionHeading
        title="Our Services"
        subtitle="Everything you need to succeed online, from design to deployment"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const Icon = ICON_MAP[service.icon];

          return (
            <Card key={service.id} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
