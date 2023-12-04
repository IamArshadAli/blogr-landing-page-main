const Tool = () => {
  return (
    <div className="mt-16 flex flex-col px-8 text-center md:mt-24 lg:flex-row">
      <figure className="min-h-[18rem] bg-[url(./src/assets/images/illustration-laptop-mobile.svg)] bg-cover bg-center bg-no-repeat md:max-w-sm md:flex-1 md:translate-x-[40%] lg:translate-x-0 md:my-12 md:scale-150 md:bg-contain lg:scale-125 xl:bg-[url(./src/assets/images/illustration-laptop-desktop.svg)]"></figure>
      <div className="flex flex-1 flex-col md:my-16 md:flex-row md:gap-10 lg:flex-col">
        <section className="my-10 md:my-0 md:flex-1">
          <h2 className="text-2xl font-semibold text-VeryDarkBlue">
            Free, open, simple
          </h2>
          <p className="mt-8">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </section>
        <section className="md:flex-1">
          <h2 className="text-2xl font-semibold text-VeryDarkBlue">
            Powerful tooling
          </h2>
          <p className="mt-8">
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
