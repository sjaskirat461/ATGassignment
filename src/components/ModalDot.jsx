export default function ModalDot() {
  return (
    <div className="flex  flex-col absolute text-sm right-[47%] pt-[5.6rem] z-[999] -mr-2 ">
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 z-[999] bg-white flex flex-col gap-2 text-2em rounded-lg items-start w-36">
        <button>Edit</button>
        <button>Report</button>
        <button>Option3</button>
      </div>
    </div>
  );
}
