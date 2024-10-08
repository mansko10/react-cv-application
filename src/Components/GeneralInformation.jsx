import IMAGES from "../img/images";

export function EditGeneralInformation({
  displayEGI,
  setDisplayEGI,
  generalInformation,
  setGeneralInformation,
}) {
  return (
    <>
      {displayEGI ? (
        <>
          <div
            className="flex cursor-pointer items-center justify-between bg-black px-2 text-xl text-white hover:bg-gray-900"
            onClick={() => setDisplayEGI(false)}
          >
            <span className="">General Information</span>
            <span className="text-3xl">-</span>
          </div>
          <form
            className="bg-gray-300 py-1 text-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              htmlFor="name"
              className="my-0 flex items-center justify-center gap-x-1"
            >
              <div className="w-32 text-right">Name:</div>
              <input
                type="text"
                name="name"
                id="name"
                value={generalInformation.name}
                className="border-[1px] border-gray-600 px-2 py-1"
                onChange={(e) =>
                  setGeneralInformation({
                    ...generalInformation,
                    name: e.target.value,
                  })
                }
              />
            </label>
            <label
              htmlFor="profession"
              className="my-1 flex items-center justify-center gap-x-1"
            >
              <div className="w-32 text-right">Profession:</div>
              <input
                type="text"
                name="profession"
                id="profession"
                value={generalInformation.profession}
                className="border-[1px] border-gray-600 px-2 py-1"
                onChange={(e) =>
                  setGeneralInformation({
                    ...generalInformation,
                    profession: e.target.value,
                  })
                }
              />
            </label>
            <label
              htmlFor="email"
              className="my-1 flex items-center justify-center gap-x-1"
            >
              <div className="w-32 text-right">Email:</div>
              <input
                type="email"
                name="email"
                id="email"
                value={generalInformation.email}
                className="border-1 border-[1px] border-gray-600 px-2 py-1"
                onChange={(e) =>
                  setGeneralInformation({
                    ...generalInformation,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label
              htmlFor="number"
              className="my-1 flex items-center justify-center gap-x-1"
            >
              <div className="w-32 text-right">Phone Number:</div>
              <input
                type="text"
                name="number"
                id="number"
                value={generalInformation.mobile}
                className="border-[1px] border-gray-600 px-2 py-1"
                onChange={(e) =>
                  setGeneralInformation({
                    ...generalInformation,
                    mobile: e.target.value,
                  })
                }
              />
            </label>
          </form>
        </>
      ) : (
        <div
          className="flex cursor-pointer items-center justify-between border-b-[1px] border-white bg-gray-500 px-2 text-xl text-white hover:bg-black"
          onClick={() => setDisplayEGI(true)}
        >
          <span className="">General Information</span>
          <span className="text-3xl">+</span>
        </div>
      )}
    </>
  );
}

export function GeneralInformation({ name, email, mobile, profession }) {
  return (
    <div className="bg-teal-900 py-3 text-center text-white">
      <h1 className="text-4xl font-thin">{name}</h1>
      <p className="my-3">{profession}</p>
      <div className="my-3 flex justify-center gap-10">
        <p className="flex items-center justify-center gap-x-1">
          <img src={IMAGES.emailImg} className="pointer-events-none w-[20px]" />
          {email}
        </p>
        <p className="flex items-center justify-center gap-x-1">
          <img src={IMAGES.phoneImg} className="pointer-events-none w-[20px]" />
          {mobile}
        </p>
      </div>
    </div>
  );
}
