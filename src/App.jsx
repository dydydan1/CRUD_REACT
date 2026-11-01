import { Link } from "react-router-dom";
import FaqChatbot from "./components/faqChatbot/faqChatbot";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <Link
            to="/"
            className="text-lg font-semibold tracking-tight"
          >
            Tasksy
          </Link>

          <div className="flex items-center gap-7 text-sm">
            <Link
              to="/"
              className="text-white"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="text-gray-400 transition hover:text-white"
            >
              Login
            </Link>
          </div>

        </div>
      </nav>


      {/* Main */}
      <main>

        {/* Hero */}
        <section className="mx-auto flex max-w-6xl flex-col px-6 py-28 md:py-36">

          <p className="mb-5 text-sm text-gray-500">
            Task Management Application
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Keep your tasks
            <br />
            <span className="text-gray-400">
              organized and simple.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
            A simple Todo List application built to help you create,
            manage, update, and keep track of your daily tasks.
          </p>

          <div className="mt-9">
            <Link
              to="/login"
              className="inline-block border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Get Started
            </Link>
          </div>

        </section>


        {/* About */}
        <section className="border-t border-[#222]">

          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">
                About the app
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Everything you need for your daily tasks.
              </h2>
            </div>

            <div className="text-sm leading-7 text-gray-500">
              <p>
                Todo List gives you a straightforward way to organize
                the things you need to get done. Create tasks, update
                their information, and manage your list from one place.
              </p>

              <p className="mt-5">
                The application also uses user authentication so your
                tasks remain connected to your own account.
              </p>
            </div>

          </div>

        </section>


        {/* Features */}
        <section className="border-t border-[#222]">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <p className="text-sm text-gray-500">
              Features
            </p>

            <div className="mt-8 grid border-l border-t border-[#222] md:grid-cols-3">

              <div className="border-b border-r border-[#222] p-7">
                <p className="text-sm text-gray-500">
                  01
                </p>

                <h3 className="mt-8 text-lg font-medium">
                  Create Tasks
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Add tasks and keep your daily responsibilities
                  organized in one place.
                </p>
              </div>


              <div className="border-b border-r border-[#222] p-7">
                <p className="text-sm text-gray-500">
                  02
                </p>

                <h3 className="mt-8 text-lg font-medium">
                  Update Tasks
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Edit your task information whenever something
                  needs to change.
                </p>
              </div>


              <div className="border-b border-r border-[#222] p-7">
                <p className="text-sm text-gray-500">
                  03
                </p>

                <h3 className="mt-8 text-lg font-medium">
                  Manage Your List
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Keep your task list clean by managing completed
                  and unnecessary tasks.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Technology */}
        <section className="border-t border-[#222]">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <p className="text-sm text-gray-500">
              Built with
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">

              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>REST API</span>

            </div>

          </div>

        </section>


        {/* Bottom CTA */}
        <section className="border-t border-[#222]">

          <div className="mx-auto max-w-6xl px-6 py-24">

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to organize your tasks?
            </h2>

            <Link
              to="/login"
              className="mt-7 inline-block border border-[#444] px-6 py-3 text-sm text-white transition hover:border-white"
            >
              Go to Login
            </Link>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="border-t border-[#222]">
  <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8">
    <p className="text-xs text-gray-600">
      Developed by{" "}
      <span className="text-gray-400">
        Dy Ann Razonado
      </span>
    </p>
  </div>
</footer>

      <FaqChatbot />
    </div>
  );
}

export default App;