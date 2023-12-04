import {
  Editor,
  Footer,
  Header,
  Infrastructure,
  Intro,
  Tool,
} from "./components";
const App = () => {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <Intro />
        <Editor />
        <Infrastructure />
        <Tool />
      </main>
      <Footer />
    </>
  );
};

export default App;
