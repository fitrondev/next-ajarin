import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const DashboardCourseTable = () => {
  return (
    <Table className="w-fit border">
      <TableHeader>
        <TableRow className="[&>th]:border-r last:border-r-0">
          <TableHead className="w-[450px]">Semua Kursus</TableHead>
          <TableHead className="w-[150px]">Pendapatan</TableHead>
          <TableHead className="w-[150px]">Siswa</TableHead>
          <TableHead className="w-[150px]">Status</TableHead>
          <TableHead className="w-[150px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((item, index) => (
          <TableRow
            key={index}
            className="[&>td]:border-r last:border-r-0 text-muted-foreground"
          >
            <TableCell>
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={"/images/coursefallback.jpg"}
                    alt=""
                    width={400}
                    height={200}
                    className="w-16 h-9 rounded-md object-cover"
                  />
                </div>
                <p className="line-clamp-1">
                  Build Text to image SaaS App in React JS
                </p>
              </div>
            </TableCell>
            <TableCell>$10.00</TableCell>
            <TableCell>25</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <Switch id="enable-feature" />
                <Label htmlFor="enable-feature">Draft</Label>
              </div>
            </TableCell>
            <TableCell className="space-x-2">
              <Button size={"icon"} asChild>
                <Link href={"/dashboard/course/edit/1"}>
                  <UserPen className="size-5" />
                </Link>
              </Button>

              <Button size={"icon"} variant={"destructive"}>
                <Trash2 className="size-5" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DashboardCourseTable;
