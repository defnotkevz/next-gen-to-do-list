export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#181b1f] text-white">
      <div className="w-3/4 flex flex-col gap-8">
        <input
          className="text-3xl bg-[#181b1f] w-full outline-none font-bold"
          placeholder="Enter title.."
        />
        <div className="w-full border border-white rounded-lg">
          <div className="p-2 flex flex-col gap-1">
            <input
              className=" bg-[#181b1f] w-full focus:outline-none font-bold"
              placeholder="Task name"
            />
            <textarea
              className="bg-[#181b1f] w-full h-10 focus:outline-none resize-none"
              placeholder="Description"
            />
          </div>
          <hr />
          <div className="flex items-center">
            <div className="w-1/2">
              <div className="p-4">hello</div>
            </div>
            <div className="w-1/2 flex justify-end p-4 gap-3">
              <button className="p-2 bg-[#24292e] rounded-md">cancel</button>
              <button
                className="bg-[#ff5b00] opacity-50 p-2 rounded-md"
                disabled
              >
                add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
