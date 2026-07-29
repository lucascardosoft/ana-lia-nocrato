import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { education, professional } from "@/content/site";

export function Education() {
  return (
    <section aria-labelledby="education-heading" className="bg-sand py-20 sm:py-28">
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <SectionHeading eyebrow="Formação" title="Currículo" id="education-heading" />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 flex justify-center">
          <Badge tone="terracotta" className="text-[14px]">
            {professional.crp}
          </Badge>
        </RevealOnScroll>

        <ul className="mt-10 space-y-4">
          {education.map((item, index) => (
            <RevealOnScroll
              as="li"
              key={item.title}
              delay={index * 0.06}
              className="flex items-start gap-4 rounded-lg bg-cream p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-soft">
                <GraduationCap className="size-5 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-ink">{item.title}</p>
                <p className="text-[15px] text-warmgray">{item.institution}</p>
              </div>
            </RevealOnScroll>
          ))}
        </ul>
      </Container>
    </section>
  );
}
