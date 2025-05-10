import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const DashboardStudentTable = () => {
  return (
    <Table className="w-fit border">
      <TableHeader>
        <TableRow className="[&>th]:border-r last:border-r-0">
          <TableHead className="w-[30px]">No</TableHead>
          <TableHead className="w-[250px]">Nama User</TableHead>
          <TableHead className="w-[300px]">Judul Kursus</TableHead>
          <TableHead className="w-[250px]">Tanggal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((item, index) => (
          <TableRow
            key={index}
            className="[&>td]:border-r last:border-r-0 text-muted-foreground"
          >
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="line-clamp-1">Ansori Dev</p>
              </div>
            </TableCell>
            <TableCell>
              <span className="line-clamp-1">Belajar Tailwind CSS</span>
            </TableCell>
            <TableCell>22 Agustus, 2024</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DashboardStudentTable;
