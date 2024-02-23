export default function Groups({ name, imgsrc, followed }) {
  return (
    <div className="flex flex-row justify-between w-full text-md">
      <div className="flex flex-row text-md justify-start items-center w-full gap-8">
        <img src={imgsrc} alt="" className="w-10 h-10 rounded-full" />
        <p>{name}</p>
      </div>
      {followed && (
        <button className="rounded-3xl bg-black text-white p-1 w-36">
          Followed
        </button>
      )}
      {!followed && (
        <button className="rounded-3xl bg-gray-300 text-black p-1 w-24">
          Follow
        </button>
      )}
    </div>
  );
}
