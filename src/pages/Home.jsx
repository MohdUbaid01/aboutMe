import { useState, useEffect } from "react";

export default function Home() {
  const text = "Hey, I'm Mohd Ubaid";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <nav className="w-full flex justify-center items-center min-h-screen bg-white">
      <div className="font-sans space-y-6 leading-relaxed max-w-2xl w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 flex flex-col items-start">
          <span>{displayed}</span>
          <span className="border-r-2 border-gray-900 animate-pulse ml-1" />
        </h1>
        <h2 className="font-mono text-lg text-gray-700 font-normal mt-1 mb-4 text-left">
          Just a programmer doing his things.
        </h2>

        <p className="text-gray-800 text-base">
          Hello, this site is a collection of my thoughts. I’ve kept it simple and minimal so you can focus on the content. I enjoy figuring out how things work, so I share what I learn along the way.
        </p>

        {/* Inspiration Section */}
        <h2 className="text-2xl font-semibold text-gray-900 pt-8">Inspiration</h2>
        <p className="text-gray-800 text-base">
          The people listed here have left a lasting impression on my thinking and
          continue to influence the way I approach things.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900">My Dad</h3>
          <p className="text-gray-800 text-base">
            My father has always supported me — emotionally and financially. He
            believed in me even when I didn’t believe in myself. His love,
            encouragement, and sacrifices have shaped who I am today. Everything
            I’ve been able to do so far is because he stood by me.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 pt-6">Kailash Nadh</h3>
          <p className="text-gray-600 text-base">Kailash Nadh (CTO, Zerodha)</p>
          <blockquote className="italic font-medium text-gray-800 border-l-4 border-gray-300 pl-4 my-3">
            An idiot admires complexity, a genius admires simplicity.
          </blockquote>
          <p className="text-gray-800 text-base">
            My software philosophy is deeply influenced by
            by Kailash Nadh. I strive for simplicity and always try to use the
            right tool for the right job.
          </p>
        </div>
      </div>
    </nav>
  );
}
