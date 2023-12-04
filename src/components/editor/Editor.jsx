const Editor = () => {
  return (
    <article className="mt-24 text-center">
      <h2 className="text-[1.65rem] font-bold text-VeryDarkBlue md:text-3xl">
        Designed for the future
      </h2>
      <figure className="mt-10 min-h-[21rem] bg-[url(src/assets/images/illustration-editor-mobile.svg)] bg-cover bg-center bg-no-repeat"></figure>
      <div className="md:px-12 md:mt-16">
        <section className="mt-8 md:mb-16">
          <h2 className="px-12 text-3xl font-semibold text-VeryDarkBlue">
            Introducing an extensible editor
          </h2>
          <p className="mt-5 px-8 leading-7">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="px-12 text-3xl font-semibold text-VeryDarkBlue">
            Robust content management
          </h2>
          <p className="mt-5 px-8 leading-7">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Editor;
