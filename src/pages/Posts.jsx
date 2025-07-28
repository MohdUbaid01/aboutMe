import { useState, useEffect } from "react";

export default function Posts() {
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    const base = "will update it soon...";
    let i = 0;
    let forward = true;
    let timeout;

    function type() {
      if (forward) {
        setLoadingText(base.slice(0, i + 1));
        i++;
        if (i > base.length) {
          forward = false;
          timeout = setTimeout(type, 1000); // pause before erasing
          return;
        }
      } else {
        setLoadingText(base.slice(0, i - 1));
        i--;
        if (i < 0) {
          forward = true;
          i = 0;
          timeout = setTimeout(type, 600); // pause before typing again
          return;
        }
      }
      timeout = setTimeout(type, 60); // smoother, faster transition
    }

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="space-y-6 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900">/_posts</h1>

      <p className="text-gray-700">
        <em className="block font-mono text-gray-500 not-italic mt-2 transition-all duration-300">
          {loadingText}
          <span className="border-r-2 border-gray-400 animate-pulse ml-1" />
        </em>
      </p>
    </div>
  );
}
