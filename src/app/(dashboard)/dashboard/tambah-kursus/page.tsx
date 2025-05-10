import DashboardCreateForm from "@/components/layouts/Dashboard/DashboardCreateForm";

const AddCoursePage = () => {
  return (
    <section>
      <div className="p-4">
        <div className="space-y-5">
          <h1 className="text-lg font-semibold">Tambah Kursus Baru</h1>

          <div>
            <DashboardCreateForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddCoursePage;
