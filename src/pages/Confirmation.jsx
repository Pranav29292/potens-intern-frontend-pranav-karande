import { useNavigate } from "react-router-dom";
import { translations } from "../data/translations";

function Confirmation() {
  const navigate = useNavigate();

  // Restore the previously selected language from localStorage.
  const language = localStorage.getItem("language") || "en";
  const t = translations[language];

  // Retrieve all stored complaints and display the most recent one.
  const complaints =
    JSON.parse(localStorage.getItem("complaints")) || [];

  const complaint = complaints[complaints.length - 1];

  // Handle direct navigation when no complaint has been submitted.
  if (!complaint) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold text-red-600">
          No Complaint Found
        </h1>
      </div>
    );
  }

  const handleBackHome = () => {
    // Return the user to the top before starting a new complaint.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6">

        <div className="text-center">
          <div className="text-6xl">✅</div>

          <h1 className="text-3xl font-bold text-green-600 mt-4">
            {t.confirmationTitle}
          </h1>

          <p className="text-gray-500 mt-2">
            {t.confirmationSubtitle}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold">
            {t.referenceId}
          </h2>

          <p className="bg-gray-100 p-3 rounded-xl mt-2">
            CC-{complaint.id}
          </p>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold">
            {t.selectedCategory}
          </h2>

          <p className="bg-gray-100 p-3 rounded-xl mt-2">
            {complaint.category}
          </p>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold">
            {t.submittedOn}
          </h2>

          <p className="bg-gray-100 p-3 rounded-xl mt-2">
            {complaint.date}
          </p>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold">
            {t.description}
          </h2>

          <p className="bg-gray-100 p-3 rounded-xl mt-2">
            {complaint.description}
          </p>
        </div>

        {complaint.image && (
          <div className="mt-5">
            <h2 className="font-semibold mb-2">
              {t.uploadPhoto}
            </h2>

            <img
              src={complaint.image}
              alt="Complaint"
              className="w-full rounded-xl border"
            />
          </div>
        )}

        <button
          onClick={handleBackHome}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {t.backHome}
        </button>

      </div>
    </div>
  );
}

export default Confirmation;