import DashboardStudentTable from "@/components/layouts/Dashboard/DashboardStudentTable";

const StudentEnrollPage = () => {
  return (
    <section>
      <div className="p-4">
        <div className="space-y-5">
          <h1 className="text-lg font-semibold">Siswa Terdaftar</h1>
          <DashboardStudentTable />
        </div>
      </div>
    </section>
  );
};
export default StudentEnrollPage;
