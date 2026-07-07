import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "../data/translations";

import {
  FaRoad,
  FaTint,
  FaBolt,
  FaTrash,
  FaLightbulb,
  FaBoxOpen,
} from "react-icons/fa";

// Categories are defined outside the component to avoid recreating
// the array on every render.
const categories = [
  {
    key: "roads",
    icon: <FaRoad size={22} />,
  },
  {
    key: "water",
    icon: <FaTint size={22} />,
  },
  {
    key: "electricity",
    icon: <FaBolt size={22} />,
  },
  {
    key: "garbage",
    icon: <FaTrash size={22} />,
  },
  {
    key: "streetLights",
    icon: <FaLightbulb size={22} />,
  },
  {
    key: "others",
    icon: <FaBoxOpen size={22} />,
  },
];

function Category() {
  const navigate = useNavigate();

  // Restore the user's previously selected language, or default to English.
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const [selectedCategory, setSelectedCategory] = useState("");

  const t = translations[language];

  // Persist the selected language so it remains after page refresh.
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">
            🌐 {t.appName}
          </h1>

          <button
            onClick={() =>
              setLanguage(language === "en" ? "mr" : "en")
            }
            className="border rounded-lg px-3 py-1 hover:bg-gray-100 transition"
          >
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div>

        <h2 className="text-2xl font-bold mt-8">
          {t.reportIssue}
        </h2>

        <p className="text-gray-500 mt-2">
          {t.subtitle}
        </p>

        <h3 className="mt-8 font-semibold text-lg">
          {t.chooseCategory}
        </h3>

        <div className="mt-5 space-y-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                selectedCategory === category.key
                  ? "bg-blue-600 text-white border-blue-600 shadow-xl scale-105"
                  : "bg-white hover:bg-blue-50 hover:shadow-md"
              }`}
            >
              <div
                className={`text-2xl ${
                  selectedCategory === category.key
                    ? "text-white"
                    : "text-blue-600"
                }`}
              >
                {category.icon}
              </div>

              <span className="font-semibold text-lg">
                {t[category.key]}
              </span>
            </button>
          ))}
        </div>

        <button
          disabled={!selectedCategory}
          onClick={() =>
            // Pass the selected category to the Details page using route state.
            navigate("/details", {
              state: {
                category: selectedCategory,
              },
            })
          }
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-bold shadow-lg transition duration-300"
        >
          {t.continue}
        </button>

      </div>
    </div>
  );
}

export default Category;