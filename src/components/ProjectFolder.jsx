import React, { useState, useEffect } from "react";

const colorMap = {
  indigo: {
    title: "text-indigo-400",
    tagBg: "bg-indigo-500/10",
    tagText: "text-indigo-500",
    buttonFancy: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg",
    folderBg: "bg-indigo-500/10",
    folderText: "text-indigo-400",
  },
  green: {
    title: "text-green-400",
    tagBg: "bg-green-500/10",
    tagText: "text-green-500",
    buttonFancy: "bg-gradient-to-r from-emerald-400 to-green-600 text-white shadow-lg",
    folderBg: "bg-green-500/10",
    folderText: "text-green-400",
  },
  pink: {
    title: "text-pink-400",
    tagBg: "bg-pink-500/10",
    tagText: "text-pink-500",
    buttonFancy: "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg",
    folderBg: "bg-pink-500/10",
    folderText: "text-pink-400",
  },
  blue: {
    title: "text-blue-400",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-500",
    buttonFancy: "bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg",
    folderBg: "bg-blue-500/10",
    folderText: "text-blue-400",
  },
};

const join = (parts) => parts.filter(Boolean).join(" ");

const ProjectFolder = ({ title, color = "indigo", image, description, bullets = [], techs = [] }) => {
  const [open, setOpen] = useState(false);
  const c = colorMap[color] || colorMap.indigo;

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="relative p-6 rounded-xl border border-white/10 transition hover:shadow-lg pb-14 overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <h3 className={join(["text-xl font-bold", c.title])}>{title}</h3>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm">{description}</p>

      <div className="flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <span key={i} className={join([c.tagBg, c.tagText, "py-1 px-3 rounded-full text-sm"])}>{tech}</span>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        aria-label={`View details for ${title}`}
        className={join(["absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full z-20 transform transition-transform duration-200 hover:scale-105", c.buttonFancy])}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 9.586V7z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-medium">View Details</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={() => setOpen(false)} />
            <div className="relative max-w-3xl w-full mx-4 z-60">
              <div className="w-full p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-neutral-900/30 border border-white/5 backdrop-blur-xl shadow-2xl relative">
                <div className="absolute top-4 right-4 z-60">
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close details"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600/60 to-purple-600/50 flex items-center justify-center text-white hover:scale-105 transition-shadow shadow-lg ring-1 ring-white/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col text-white">
                  <h4 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">{title}</h4>

                  <p className="text-gray-200/80 mb-4">{description}</p>

                  {bullets.length > 0 && (
                    <ul className="list-disc list-inside text-gray-300 mb-4">
                      {bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {techs.map((tech, i) => (
                      <span key={i} className={join([c.tagBg, c.tagText, "py-1 px-3 rounded-full text-sm"])}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ProjectFolder;
