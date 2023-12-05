import "./Tool.css";

const Tool = () => {
  return (
    <div className="mt-16 flex flex-col px-8 text-center md:mt-24 lg:flex-row xl:mt-56">
      <figure className="laptop-illustration min-h-[18rem] bg-cover bg-center bg-no-repeat md:my-12 md:max-w-sm md:flex-1 md:translate-x-[40%] md:scale-150 md:bg-contain lg:-ml-10 lg:translate-x-0 xl:my-[8.65rem] xl:translate-x-6 xl:scale-[2.73]"></figure>
      <div className="flex flex-1 flex-col md:my-16 md:flex-row md:gap-10 lg:flex-col lg:pl-24 lg:pr-10 lg:text-left xl:ml-[16.5rem] xl:mt-[5rem] xl:pr-32">
        <section className="my-10 md:my-0 md:flex-1">
          <h2 className="tool-heading">
            Free, open, simple
          </h2>
          <p className="mt-8 xl:mt-6 xl:leading-7 xl:tracking-wide">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </section>
        <section className="md:flex-1 xl:mt-8">
          <h2 className="tool-heading">
            Powerful tooling
          </h2>
          <p className="mt-8 xl:mt-7 xl:leading-7 xl:tracking-wide">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Tool;
