const POSTS_INDEX = [
  {
    slug: "brainstormrelease",
    title: "Brainstorm Post-Mortem",
    date: "2026-02-06",
    excerpt: "The Brainstorm update has been released! Read additional developer commentary, and see the changelog. Throw out the sunk with the seawater!",
    tags: ["announcement", "news"],
  },
    {
    slug: "brainstormtrailer",
    title: "Brainstorm comes out next Friday!",
    date: "2026-02-02",
    excerpt: "The Brainstorm update releases February 6th, 2026! Check out the trailer for it.",
    tags: ["announcement", "news"],
  },
  {
    slug: "christmas2025",
    title: "Christmas 2025 Newsletter",
    date: "2025-12-29",
    excerpt: "A round up of the year, and a new update announcement!",
    tags: ["announcement", "news"],
  },
];

// Add more entries to POSTS_INDEX above, keeping the newest releases first.

function parsePostContent(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: normalized };

  const [, rawMeta, content] = match;
  const meta = rawMeta.split("\n").reduce((acc, line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return acc;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    if (!value) return acc;

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((token) => token.trim())
        .filter(Boolean)
        .map((token) => {
          const first = token[0];
          const last = token[token.length - 1];
          return first === last && (first === '"' || first === "'")
            ? token.slice(1, -1)
            : token;
        });
    } else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    acc[key] = value;
    return acc;
  }, {});

  return { meta, content };
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const parsed = new Date(year, month - 1, day);
  if (Number.isNaN(parsed.getTime())) return dateString;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderPosts(container) {
  if (POSTS_INDEX.length === 0) {
    container.innerHTML =
      '<div class="no-posts">No posts yet. Check back soon!</div>';
    return;
  }

  const markup = POSTS_INDEX.slice(0, 1).map(
    (post) => `
        <a href="post.html?post=${post.slug}" class="post-card-link">
          <article class="post-card">
              <h3>${post.title}</h3>
              <div class="post-date">${formatDate(post.date)}</div>
              <p class="post-excerpt">${post.excerpt}</p>
              <span class="read-more">Read More</span>
          </article>
        </a>
    `
  ).join("");

  container.innerHTML = markup;
}

function renderPostCatalog(container) {
  if (POSTS_INDEX.length === 0) {
    container.innerHTML =
      '<li class="no-posts">No posts yet. Check back soon!</li>';
    return;
  }

  const markup = POSTS_INDEX.map(
    (post) => `
        <li class="post-catalog-item">
          <time class="post-catalog-date" datetime="${post.date}">${formatDate(
            post.date
          )}</time>
          <div class="post-catalog-details">
            <a href="post.html?post=${post.slug}" class="post-catalog-link">
              ${post.title}
            </a>
            <p class="post-catalog-excerpt">${post.excerpt}</p>
          </div>
        </li>
    `
  ).join("");

  container.innerHTML = markup;
}

function loadPosts() {
  const postsContainer = document.getElementById("posts-list");
  if (!postsContainer) return;
  renderPosts(postsContainer);
}

function loadPostCatalog() {
  const catalogContainer = document.getElementById("post-catalog");
  if (!catalogContainer) return;
  renderPostCatalog(catalogContainer);
}

function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav-links");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  loadPostCatalog();
  initMobileMenu();
});
