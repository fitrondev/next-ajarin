type TitleProps = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex flex-col items-start md:items-center justify-center text-start md:text-center gap-2">
      <h3 className="text-2xl md:text-4xl font-semibold">{title}</h3>
      <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};
export default Title;
