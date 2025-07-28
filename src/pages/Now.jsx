export default function Now() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Now</h1>
      <p className="text-gray-500 mb-6">Here's what I'm up to right now</p>

      <div className="space-y-5">
        <div>
          <h2 className="font-semibold text-lg text-black">Reading</h2>
          <p className="text-gray-800">The Pragmatic Programmer by Andy Hunt & Dave Thomas</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg text-black">Watching</h2>
          <p className="text-gray-800">Silicon Valley (TV Series)</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg text-black">Playing</h2>
          <p className="text-gray-800">Valorant (occasionally)</p>
        </div>
      </div>
    </div>
  );
}
