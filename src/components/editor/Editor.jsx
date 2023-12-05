import "./Editor.css";

const Editor = () => {
  return (
    <article className="mt-24 text-center xl:mt-40">
      <h2 className="text-[1.65rem] font-bold text-VeryDarkBlue md:text-3xl xl:ml-4 xl:text-[2.3rem]">
        Designed for the future
      </h2>
      <div className="flex flex-col lg:flex-row-reverse lg:overflow-x-clip xl:mt-3">
        <figure className="editor-illustration mt-10 min-h-[21rem] bg-cover bg-center bg-no-repeat md:mt-20 md:max-w-md md:translate-x-[35%] md:scale-125 md:bg-contain lg:flex-1 lg:translate-x-24 lg:scale-150 xl:mt-[4.05rem] xl:translate-x-[3.35rem] xl:scale-[2.07]"></figure>
        <div className="md:mt-16 md:px-12 lg:flex-1 lg:text-left xl:pl-[8.2rem] xl:pr-[17rem]">
          <section className="mt-8 md:mb-16 xl:mt-9">
            <h2 className="px-12 text-3xl font-semibold text-VeryDarkBlue lg:pl-8 lg:pr-0 xl:text-[1.75rem]">
              Introducing an extensible editor
            </h2>
            <p className="mt-5 px-8 leading-7 xl:mt-6 xl:pr-[.5rem] xl:tracking-wide">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </section>
          <section className="mt-8 xl:mt-[4.75rem]">
            <h2 className="px-12 text-3xl font-semibold text-VeryDarkBlue lg:pl-8 lg:pr-0 xl:text-[1.75rem]">
              Robust content management
            </h2>
            <p className="mt-5 px-8 leading-7 xl:mt-6 xl:tracking-wide">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Editor;
