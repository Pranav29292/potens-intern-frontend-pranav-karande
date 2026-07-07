import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSpeech from "../hooks/useSpeech";
import { translations } from "../data/translations";

function Details() {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely access the selected category in case the page is opened directly.
  const category = location.state?.category || "Not Selected";

  // Restore the user's preferred language from localStorage.
  const language = localStorage.getItem("language") || "en";
  const t = translations[language];

  // Configure speech recognition using the currently selected language.
  const { text, setText, startListening } = useSpeech(language);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [descriptionError, setDescriptionError] = useState("");
  const [imageError, setImageError] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setImage(file);
    setImageError("");

    const reader = new FileReader();

    // Convert the uploaded image into a Base64 string so it can be
    // stored and displayed from localStorage.
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    let valid = true;

    setDescriptionError("");
    setImageError("");

    if (!text.trim()) {
      setDescriptionError("Please describe the issue.");
      valid = false;
    }

    if (!image) {
      setImageError("Please upload an image.");
      valid = false;
    }

    if (!valid) return;

    const complaint = {
      id: Date.now(),
      category,
      description: text,
      image: imagePreview,
      date: new Date().toLocaleString(),
    };

    // Keep all submitted complaints instead of replacing the previous one.
    const existingComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    existingComplaints.push(complaint);

    localStorage.setItem(
      "complaints",
      JSON.stringify(existingComplaints)
    );

    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6">

        <h1 className="text-3xl font-bold text-blue-600">
          {t.detailsTitle}
        </h1>

        <p className="mt-6 text-gray-600">
          {t.selectedCategory}
        </p>

        <div className="mt-2 bg-blue-100 p-3 rounded-xl font-semibold text-center">
          {t[category] || category}
        </div>

        <h2 className="mt-6 font-semibold">
          {t.describeIssue}
        </h2>

        <textarea
          rows="6"
          value={text}
          onChange={(e) => {
            setText(e.target.value);

            if (e.target.value.trim()) {
              setDescriptionError("");
            }
          }}
          placeholder={t.placeholder}
          className="w-full mt-3 border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {descriptionError && (
          <p className="text-red-600 text-sm mt-2">
            {descriptionError}
          </p>
        )}

        <button
          onClick={startListening}
          className="mt-4 w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-lg transition"
        >
          {t.voiceButton}
        </button>

        <h2 className="font-semibold text-xl text-center mt-6 mb-4">
          {t.uploadPhoto}
        </h2>

        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          onChange={handleImageUpload}
          className="hidden"
        />

        <label
          htmlFor="imageUpload"
          className="cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-blue-400 rounded-xl p-6 hover:bg-blue-50 transition"
        >
          {image ? "✅ Image Selected" : t.uploadButton}
        </label>

        {imageError && (
          <p className="text-red-600 text-sm text-center mt-2">
            {imageError}
          </p>
        )}

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-4 w-full h-56 object-cover rounded-xl border"
          />
        )}

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          {t.submit}
        </button>

      </div>
    </div>
  );
}

export default Details;