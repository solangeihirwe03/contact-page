import Location from "./components/Location";
import Form from "./components/FormContact";
import { SectionHolder } from "./styled-components/generalComponents";

function App() {
  return (
    <section>
      <SectionHolder>
        <h2 className="pb-10">Contact page</h2>
        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          <Location />
          <Form />
        </div>
      </SectionHolder>
    </section>
  );
}

export default App;
