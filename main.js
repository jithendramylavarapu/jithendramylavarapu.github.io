const content = {
  hero: {
    title: "Translating business, policy, and data into practical outcomes.",
    subtitle:
      "BBA student and aspiring management consultant focusing on retail, public policy, and analytics-driven problem solving.",
  },
  about: {
    heading: "Bridging management education with real-world impact.",
    body:
      "Currently pursuing a BBA, with strong interests in the  FMCG retail industry, business analytics, and Indian public policy. I apply structured problem-solving through internships, case work, and content creation, where I break down policies and economic developments into clear, real-world business insights. My goal is to bridge data-driven analysis with an understanding of on-ground realities.",
    focusAreas: [
      "Retail management and merchandising",
      "Public policy and governance (AP/TS focus)",
      "Business analytics and decision-making",
      "Content creation for business education",
    ],
    roles: [
      "Purchase Intern, VIT, Vellore",
      "BBA student, 3rd year",
      "Content creator (YouTube, Instagram)",
    ],
  },
 timeline: [
  {
    period: "Jul 2025 – Present",
    title: "Purchase Department Intern – Vellore Institute of Technology (VIT)",
    location: "Vellore, Tamil Nadu",
    description:
      "Processed an average of 10 purchase orders within two hours, improving procurement efficiency and supporting day-to-day purchasing operations within the university.",
  },
  {
    period: "May 2025 – Jun 2025",
    title: "Management Trainee Intern (Operations) – Reliance Smart Point, Reliance Retail",
    location: "Vellore, Tamil Nadu",
    description:
      "Worked on store operations and pricing execution, managing markdown prices worth over ₹2 lakh to reduce cost inefficiencies. Assisted in 10+ inbound logistics and purchase activities, ensuring smooth daily retail operations.",
  },
  {
    period: "May 2024 – May 2025",
    title: "Startup Trainee – Institution of Innovation Council (IIC)",
    location: "Academic & Industry Exposure",
    description:
      "Engaged with 20+ industry experts to understand startup incubation and entrepreneurship ecosystems. Analyzed investment landscapes and identified high-value prospects for potential funding opportunities.",
  },
  {
    period: "Aug 2023 – Mar 2024",
    title: "R&D Intern – Flixdin Pvt. Ltd.",
    location: "VIT, Vellore",
    description:
      "Supported research and market analysis efforts by identifying potential investors and contributing to early-stage business development initiatives.",
  },
  {
    period: "2023 – Present",
    title: "Bachelor of Business Administration (BBA)",
    location: "Vellore Institute of Technology, Vellore",
    description:
      "Pursuing a BBA with interests in the retail industry, business analytics, and public policy, building a strong foundation through coursework, case studies, internships, and policy-focused content creation.",
  },


  ],//add projects here 
  projects: [
    {
      type: "Policy & economics",
      title: "AP/TS public policy explainer series",
      meta: "YouTube + Instagram",
      body:
        "Short-form content breaking down state-level schemes, economic trends, and their impact on youth and employment.",
      linkLabel: "View playlist",
      linkUrl: "https://www.youtube.com/@JithendraMylavarapu",
    },

  ],
  blog: [
  {
    category: "Insight",
    title: "Why 2025 Is the Year Supply Chains Chose Survival Over Innovation",
    meta: "Supply Chain · Strategy · Operations",
    body:
      "An analysis of how tariffs reshaped global supply chains, paused digital transformation, and made inventory the preferred survival strategy in 2025.",
    linkLabel: "Read Blog",
    linkUrl: "why-2025-supply-chains-chose-survival.html",
  },

    {
  category: "Policy Insight",
  title: "Will Andhra Pradesh’s Neighbourhood Workspace Policy Really Work?",
  meta: "Public Policy · Employment · Infrastructure",
  body:
    "A ground-level reality check on Andhra Pradesh’s Neighbourhood Workspace Policy—examining incentives, mandal-level economics, and whether decentralized workspaces can scale sustainably beyond metros.",
  linkLabel: "Read Blog",
  linkUrl: "blog-ap-neighbourhood-workspace-policy.html",
},


  ],
 certifications: [
  {
    provider: "University of Illinois",
    title: "Business Strategy",
    year: "2024",
    body:
      "Developed a structured understanding of competitive strategy, value creation, and strategic decision-making frameworks used in real-world business scenarios.",
  },
  {
    provider: "IBM",
    title: "SQL for Data Analysis",
    year: "2024",
    body:
      "Gained hands-on experience in writing SQL queries for data extraction, analysis, and reporting to support data-driven business decisions.",
  },
  {
    provider: "Atlassian University",
    title: "Agile with Atlassian Jira",
    year: "2024",
    body:
      "Learned Agile principles and practical application of Jira for sprint planning, workflow management, and cross-functional team collaboration.",
  },

  ],
  contact: {
    intro:
      "Open to conversations about internships, early consulting roles, content collaborations, and policy-focused projects.",
    links: [
      {
        label: "Email",
        href: "jithendramylavarapu@gmail.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@JithendraMylavarapu",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/",
      },
    ],
  },
};

