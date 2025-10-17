import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { PRICING_PLANS } from "@/constants/site-data";
import { Check } from "lucide-react";
import Link from "next/link";

/**
 * Pricing Section Component
 * Displays pricing plans with features
 */

export function PricingSection() {
  return (
    <SectionContainer id="pricing" className="bg-muted/50">
      <SectionHeading
        title="Simple, Transparent Pricing"
        subtitle="Everything you need to succeed online, no hidden fees"
      />

      <div className="max-w-3xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.id}
            className="border-2 border-primary shadow-lg relative overflow-hidden"
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <Badge className="rounded-none rounded-bl-lg">
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
              <div className="space-y-1">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">${plan.downPayment}</span>
                  <span className="text-muted-foreground">down</span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold">${plan.monthlyPrice}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>
                  {plan.minimumContract} month minimum contract
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-6">
              <Button size="lg" className="w-full" asChild>
                <Link href="#contact">Get Started Today</Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                100% Money-Back Guarantee • Cancel Anytime After Minimum Term
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Value propositions */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">No Upfront Costs</h3>
          <p className="text-sm text-muted-foreground">
            Get started with $0 down and pay monthly
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg">All-Inclusive</h3>
          <p className="text-sm text-muted-foreground">
            Hosting, SSL, updates, and support included
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Unlimited Edits</h3>
          <p className="text-sm text-muted-foreground">
            Make changes anytime with no extra charges
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
