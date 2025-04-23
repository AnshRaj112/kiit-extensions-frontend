import { Download } from "lucide-react";
import React from "react";

interface VideoFlyerProps {
  videoId: string;
  title?: string;
  brochureUrl?: string;
}

const VideoFlyer: React.FC<VideoFlyerProps> = ({
  videoId = "nrv_W1XA3KQ",
}) => {
  const extractVideoId = (id: string) => {
    if (id.includes("youtube.com") || id.includes("youtu.be")) {
      if (id.includes("youtu.be")) {
        const parts = id.split("/");
        return parts[parts.length - 1].split("?")[0];
      }
      const urlParams = new URLSearchParams(id.split("?")[1]);
      return urlParams.get("v") || id;
    }
    return id;
  };

  const cleanVideoId = extractVideoId(videoId);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="rounded-lg overflow-hidden shadow-xl">
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 pt-16 pb-8 px-8">
          {/* <h1 className="text-white text-center text-7xl font-bold tracking-wider mb-6">
            YOUTUBE
          </h1> */}

          {/* YouTube Embed */}
          <div className="video-wrapper mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${cleanVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Program Overview section */}
          {/* <div className="bg-red-600 text-white p-4 text-center">
            <p className="text-sm mb-1">Link for</p>
            <h2 className="text-3xl font-semibold">{title}</h2>
          </div> */}

          {/* Photoshop-like logo in the corner */}
          {/* <div className="absolute bottom-4 left-4 bg-blue-900 text-white text-xs p-1 border border-white">
            <span className="font-bold">Ps</span>
          </div> */}
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <a
          href="https://drive.google.com/uc?export=download&id=1kR29Qg-dVr9CN5kO3t_W9ZJsKQYTur4L"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-all shadow-md"
        >
          <Download size={20} />
          Download Brochure
        </a>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default VideoFlyer;