// ----- Render -----

function renderHero() {
  document.getElementById("hero-title").textContent = content.hero.title;
  document.getElementById("hero-subtitle").textContent = content.hero.subtitle;
}

function renderAbout() {
  document.getElementById("about-heading").textContent = content.about.heading;
  document.getElementById("about-body").textContent = content.about.body;

  const focusList = document.getElementById("about-focus-list");
  focusList.innerHTML = "";
  content.about.focusAreas.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    focusList.appendChild(li);
  });

  const rolesList = document.getElementById("about-roles-list");
  rolesList.innerHTML = "";
  content.about.roles.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    rolesList.appendChild(li);
  });
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  container.innerHTML = "";
  content.timeline.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "timeline-item";
    wrapper.innerHTML = `
      <div class="timeline-meta">${item.period} · ${item.location}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-body">${item.description}</div>
    `;
    container.appendChild(wrapper);
  });
}

function createCard(item, options = {}) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-eyebrow">${options.eyebrow || ""}</div>
    <div class="card-title">${item.title}</div>
    ${item.meta ? `<div class="card-meta">${item.meta}</div>` : ""}
    <div class="card-body">${item.body}</div>
    ${
      item.linkUrl
        ? `<div class="card-footer">
            <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer">
              ${item.linkLabel || "Learn more"}
            </a>
          </div>`
        : ""
    }
  `;
  return card;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";
  content.projects.forEach((project) => {
    const card = createCard(
      {
        title: project.title,
        meta: project.meta,
        body: project.body,
        linkUrl: project.linkUrl,
        linkLabel: project.linkLabel,
      },
      { eyebrow: project.type }
    );
    grid.appendChild(card);
  });
}

function renderBlog() {
  const grid = document.getElementById("blog-list");
  grid.innerHTML = "";
  content.blog.forEach((post) => {
    const card = createCard(
      {
        title: post.title,
        meta: post.meta,
        body: post.body,
        linkUrl: post.linkUrl,
        linkLabel: post.linkLabel,
      },
      { eyebrow: post.category }
    );
    grid.appendChild(card);
  });
}

function renderCertifications() {
  const grid = document.getElementById("certifications-list");
  grid.innerHTML = "";
  content.certifications.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-eyebrow">${cert.provider}</div>
      <div class="card-title">${cert.title}</div>
      <div class="card-meta">${cert.year}</div>
      <div class="card-body">${cert.body}</div>
    `;
    grid.appendChild(card);
  });
}

function renderContact() {
  document.getElementById("contact-intro").textContent = content.contact.intro;
  const list = document.getElementById("contact-links");
  list.innerHTML = "";
  content.contact.links.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
    list.appendChild(li);
  });
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("hero-title")) renderHero();
  if (document.getElementById("about-heading")) renderAbout();
  if (document.getElementById("timeline-list")) renderTimeline();
  if (document.getElementById("projects-grid")) renderProjects();
  if (document.getElementById("blog-list")) renderBlog();
  if (document.getElementById("certifications-list")) renderCertifications();
  if (document.getElementById("contact-intro")) renderContact();
  if (document.getElementById("year")) setYear();
});



// About page scroll animation
const aboutBlocks = document.querySelectorAll(".about-block");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

aboutBlocks.forEach((block) => observer.observe(block));



