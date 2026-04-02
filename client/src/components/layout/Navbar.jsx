"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAdminLogged(!!token);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAdminLogged(false);
    router.push("/");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Stories", path: "/stories" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Transparency", path: "/transparency" },
    { name: "80G", path: "/80g-certificate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`nav-main${scrolled ? " scrolled" : ""}`}>
      <div className="nav-wrap">

        {/* LOGO */}
        <Link href="/" className="nav-logo">
          <img src="/images/IMG-20260227-WA0016 (1) - Copy.jpg" alt="logo" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          {links.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname === link.path || pathname.startsWith(link.path + "/");
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.name}
                <span className="underline"></span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-actions">
          {isAdminLogged ? (
            <>
              <Link href="/admin/dashboard" className="nav-btn">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="nav-btn outline">
                Logout
              </button>
            </>
          ) : (
            <Link href="/donate" className="nav-btn">
              ❤️ Donate
            </Link>
          )}
        </div>

        {/* HAMBURGER */}
        <div
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`nav-mobile ${menuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setMenuOpen(false)}
            className={`nav-mobile-link ${
            (link.path === "/" ? pathname === "/" : pathname === link.path || pathname.startsWith(link.path + "/"))
              ? "active" : ""
          }`}
          >
            {link.name}
          </Link>
        ))}

        {isAdminLogged ? (
          <>
            <Link href="/admin/dashboard" className="nav-btn mobile">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="nav-btn outline mobile">
              Logout
            </button>
          </>
        ) : (
          <Link href="/donate" className="nav-btn mobile">
            ❤️ Donate
          </Link>
        )}
      </div>
    </nav>
  );
}
