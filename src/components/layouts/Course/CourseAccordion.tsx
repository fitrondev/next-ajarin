import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Play, Timer } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Project Introduction",
    content: [
      "App Overview – Build Text-to-Image SaaS",
      "Project Overview – Build Text-to-Image SaaS",
      "Project Setup – Build Text-to-Image SaaS",
    ],
  },

  {
    title: "Project Introduction",
    content: [
      "App Overview – Build Text-to-Image SaaS",
      "Project Overview – Build Text-to-Image SaaS",
      "Project Setup – Build Text-to-Image SaaS",
    ],
  },

  {
    title: "Project Introduction",
    content: [
      "App Overview - Build Text-to-Image SaaS",
      "Project Overview – Build Text-to-Image SaaS",
      "Project Setup – Build Text-to-Image SaaS",
    ],
  },
];
const CourseAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="my-4 w-full border-b rounded-b-md space-y-2"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border rounded-md px-4 bg-secondary"
        >
          <AccordionTrigger>
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-semibold">
                {index + 1}. {title}
              </h4>

              <p className="hidden md:flex items-center gap-2">
                <Timer className="size-5" /> 3 Content - 20m
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white rounded-t-sm pt-4 px-4">
            <div className="space-y-2">
              {content.map((item, index) => (
                <Link
                  href={"/"}
                  key={index}
                  className="flex items-center justify-between group hover:bg-accent p-2 rounded-md"
                >
                  <p className="flex items-center gap-2 text-sm">
                    <span className="p-0.5 bg-primary max-w-max rounded-full text-center group-hover:bg-primary/80">
                      <Play className="size-3 text-white" />
                    </span>

                    <span className="line-clamp-1">{item}</span>
                  </p>

                  <p className="text-sm text-muted-foreground group-hover:text-foreground">
                    10m
                  </p>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseAccordion;
