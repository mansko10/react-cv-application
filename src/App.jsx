import { useState } from "react";
import {
  EditGeneralInformation,
  GeneralInformation,
} from "./Components/GeneralInformation";
import { EditEducation, Education } from "./Components/Education";
import { initialGeneralInfo } from "./Data/initialGeneralInfo";
import { initialEducation } from "./Data/initialEducation";

function App() {
  const [displayEGI, setDisplayEGI] = useState(false);
  const [displayEd, setDisplayEd] = useState(false);
  const [generalInformation, setGeneralInformation] =
    useState(initialGeneralInfo);
  const [education, setEducation] = useState(initialEducation);

  return (
    <>
      <div className="app mx-auto flex min-h-[100vh] justify-center gap-x-9">
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
          <EditEducation
            displayEd={displayEd}
            setDisplayEd={setDisplayEd}
            education={education}
            setEducation={setEducation}
          />
        </div>
        <div className="cv flex-[0_1_600px] cursor-default shadow-md shadow-black">
          <GeneralInformation
            name={generalInformation.name}
            email={generalInformation.email}
            mobile={generalInformation.mobile}
          />
          <Education education={education} />
        </div>
      </div>
    </>
  );
}

export default App;
