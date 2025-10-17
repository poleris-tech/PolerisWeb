import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TESTIMONIALS } from "@/constants/site-data";
import { Star } from "lucide-react";

/**
 * Testimonials Section Component
 * Displays customer testimonials in a grid
 */

export function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials">
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from businesses we've helped"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id} className="border-2">
            <CardHeader>
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-sm leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>

                {/* Author info */}
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">{testimonial.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust badge */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Rated 5/5 by our clients • 100% Satisfaction Guarantee
        </p>
      </div>
    </SectionContainer>
  );
}
