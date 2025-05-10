import DashboardCourseTable from "@/components/layouts/Dashboard/DashboardCourseTable";

const AllCoursePage = () => {
  return (
    <section>
      <div className="p-4">
        <div className="space-y-5">
          <h1 className="text-lg font-semibold">Semua Kursus</h1>
          <DashboardCourseTable />
        </div>
      </div>
    </section>
  );
};
export default AllCoursePage;
