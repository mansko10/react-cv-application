import { useState } from "react";
import {
  EditGeneralInformation,
  GeneralInformation,
} from "./Components/GeneralInformation";
import { EditEducation, Education } from "./Components/Education";
import { initialGeneralInfo } from "./Data/initialGeneralInfo";
import { initialEducation } from "./Data/initialEducation";
import {
  EditWorkExperience,
  WorkExperience,
} from "./Components/WorkExperience";
import { initial_WEObjects } from "./Data/initialWorkExperience";
import { aboutMe as initialAboutMe } from "./Data/aboutMe";
import { AboutMe, EditAboutMe } from "./Components/AboutMe";

function App() {
  const [displayEGI, setDisplayEGI] = useState(false);
  const [displayEd, setDisplayEd] = useState(false);
  const [displayWE, setDisplayWE] = useState(false);
  const [displayAboutMe, setDisplayAboutMe] = useState(false);

  const [generalInformation, setGeneralInformation] =
    useState(initialGeneralInfo);
  const [education, setEducation] = useState(initialEducation);
  const [WEObjects, setWEObjects] = useState(initial_WEObjects);
  const [aboutMe, setAboutMe] = useState(initialAboutMe);

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
          <EditAboutMe
            displayAboutMe={displayAboutMe}
            setDisplayAboutMe={setDisplayAboutMe}
            aboutMe={aboutMe}
            setAboutMe={setAboutMe}
          />
          <EditWorkExperience
            displayWE={displayWE}
            setDisplayWE={setDisplayWE}
            WEObjects={WEObjects}
            setWEObjects={setWEObjects}
          />
          <EditEducation
            displayEd={displayEd}
            setDisplayEd={setDisplayEd}
            education={education}
            setEducation={setEducation}
          />
        </div>
        <div className="cv flex-[0_1_600px] cursor-default pb-14 shadow-md shadow-black">
          <GeneralInformation
            name={generalInformation.name}
            email={generalInformation.email}
            mobile={generalInformation.mobile}
            profession={generalInformation.profession}
          />
          <AboutMe aboutMe={aboutMe} />
          <WorkExperience WEObjects={WEObjects} />
          <Education education={education} />
        </div>
      </div>
    </>
  );
}

export default App;
