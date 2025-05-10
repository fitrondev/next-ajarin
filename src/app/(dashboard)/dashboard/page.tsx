import DashboardStudentTable from "@/components/layouts/Dashboard/DashboardStudentTable";
import { User } from "lucide-react";

const DashboardPage = () => {
  return (
    <section>
      <div className="p-4 space-y-5 md:space-y-10">
        <div className="flex flex-col md:flex-row md:flex-wrap items-start lg:items-center  gap-4">
          <div className="w-[230px] border border-primary rounded-lg p-3 flex items-center gap-2">
            <div className="w-fit p-1 bg-primary rounded-full">
              <User className="size-6 text-white" />
            </div>

            <div>
              <p className="font-semibold">14</p>
              <p className="text-sm text-muted-foreground">Jumlah Pembelian</p>
            </div>
          </div>

          <div className="w-[230px] border border-primary rounded-lg p-3 flex items-center gap-2">
            <div className="w-fit p-1 bg-primary rounded-full">
              <User className="size-6 text-white" />
            </div>

            <div>
              <p className="font-semibold">10</p>
              <p className="text-sm text-muted-foreground">Total Kursus</p>
            </div>
          </div>

          <div className="w-[230px] border border-primary rounded-lg p-3 flex items-center gap-2">
            <div className="w-fit p-1 bg-primary rounded-full">
              <User className="size-6 text-white" />
            </div>

            <div>
              <p className="font-semibold">$14.00</p>
              <p className="text-sm text-muted-foreground">Jumlah Pendapatan</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-lg font-semibold">Pembelian Terakhir :</h1>
          <DashboardStudentTable />
        </div>
      </div>
    </section>
  );
};
export default DashboardPage;
