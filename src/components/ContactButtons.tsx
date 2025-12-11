import React from "react";

export default function ContactButtons() {
  const whatsappNumber = "919176012413"; // Replace with your number
  const whatsappMessage = "Hello! I have a question."; // Optional message
  const emailAddress = "sales@caresoft.in"; // Replace with your email

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.71 11.71 0 0 0 12 .25C5.59.25.25 5.59.25 12a11.6 11.6 0 0 0 1.5 5.6L0 24l6.6-1.75A11.61 11.61 0 0 0 12 23.75C18.41 23.75 23.75 18.41 23.75 12a11.71 11.71 0 0 0-3.23-8.52zm-8.5 18c-2 0-3.95-.55-5.65-1.58l-.4-.25-3.92 1.04 1.05-3.82-.27-.41A9.52 9.52 0 0 1 2.5 12C2.5 6.2 6.2 2.5 12 2.5s9.5 3.7 9.5 9.5-3.7 9.5-9.5 9.5zm5.22-7.72c-.28-.14-1.65-.82-1.9-.91-.25-.1-.43-.14-.61.14s-.7.91-.86 1.1c-.16.18-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.18.19-.3.28-.5.09-.2.05-.37-.02-.51-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.35s-.94.92-.94 2.25c0 1.33.96 2.62 1.09 2.8.14.18 1.88 2.95 4.56 4.14 3.08 1.38 3.08.92 3.63.86.56-.05 1.82-.74 2.08-1.46.26-.73.26-1.35.18-1.47-.07-.12-.25-.18-.53-.32z" />
        </svg>
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${emailAddress}`}
        className="bg-red-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M12 13.065l-11.992-7.065v16h24v-16l-12.008 7.065zm0-2.13l11.992-7.065h-23.984l11.992 7.065z" />
        </svg>
      </a>
    </div>
  );
}
