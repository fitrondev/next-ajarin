import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CourseSearch = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Cari kursus..."
          className="border-0 focus-visible:ring-0 shadow-none"
        />
      </div>

      <Button>Search</Button>
    </div>
  );
};
export default CourseSearch;
