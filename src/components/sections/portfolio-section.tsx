import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { PORTFOLIO_ITEMS } from "@/constants/site-data";
import { Badge } from "@/components/ui/badge";

/**
 * Portfolio Section Component
 * Showcases portfolio items in a grid
 */

export function PortfolioSection() {
  return (
    <SectionContainer id="portfolio">
      <SectionHeading
        title="Our Work"
        subtitle="See how we've helped businesses succeed online"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_ITEMS.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
            {/* Placeholder image area */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20">
                {item.title.substring(0, 1)}
              </div>
            </div>

            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
