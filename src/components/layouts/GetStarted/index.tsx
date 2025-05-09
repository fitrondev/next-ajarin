import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <div className="container space-y-5 md:space-y-10">
        <Title
          title="Belajar dari mana saja, kapan saja"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, at blanditiis harum facilis voluptates quisquam."
        />

        <div className="flex items-center justify-start md:justify-center gap-4">
          <Button size={"lg"} asChild>
            <Link href="/auth/login">Get Started</Link>
          </Button>

          <Button variant={"link"} size={"lg"} asChild>
            <Link href="/">
              Learn More <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
