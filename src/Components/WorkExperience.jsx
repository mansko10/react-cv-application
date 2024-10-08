import { useState } from "react";

function AddWorkExperienceCard({ WEObjects, setWEObjects }) {
  const [formOpen, setFormOpen] = useState(false);
  const [blank, setBlank] = useState({
    title: "",
    company: "",
    startYear: "",
    endYear: "",
    id: crypto.randomUUID(),
  });

  const [responsibilities, setResponsibilities] = useState([
    { description: "", id: crypto.randomUUID() },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const WEObjectsCopy = [...WEObjects];
    const x = { ...blank };
    x.responsibilities = responsibilities;
    WEObjectsCopy.push(x);
    setWEObjects(WEObjectsCopy);
    setFormOpen(false);
  }

  function handleOpen(e) {
    setFormOpen(true);
    setBlank({
      title: "",
      company: "",
      startYear: "",
      endYear: "",
      id: crypto.randomUUID(),
    });

    setResponsibilities([{ description: "", id: crypto.randomUUID() }]);
  }

  function handleChange(e) {
    const temp = { ...blank };
    temp[e.target.id] = e.target.value;
    setBlank(temp);
  }

  function handleResponsibilitiesChange(e, responsibility) {
    const oldResponsibilities = [...responsibilities];

    const newResponsibilities = oldResponsibilities.map((oldResponsibility) => {
      if (oldResponsibility.id === responsibility.id) {
        return { ...responsibility, description: e.target.value };
      } else {
        return { ...oldResponsibility };
      }
    });

    setResponsibilities(newResponsibilities);
  }

  function handleResponsibilitiesDelete(e, responsibilities, responsibility) {
    const newResponsibilities = responsibilities.filter(
      (resp) => resp.id !== responsibility.id,
    );

    setResponsibilities(newResponsibilities);
  }

  return (
    <>
      {formOpen ? (
        <form className="flex flex-col py-2" onSubmit={handleSubmit}>
          <label
            htmlFor="title"
            className="my-1 flex items-center justify-center gap-x-1"
          >
            <div className="w-32 text-right">Title: </div>
            <input
              type="text"
              id="title"
              name="title"
              value={blank.name}
              onChange={handleChange}
              className="border-[1px] border-gray-600 px-2 py-1"
            />
          </label>
          <label
            htmlFor="company"
            className="my-1 flex items-center justify-center gap-x-1"
          >
            <div className="w-32 text-right">Company: </div>
            <input
              type="text"
              id="company"
              name="company"
              value={blank.company}
              onChange={handleChange}
              className="border-[1px] border-gray-600 px-2 py-1"
            />
          </label>
          <label
            htmlFor="startYear"
            className="my-1 flex items-center justify-center gap-x-1"
          >
            <div className="w-32 text-right">Start Year: </div>
            <input
              type="text"
              id="startYear"
              name="startYear"
              value={blank.startYear}
              onChange={handleChange}
              className="border-[1px] border-gray-600 px-2 py-1"
            />
          </label>
          <label
            htmlFor="endYear"
            className="my-1 flex items-center justify-center gap-x-1"
          >
            <div className="w-32 text-right">End Year: </div>
            <input
              type="text"
              id="endYear"
              name="endYear"
              value={blank.endYear}
              onChange={handleChange}
              className="border-[1px] border-gray-600 px-2 py-1"
            />
          </label>
          {responsibilities.map((responsibility, index) => {
            return (
              <div
                key={responsibility.id}
                className="my-1 flex items-start justify-center gap-x-1"
              >
                <label htmlFor={index + 1}>Responsibility #{index + 1}</label>
                <textarea
                  name={index + 1}
                  id={index + 1}
                  className="h-[150px] w-[200px] resize-none"
                  value={responsibility.description}
                  onChange={(e) =>
                    handleResponsibilitiesChange(e, responsibility)
                  }
                ></textarea>
                <button
                  type="button"
                  onClick={(e) =>
                    handleResponsibilitiesDelete(
                      e,
                      responsibilities,
                      responsibility,
                    )
                  }
                  className="bg-red-950 text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
          <AddResponsibility
            responsibilities={responsibilities}
            setResponsibilities={setResponsibilities}
          />
          <div className="flex justify-center gap-x-1 py-2">
            <button type="submit" className="bg-blue-700 p-2 text-white">
              Submit
            </button>
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="bg-red-700 p-2 text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          className="mx-auto my-3 block cursor-pointer bg-green-700 p-1 text-xl text-white"
          onClick={handleOpen}
        >
          Add More +
        </button>
      )}
    </>
  );
}

function AddResponsibility({ responsibilities, setResponsibilities }) {
  function addResponsibility(e) {
    const oldResponsibilities = [...responsibilities];
    const newResponsibility = {
      description: "",
      id: crypto.randomUUID(),
    };

    oldResponsibilities.push(newResponsibility);
    setResponsibilities(oldResponsibilities);
  }

  return (
    <>
      <button
        type="button"
        className="mx-auto bg-blue-300 text-white"
        onClick={addResponsibility}
      >
        Add Responsibility +
      </button>
    </>
  );
}

function EditWorkExperienceCard({
  WEObject,
  setEdit,
  WEObjects,
  setWEObjects,
}) {
  const [title, setTitle] = useState(WEObject.title);
  const [company, setCompany] = useState(WEObject.company);
  const [startYear, setStartYear] = useState(WEObject.startYear);
  const [endYear, setEndYear] = useState(WEObject.endYear);
  const [responsibilities, setResponsibilities] = useState(
    WEObject.responsibilities,
  );

  function handleResponsibilitiesDelete(e, responsibilities, responsibility) {
    const newResponsibilities = responsibilities.filter(
      (resp) => resp.id !== responsibility.id,
    );

    setResponsibilities(newResponsibilities);
  }

  function handleResponsibilitiesChange(e, responsibility) {
    const oldResponsibilities = [...responsibilities];

    const newResponsibilities = oldResponsibilities.map((oldResponsibility) => {
      console.log({ ...oldResponsibility });
      if (oldResponsibility.id === responsibility.id) {
        return { ...responsibility, description: e.target.value };
      } else {
        return { ...oldResponsibility };
      }
    });

    setResponsibilities(newResponsibilities);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newWEObject = {
      title: e.target.title.value,
      company: e.target.company.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      responsibilities: responsibilities,
      id: WEObject.id,
    };

    const newWEObjects = WEObjects.map((obj) => {
      if (obj.id === WEObject.id) {
        return newWEObject;
      } else {
        return obj;
      }
    });

    setWEObjects(newWEObjects);
    setEdit(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="title"
          className="my-1 flex items-center justify-center gap-x-1"
        >
          <div className="w-32 text-right">Title: </div>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-[1px] border-gray-600 px-2 py-1"
          />
        </label>
        <label
          htmlFor="company"
          className="my-1 flex items-center justify-center gap-x-1"
        >
          <div className="w-32 text-right">Company: </div>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border-[1px] border-gray-600 px-2 py-1"
          />
        </label>
        <label
          htmlFor="startYear"
          className="my-1 flex items-center justify-center gap-x-1"
        >
          <div className="w-32 text-right">Start Year: </div>
          <input
            type="text"
            id="startYear"
            name="startYear"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className="border-[1px] border-gray-600 px-2 py-1"
          />
        </label>
        <label
          htmlFor="endYear"
          className="my-1 flex items-center justify-center gap-x-1"
        >
          <div className="w-32 text-right">End Year: </div>
          <input
            type="text"
            id="endYear"
            name="endYear"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            className="border-[1px] border-gray-600 px-2 py-1"
          />
        </label>
        <>
          {responsibilities.map((responsibility, index) => {
            return (
              <div
                key={responsibility.id}
                className="my-1 flex items-start justify-center gap-x-1"
              >
                <label htmlFor={index + 1}>Responsibility #{index + 1}</label>
                <textarea
                  name={index + 1}
                  id={index + 1}
                  className="h-[150px] w-[200px] resize-none"
                  value={responsibility.description}
                  onChange={(e) =>
                    handleResponsibilitiesChange(e, responsibility)
                  }
                ></textarea>
                <button
                  type="button"
                  onClick={(e) =>
                    handleResponsibilitiesDelete(
                      e,
                      responsibilities,
                      responsibility,
                    )
                  }
                  className="bg-red-950 text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </>
        <p>
          {
            "(Please submit after adding or deleting responsibility to see changes.)"
          }
          <AddResponsibility
            responsibilities={responsibilities}
            setResponsibilities={setResponsibilities}
          />
        </p>
        <div className="flex justify-center gap-x-1 py-2">
          <button type="submit" className="border-2 bg-blue-700 p-2 text-white">
            Submit
          </button>
          <button
            type="button"
            className="border-2 border-white bg-red-700 p-2 text-white"
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

function WorkExperienceCard({ WEObjects, setWEObjects, WEObject }) {
  const [edit, setEdit] = useState(false);

  function handleDelete(e) {
    const newWEObjects = WEObjects.filter((obj) => obj.id !== WEObject.id);

    setWEObjects(newWEObjects);
  }

  return (
    <>
      {!edit ? (
        <div className="flex items-center justify-between gap-x-3 border-b-2 border-white px-3 py-1 text-left">
          <div className="text-left">
            <p>
              <b>
                {WEObject.title}, {WEObject.company}
              </b>
            </p>
            <p>
              {WEObject.startYear}-{WEObject.endYear}
            </p>
          </div>
          <div className="flex gap-x-2">
            <button
              type="button"
              className="w-[50px] bg-blue-700 text-white"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-red-700 p-1 text-white"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <EditWorkExperienceCard
          WEObject={WEObject}
          setEdit={setEdit}
          WEObjects={WEObjects}
          setWEObjects={setWEObjects}
        />
      )}
    </>
  );
}

export function EditWorkExperience({
  displayWE,
  setDisplayWE,
  WEObjects,
  setWEObjects,
}) {
  return (
    <>
      {!displayWE ? (
        <div
          className="flex cursor-pointer items-center justify-between border-b-[1px] border-white bg-gray-500 px-2 text-xl text-white hover:bg-black"
          onClick={() => setDisplayWE(true)}
        >
          <span className="">Work Experience</span>
          <span className="text-3xl">+</span>
        </div>
      ) : (
        <>
          <div
            className="flex cursor-pointer items-center justify-between bg-black px-2 text-xl text-white hover:bg-gray-900"
            onClick={() => setDisplayWE(false)}
          >
            <span className="">Work Experience</span>
            <span className="text-3xl">-</span>
          </div>
          <div className="bg-gray-300 py-1 text-center">
            {WEObjects.map((WEObject) => {
              return (
                <WorkExperienceCard
                  key={WEObject.id}
                  WEObject={WEObject}
                  WEObjects={WEObjects}
                  setWEObjects={setWEObjects}
                />
              );
            })}
            <AddWorkExperienceCard
              WEObjects={WEObjects}
              setWEObjects={setWEObjects}
            />
          </div>
        </>
      )}
    </>
  );
}

export function WorkExperience({ WEObjects }) {
  return (
    <>
      <h1 className="px-4 py-3 text-4xl text-teal-900">Work Experience</h1>
      <div className="px-4">
        {WEObjects.map((WEObject) => {
          return <CVWorkExperienceCard key={WEObject.id} WEObject={WEObject} />;
        })}
      </div>
    </>
  );
}

function CVWorkExperienceCard({ WEObject }) {
  return (
    <div className="border-b-2 border-black py-3">
      <h2 className="text-3xl">
        {WEObject.title}{" "}
        <span className="text-[12px]">
          ({WEObject.startYear}-{WEObject.endYear})
        </span>
      </h2>
      <p>
        <b>{WEObject.company}</b>
      </p>
      <ul>
        {WEObject.responsibilities.map((responsibility) => {
          return (
            <li
              key={responsibility.id}
              className="mx-auto my-1 w-[85%] list-outside list-disc"
            >
              {responsibility.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
