import { Link, ReactNode } from "@tanstack/react-router";

type Main = {
  children: ReactNode;
};

export default function HeaderFooter({ children }: Main) {
  return (
    <main className="flex flex-col items-center">
      <header className="text-6xl p-4 max-w-[700px] w-full">
        <Link to="/" className="no-underline text-white">
          Kako započeti s web developmentom
        </Link>
      </header>
      {children}
      <footer className="text-6xl p-4 max-w-[700px] w-full">
        <a
          href="https://github.com/Ivo-Kovacevic/web-dev-101"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-white"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}
