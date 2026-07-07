import { useState } from "react";

function useSpeech(language) {

    const [text, setText] = useState("");

    const startListening = () => {

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Speech Recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = language === "mr" ? "mr-IN" : "en-IN";
        recognition.interimResults = false;
        recognition.continuous = false;

        recognition.onresult = (event) => {

            const transcript = event.results[0][0].transcript;

            setText((prev) =>
                prev ? prev + " " + transcript : transcript
            );
        };

        recognition.start();
    };

    return {
        text,
        setText,
        startListening,
    };
}

export default useSpeech;