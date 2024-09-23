export function EditAboutMe({
  displayAboutMe,
  setDisplayAboutMe,
  aboutMe,
  setAboutMe,
}) {
  return (
    <>
      {displayAboutMe ? (
        <>
          <div
            className="flex cursor-pointer items-center justify-between bg-black px-2 text-xl text-white hover:bg-gray-900"
            onClick={() => setDisplayAboutMe(false)}
          >
            <span className="">About Me</span>
            <span className="text-3xl">-</span>
          </div>
          <form
            className="bg-gray-300 py-1 text-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-center text-2xl">Write About Yourself</h1>
            <textarea
              name="aboutMe"
              id="aboutMe"
              className="my-2 h-[140px] w-[350px] resize-none p-2"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            ></textarea>
          </form>
        </>
      ) : (
        <div
          className="flex cursor-pointer items-center justify-between border-b-[1px] border-white bg-gray-500 px-2 text-xl text-white hover:bg-black"
          onClick={() => setDisplayAboutMe(true)}
        >
          <span className="">About Me</span>
          <span className="text-3xl">+</span>
        </div>
      )}
    </>
  );
}

export function AboutMe({ aboutMe }) {
  return (
    <>
      <h1 className="px-4 py-3 text-4xl text-teal-900">About Me</h1>
      <p className="px-4">{aboutMe}</p>
    </>
  );
}
