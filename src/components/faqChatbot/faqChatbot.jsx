import { useState } from "react";
import { ChevronDown, ChevronRight, MessageCircle, X } from "lucide-react";

const faqItems = [
  {
    question: "What is Tasksy?",
    answer:
      "Tasksy is a simple task management app that helps you create, update, and organize your daily tasks in one place.",
  },
  {
    question: "How do I start?",
    answer:
      "Select Get Started or Login, then create an account if you are new to Tasksy. Once signed in, you can begin adding tasks.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your tasks are associated with your account and are only available after you sign in. Tasksy uses authentication to keep each user's task list separate.",
  },
  {
    question: "Can I update a task?",
    answer:
      "Yes. Open a task from your list to edit its information, then save your changes to keep the list up to date.",
  },
];

function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [isQuestionOpen, setIsQuestionOpen] = useState(true);
  const [isAnswerOpen, setIsAnswerOpen] = useState(true);

  function handleQuestionClick(faq) {
    setSelectedFaq(faq);
    setIsQuestionOpen(true);
    setIsAnswerOpen(true);
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
      {isOpen && (
        <section
          aria-label="Tasksy frequently asked questions"
          className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden border border-[#333] bg-[#111] text-white shadow-2xl shadow-black/40"
        >
          <div className="flex items-start justify-between border-b border-[#2a2a2a] px-5 py-4">
            <div>
              <p className="text-sm font-medium">Tasksy help</p>
              <p className="mt-1 text-xs text-gray-500">
                Answers to common questions
              </p>
            </div>
            <span className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Online
            </span>
          </div>

          <div className="max-h-[min(28rem,60vh)] space-y-4 overflow-y-auto p-4">
            <div className="max-w-[90%] border border-[#292929] bg-[#191919] px-3.5 py-3 text-sm leading-6 text-gray-300">
              Hi! Choose a question below and I&apos;ll point you in the right
              direction.
            </div>

            {selectedFaq && (
              <div className="ml-auto max-w-[90%]">
                <div className="bg-white">
                  <button
                    type="button"
                    aria-expanded={isQuestionOpen}
                    aria-controls="faq-question"
                    onClick={() => setIsQuestionOpen((open) => !open)}
                    className="flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-xs font-medium text-gray-600 transition hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-black"
                  >
                    <span>
                      {isQuestionOpen ? "Hide question" : "Show question"}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 transition-transform ${
                        isQuestionOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isQuestionOpen && (
                    <p
                      id="faq-question"
                      className="border-t border-gray-200 px-3.5 py-3 text-sm leading-6 text-black"
                    >
                      {selectedFaq.question}
                    </p>
                  )}
                </div>
                <div className="mt-2 border border-[#292929] bg-[#191919]">
                  <button
                    type="button"
                    aria-expanded={isAnswerOpen}
                    aria-controls="faq-answer"
                    onClick={() => setIsAnswerOpen((open) => !open)}
                    className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs font-medium text-gray-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white"
                  >
                    <span>{isAnswerOpen ? "Hide answer" : "Show answer"}</span>
                    <ChevronDown
                      className={`size-4 transition-transform ${
                        isAnswerOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isAnswerOpen && (
                    <p
                      id="faq-answer"
                      className="border-t border-[#292929] px-3.5 py-3 text-sm leading-6 text-gray-300"
                    >
                      {selectedFaq.answer}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-2" aria-label="Frequently asked questions">
              {faqItems.map((faq) => (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => handleQuestionClick(faq)}
                  className="group flex w-full items-center justify-between border border-[#333] px-3.5 py-3 text-left text-sm text-gray-300 transition hover:border-gray-500 hover:text-white focus-visible:border-white focus-visible:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className="size-4 shrink-0 text-gray-600 transition group-hover:text-white" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Tasksy help" : "Open Tasksy help"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-14 items-center justify-center rounded-full border border-white bg-white text-black shadow-xl shadow-black/30 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export default FaqChatbot;
