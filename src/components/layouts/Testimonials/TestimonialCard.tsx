import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  username: string;
  image: string;
  testimonial: string;
};

const TestimonialCard = ({
  name,
  username,
  image,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <Card className="relative w-full max-w-sm bg-muted/70 shadow-none border-none">
      <Quote className="absolute top-3 right-2 h-16 w-16 text-foreground/10 stroke-[1.5px]" />
      <CardHeader className="py-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image || "https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <span className="text-[15px] leading-none font-semibold capitalize">
              {name}
            </span>
            <span className="text-sm leading-none text-muted-foreground">
              {username}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] text-muted-foreground">{testimonial}</p>
      </CardContent>
    </Card>
  );
};
export default TestimonialCard;
