/*
  Site logic. You normally don't need to edit this file:
  text lives in data/texts.js and projects in data/projects.js.
*/
(function () {
  "use strict";

  var TEXTS = window.TEXTS;
  var PROJECTS = window.PROJECTS.filter(function (p) { return !p.hidden; });
  var LINKS = window.LINKS;
  var page = document.body.getAttribute("data-page");
  var lang = pickLanguage();
  var activeFilter = "all";

  /* ---------- Language ---------- */

  function pickLanguage() {
    // 1. ?lang=es in the address  2. visitor's last choice  3. browser language
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "es") return fromUrl;
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "es") return saved;
    } catch (e) { /* storage blocked: ignore */ }
    return (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  function setLanguage(next) {
    lang = next;
    try { localStorage.setItem("lang", next); } catch (e) { /* ignore */ }
    render();
  }

  function t(key) { return TEXTS[lang][key]; }
  function tr(value) { return value && typeof value === "object" ? value[lang] : value; }

  /* ---------- Small helpers ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "class") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function externalLink(href, label, cls) {
    return el("a", { href: href, class: cls || "btn", target: "_blank", rel: "noopener", text: label });
  }

  function media(project, cls) {
    var box = el("div", { class: "media " + (cls || "") });
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (project.video) {
      // Looping, silent clip that behaves like a GIF. The image is shown while it loads.
      var v = el("video", { src: project.video, loop: "", playsinline: "", preload: "metadata", "aria-label": project.title });
      if (project.image) v.poster = project.image;
      v.muted = true;
      if (reduceMotion) v.controls = true; else v.autoplay = true;
      box.appendChild(v);
    } else if (project.image) {
      box.appendChild(el("img", { src: project.image, alt: project.title, loading: "lazy" }));
    } else {
      box.classList.add("is-missing");
      box.appendChild(el("span", { text: t("imagePending") }));
    }
    return box;
  }

  function tags(list, inProgress) {
    var items = list.filter(Boolean).map(function (x) { return el("li", { text: x }); });
    if (inProgress) items.unshift(el("li", { class: "tag-wip", text: t("inProgress") }));
    return el("ul", { class: "tags" }, items);
  }

  function projectUrl(p) { return "project.html?id=" + encodeURIComponent(p.id); }

  /* ---------- Shared parts ---------- */

  function renderShared() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n"));
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    document.querySelectorAll(".cv-link").forEach(function (a) { a.href = LINKS.cv[lang]; });

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- Home page ---------- */

  function renderHome() {
    document.title = t("metaTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = t("metaDescription");

    // Featured project
    var f = PROJECTS.filter(function (p) { return p.featured; })[0];
    var featured = document.querySelector(".featured");
    featured.innerHTML = "";
    if (f) {
      var fActions = el("div", { class: "actions" }, [
        f.links.play ? externalLink(f.links.play, t("btnPlay"), "btn btn-primary") : null,
        el("a", { href: projectUrl(f), class: "btn", text: t("btnDetails") }),
        f.links.code ? externalLink(f.links.code, t("btnCode"), "btn btn-quiet") : null
      ]);
      featured.appendChild(media(f, "media-large"));
      featured.appendChild(el("div", { class: "featured-text" }, [
        tags(t("featuredTags").concat([f.engine, f.language])),
        el("h2", { text: f.title }),
        el("p", { class: "lead", text: tr(f.summary) }),
        fActions
      ]));
    }

    // Other projects
    var list = document.getElementById("project-list");
    list.innerHTML = "";
    PROJECTS.filter(function (p) { return !p.featured; }).forEach(function (p) {
      var item = el("li", { class: "project", "data-filter": p.filter }, [
        el("a", { href: projectUrl(p), class: "project-thumb", "aria-hidden": "true", tabindex: "-1" }, [media(p)]),
        el("div", { class: "project-body" }, [
          el("h3", {}, [el("a", { href: projectUrl(p), text: p.title })]),
          tags([p.engine, p.language, tr(p.team)], p.inProgress),
          el("p", { text: tr(p.summary) }),
          el("div", { class: "actions actions-small" }, [
            el("a", { href: projectUrl(p), class: "link", text: t("btnDetails") }),
            p.links.code ? externalLink(p.links.code, t("btnCode"), "link") : null,
            p.links.play ? externalLink(p.links.play, t("btnPlay"), "link") : null
          ])
        ])
      ]);
      list.appendChild(item);
    });
    applyFilter();

    // Hide filter buttons that would show nothing (e.g. no Godot projects yet)
    document.querySelectorAll("button[data-filter]").forEach(function (b) {
      var f = b.getAttribute("data-filter");
      b.hidden = f !== "all" && !PROJECTS.some(function (p) { return !p.featured && p.filter === f; });
    });

    // About
    var about = document.getElementById("about-body");
    about.innerHTML = "";
    t("aboutBody").forEach(function (para) { about.appendChild(el("p", { text: para })); });

    var skills = document.getElementById("skills");
    skills.innerHTML = "";
    t("skills").forEach(function (g) {
      skills.appendChild(el("div", {}, [
        el("dt", { text: g.group }),
        el("dd", {}, [tags(g.items)])
      ]));
    });

    // Contact
    var mail = document.getElementById("contact-email");
    mail.href = "mailto:" + LINKS.email;
    mail.textContent = LINKS.email;
    document.getElementById("contact-linkedin").href = LINKS.linkedin;
    var phone = document.getElementById("contact-phone");
    if (LINKS.phone) {
      phone.textContent = LINKS.phone;
      phone.href = "tel:" + LINKS.phone.replace(/\s+/g, "");
    } else {
      phone.parentElement.remove();
    }
    document.getElementById("contact-github").href = LINKS.github;
  }

  function applyFilter() {
    document.querySelectorAll("#project-list .project").forEach(function (item) {
      var show = activeFilter === "all" || item.getAttribute("data-filter") === activeFilter;
      item.hidden = !show;
    });
    document.querySelectorAll("[data-filter]").forEach(function (b) {
      if (b.tagName === "BUTTON") b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === activeFilter));
    });
  }

  /* ---------- Project page ---------- */

  function renderProject() {
    var id = new URLSearchParams(location.search).get("id");
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    var root = document.getElementById("project");
    root.innerHTML = "";

    if (!p) {
      document.title = "José Elguea";
      root.appendChild(el("p", { class: "lead", text: t("notFound") }));
      return;
    }
    document.title = p.title + " · José Elguea";

    var facts = el("dl", { class: "facts" }, [
      [t("factEngine"), p.engine], [t("factLanguage"), p.language],
      [t("factTeam"), tr(p.team)], [t("factRole"), tr(p.role)]
    ].map(function (pair) {
      return el("div", {}, [el("dt", { text: pair[0] }), el("dd", { text: pair[1] })]);
    }));

    var actions = el("div", { class: "actions" }, [
      p.links.play ? externalLink(p.links.play, t("btnPlay"), "btn btn-primary") : null,
      p.links.code ? externalLink(p.links.code, t("btnCode"), "btn") : null
    ]);

    var head = el("header", { class: "project-head" }, [
      p.inProgress ? tags([], true) : null,
      el("h1", { text: p.title }),
      el("p", { class: "lead", text: tr(p.summary) }),
      actions
    ]);

    var body = el("div", { class: "project-desc" }, tr(p.description).map(function (para) {
      return el("p", { text: para });
    }));

    root.appendChild(head);
    root.appendChild(media(p, "media-large"));

    // Extra images / videos
    if (p.gallery && p.gallery.length) {
      var gallery = el("div", { class: "gallery" });
      p.gallery.forEach(function (g) {
        if (g.youtube) {
          gallery.appendChild(el("div", { class: "media video" }, [el("iframe", {
            src: "https://www.youtube-nocookie.com/embed/" + g.youtube,
            title: p.title, allowfullscreen: "", loading: "lazy"
          })]));
        } else if (g.video) {
          var v = el("video", { src: g.video, controls: "", muted: "", playsinline: "", preload: "metadata" });
          gallery.appendChild(el("div", { class: "media" }, [v]));
        } else {
          gallery.appendChild(el("div", { class: "media" }, [el("img", { src: g, alt: p.title, loading: "lazy" })]));
        }
      });
      root.appendChild(gallery);
    }

    root.appendChild(el("div", { class: "project-info" }, [body, facts]));

    if (p.systems && p.systems.length) {
      var systems = el("ul", { class: "systems" }, p.systems.map(function (s) {
        return el("li", {}, [
          el("h3", { text: tr(s.title) }),
          el("p", { text: tr(s.text) }),
          s.code
            ? externalLink(s.code, t("codeLink"), "link")
            : el("span", { class: "pending", text: t("codePending") })
        ]);
      }));
      root.appendChild(el("section", { class: "systems-wrap", "aria-label": t("systemsTitle") }, [
        el("h2", { text: t("systemsTitle") }), systems
      ]));
    }
  }

  /* ---------- Light that follows the pointer in the hero ---------- */

  function setupHeroLight() {
    var hero = document.querySelector(".hero");
    if (!hero || !window.matchMedia("(pointer: fine)").matches) return;
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty("--lx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      hero.style.setProperty("--ly", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    });
  }

  /* ---------- Start ---------- */

  function render() {
    renderShared();
    if (page === "home") renderHome();
    if (page === "project") renderProject();
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLanguage(b.getAttribute("data-lang")); });
  });
  document.querySelectorAll("button[data-filter]").forEach(function (b) {
    b.addEventListener("click", function () { activeFilter = b.getAttribute("data-filter"); applyFilter(); });
  });

  render();
  setupHeroLight();
})();
