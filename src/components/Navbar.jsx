
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  ListTodo,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-(--border) bg-(--card)">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--primary) text-white">
            <ListTodo size={20} />
          </div>

          <span className="text-lg font-bold">
            TaskFlow
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">

          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-(--background)"
          >
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          <Link
            to="/tasklists"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-(--background)"
          >
            <ListTodo size={17} />
            TaskLists
          </Link>

          

          {/* <Link
            to="/settings"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-(--background)"
          >
            <Settings size={17} />
            Settings
          </Link> */}

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          <ThemeToggle />

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--background) transition hover:opacity-80"
          >
            <User size={18} />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) md:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-(--border) md:hidden">
          <div className="space-y-1 p-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-(--background)"
            >
              <LayoutDashboard size={19} />
              Dashboard
            </Link>

            <Link
              to="/tasklists"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-(--background)"
            >
              <ListTodo size={19} />
              TaskLists
            </Link>

            {/* <Link
              to="/progress"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-(--background)"
            >
              <BarChart3 size={19} />
              Progress
            </Link> */}

            <Link
              to="/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-(--background)"
            >
              <Settings size={19} />
              Settings
            </Link>

            <div className="my-2 border-t border-(--border)" />

            {/* Mobile Theme */}
            <div className="flex items-center justify-between rounded-lg px-4 py-3">

              <ThemeToggle />
            </div>

            {/* Mobile Profile */}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-(--background)"
            >
              <User size={19} />
              Profile
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


