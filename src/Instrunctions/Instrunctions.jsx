import Button from "@mui/material/Button";
export default function Instruction({ mode, language }) {
  let time =
    mode === "Easy"
      ? "5 Minutes"
      : mode === "intermediate"
      ? "10 Minutes"
      : "No Time Limit";
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="bg-gradient-to-b from-white to-gray-100 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
              SKILL QUIZ
            </h1>
            <div className="bg-white rounded-lg px-6 py-3 shadow-inner">
              <p className="text-lg mb-3">
                <span className="font-semibold text-gray-700">
                  Selected Quiz Topic:
                </span>{" "}
                <span className="text-purple-700">{language}</span>
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold text-gray-700">
                  Selected Quiz Mode:
                </span>{" "}
                <span className="text-purple-700">{mode}</span>
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold text-gray-700">
                  Total Questions:
                </span>{" "}
                <span className="text-purple-700">10</span>
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold text-gray-700">
                  Score in Total:
                </span>{" "}
                <span className="text-purple-700">100</span>
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold text-gray-700">Total Time:</span>{" "}
                <span className="text-purple-700">{time}</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              variant="contained"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              size="large"
              style={{
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                padding: "12px 60px",
                borderRadius: "9999px",
              }}
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
