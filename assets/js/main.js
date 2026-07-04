/* SNYPE HOCKEY pilot site — small, dependency-free interactions. */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Waitlist form ---------- */
  var form = document.getElementById("waitlist-form");
  var note = document.getElementById("form-note");
  var CONTACT = "hello@neuropuck.ai"; // TODO: swap for the real inbox before going live
  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("email");
      var email = (input.value || "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!valid) {
        note.textContent = "Please enter a valid email address.";
        note.className = "form-note err";
        input.focus();
        return;
      }
      // No backend on the pilot: acknowledge, then open a pre-filled email as the handoff.
      note.textContent = "Thanks! Opening your email app to finish — or write us directly.";
      note.className = "form-note ok";
      form.reset();
      var subject = encodeURIComponent("SNYPE HOCKEY — waitlist");
      var body = encodeURIComponent(
        "Hi NEUROPUCK team,\n\nPlease add me to the SNYPE HOCKEY waitlist.\n\nEmail: " + email + "\n"
      );
      window.location.href = "mailto:" + CONTACT + "?subject=" + subject + "&body=" + body;
    });
  }
})();
