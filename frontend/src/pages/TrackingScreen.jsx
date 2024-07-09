import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const TrackingScreen = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("speed");
  const [speed, setSpeed] = useState(query ? decodeURIComponent(query) : 1);

  const timer = useRef(120 * 60);
  const [time, setTime] = useState(new Date());

  const [quote, setQuote] = useState("Happiness seems made to be shared.");
  const [author, setAuthor] = useState("Pierre Corneille");

  const [secondsAngle, setSecondsAngle] = useState(6 * time.getSeconds());
  const [minutesAngle, setMinutesAngle] = useState(6 * time.getMinutes());
  const [hoursAngle, setHoursAngle] = useState(30 * time.getHours());

  // Fetch Quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=happiness",
        { headers: { "X-Api-Key": import.meta.env.VITE_API_NINJA } }
      );

      if (response.data) {
        setQuote(response.data[0].quote);
        setAuthor(response.data[0].author);
      }
    } catch (err) {
      toast.error("Something went wrong!!");
      console.log(err);
    }
  };

  // update time
  useEffect(() => {
    if (timer.current > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
        setSecondsAngle((prevAngle) => prevAngle - 6 * speed);
        setMinutesAngle((prevAngle) => prevAngle - (6 * speed) / 60);
        setHoursAngle((prevAngle) => prevAngle - (30 * speed) / 3600);
      }, 1000);

      const quoteInterval = setInterval(() => {
        fetchQuote();
      }, 5000);

      timer.current = timer.current - 1;

      return () => {
        clearInterval(interval);
        clearInterval(quoteInterval);
      };
    }
  }, [speed]);

  // handle share button
  const handleShare = async () => {
    const url = `https://gmt-assignment.vercel.app/tracking?speed=${speed}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard!");
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success("URL copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy the URL.");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="w-full md:w-[38%] h-[100vh] flex flex-col justify-start items-center bg-white gap-10 p-10 overflow-auto">
      <h5 className="text-[2rem] font-semibold text-black">Tracking Screen</h5>

      {/* Clock */}
      <div className="w-full flex justify-center items-center">
        <div className="relative w-64 h-64 border-2 border-lightgray bg-orange rounded-full flex justify-center items-center">
          <div className="w-[95%] h-[95%] border-2 rounded-full border-white"></div>
          <div className="absolute border-8 rounded-full border-white z-30 shadow-md shadow-lightgray "></div>
          <div
            className="absolute top-[5%] z-20 bg-darkgray w-1 h-28 origin-bottom rounded-full border border-lightgray shadow-md shadow-lightgray duration-1000 ease-in-out"
            style={{ transform: `rotate(${secondsAngle}deg)` }}
          ></div>
          <div
            className="absolute top-[11.5%] z-10 bg-white w-2 h-24 origin-bottom rounded-full border-2 border-lightgray shadow-md shadow-lightgray"
            style={{ transform: `rotate(${minutesAngle}deg)` }}
          ></div>
          <div
            className="absolute top-[18%] z-0 bg-white w-3 h-20 origin-bottom rounded-full border-2 border-lightgray shadow-md shadow-lightgray"
            style={{ transform: `rotate(${hoursAngle}deg)` }}
          ></div>
        </div>
      </div>

      {/* Slider */}
      <div className="flex flex-col items-start">
        <label htmlFor="speedSlider" className="mb-2 text-lightgray">
          Clock Speed: {speed}
        </label>
        <input
          id="speedSlider"
          type="range"
          min="1"
          step="1"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-64 accent-orange"
        />
      </div>

      {/* Share Button */}
      <button
        className="bg-orange text-white w-full p-4 rounded-full hover:scale-105"
        onClick={handleShare}
      >
        Share
      </button>

      {/* Quote */}
      {quote ? (
        <div className="w-full p-2 flex flex-col gap-4">
          <h6 className="text-xl font-semibold text-black">Quote :-</h6>
          <p className="text-[1rem] text-black">{`"${quote}"`}</p>
          <p className="text-[1rem] text-right font-semibold">{`- ${author}`}</p>
        </div>
      ) : null}
    </div>
  );
};

export default TrackingScreen;
