import { useState } from "react";
import {
  EditGeneralInformation,
  GeneralInformation,
} from "./Components/GeneralInformation";
import { initialGeneralInfo } from "./Data/initialGeneralInfo";

function App() {
  const [displayEGI, setDisplayEGI] = useState(false);
  const [generalInformation, setGeneralInformation] =
    useState(initialGeneralInfo);
  return (
    <>
      <div className="app mx-auto flex h-[100vh] justify-center gap-x-9">
        <div className="editor flex-[0_1_500px] border-2 border-black">
          <h1 className="mb-5 border-2 py-2 text-center text-3xl">
            Edit Your CV
          </h1>
          <EditGeneralInformation
            displayEGI={displayEGI}
            setDisplayEGI={setDisplayEGI}
            generalInformation={generalInformation}
            setGeneralInformation={setGeneralInformation}
          />
        </div>
        <div className="cv flex-[0_1_600px] cursor-default shadow-md shadow-black">
          <GeneralInformation
            name={generalInformation.name}
            email={generalInformation.email}
            mobile={generalInformation.mobile}
          />
        </div>
      </div>
    </>
  );
}

export default App;
