import { useState } from "react";

function AddEducationCard({ education, setEducation }) {
  const [formOpen, setFormOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedObject = {
      degree: e.target.degree.value,
      university: e.target.university.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      id: crypto.randomUUID(),
    };

    const educationCopy = [...education];
    educationCopy.push(updatedObject);
    setEducation(educationCopy);
    setFormOpen(false);
  }

  return (
    <>
      {formOpen ? (
        <form className="flex flex-col py-2" onSubmit={handleSubmit}>
          <label
            htmlFor="degree"
            className="my-1 flex items-center justify-center gap-x-1"
          >
            <div className="w-32 text-right">Degree: </div>
            <input
              type="text"
              id="degree"
              name="degree"
              className="border-[1px] border-gray-600 px-2 py-1"
            />
          </label>
          <label
            htmlFor="university"
            className="my-1 flex items-center justify-center gap-x-1"
          >
            <div className="w-32 text-right">University: </div>
            <input
              type="text"
              id="university"
              name="university"
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
              className="border-[1px] border-gray-600 px-2 py-1"
            />
          </label>
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
          onClick={() => setFormOpen(true)}
        >
          Add More +
        </button>
      )}
    </>
  );
}

function EditEducationCard({ ed, education, setEducation, setEdit }) {
  const [degree, setDegree] = useState(ed.degree);
  const [university, setUniversity] = useState(ed.university);
  const [startYear, setStartYear] = useState(ed.startYear);
  const [endYear, setEndYear] = useState(ed.endYear);

  function handleEditSubmit(e) {
    e.preventDefault();

    const educationCopy = [...education];

    const updatedObject = {
      degree: e.target.degree.value,
      university: e.target.university.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      id: crypto.randomUUID(),
    };

    const updatedEducation = educationCopy.map((obj) => {
      if (obj.id === ed.id) {
        return updatedObject;
      } else {
        return obj;
      }
    });

    setEducation(updatedEducation);
  }

  return (
    <form className="flex flex-col py-2" onSubmit={handleEditSubmit}>
      <label
        htmlFor="degree"
        className="my-1 flex items-center justify-center gap-x-1"
      >
        <div className="w-32 text-right">Degree: </div>
        <input
          type="text"
          id="degree"
          name="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="border-[1px] border-gray-600 px-2 py-1"
        />
      </label>
      <label
        htmlFor="university"
        className="my-1 flex items-center justify-center gap-x-1"
      >
        <div className="w-32 text-right">University: </div>
        <input
          type="text"
          id="university"
          name="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
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
  );
}

function EducationCard({ ed, education, setEducation }) {
  const [edit, setEdit] = useState(false);

  function handleDelete() {
    const updatedEducation = education.filter((obj) => obj.id !== ed.id);

    setEducation(updatedEducation);
  }

  return (
    <>
      {!edit ? (
        <div className="education-card flex items-center justify-between gap-x-3 border-b-2 border-white px-4 py-4">
          <div className="text-left">
            <p>
              <b>
                {ed.degree}, {ed.university}
              </b>
            </p>
            <p>
              {ed.startYear}-{ed.endYear}
            </p>
          </div>
          <div>
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
        </div>
      ) : (
        <EditEducationCard
          ed={ed}
          education={education}
          setEducation={setEducation}
          edit={edit}
          setEdit={setEdit}
        />
      )}
    </>
  );
}

export function EditEducation({
  displayEd,
  setDisplayEd,
  education,
  setEducation,
}) {
  return (
    <>
      {displayEd ? (
        <>
          <div
            className="flex cursor-pointer items-center justify-between bg-black px-2 text-xl text-white hover:bg-gray-900"
            onClick={() => setDisplayEd(false)}
          >
            <span className="">Education</span>
            <span className="text-3xl">-</span>
          </div>
          <div className="bg-gray-300 p-1">
            <div className="py-1 text-center">
              {education.map((ed) => {
                return (
                  <EducationCard
                    key={ed.id}
                    ed={ed}
                    education={education}
                    setEducation={setEducation}
                  />
                );
              })}
            </div>
            <AddEducationCard
              education={education}
              setEducation={setEducation}
            />
          </div>
        </>
      ) : (
        <div
          className="flex cursor-pointer items-center justify-between bg-gray-500 px-2 text-xl text-white hover:bg-black"
          onClick={() => setDisplayEd(true)}
        >
          <span className="">Education</span>
          <span className="text-3xl">+</span>
        </div>
      )}
    </>
  );
}

function CVEducationCard({ card }) {
  return (
    <>
      <h2 className="text-3xl">{card.degree}</h2>
      <p>
        <b>{card.university}</b>
      </p>
      <p>
        {card.startYear}-{card.endYear}
      </p>
    </>
  );
}

export function Education({ education }) {
  return (
    <>
      <h1 className="px-4 py-3 text-4xl text-teal-900">Education</h1>
      <div className="px-4">
        {education.map((card) => {
          return <CVEducationCard key={card.id} card={card} />;
        })}
      </div>
    </>
  );
}
