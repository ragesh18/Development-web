const members = {
  1: {
    name: "Ragesh",
    role: "Founder / Leader",
    photo: "logo.png",
    skills: ["Web Expoliotation", "Cryptography" ,"Forensics"],
    projects: ["Project 1"],
    bio: "Write about yourself...",
    social: {
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username",
      website: "https://username.com",
      email: "mailto:username@email.com"
    }
  },
  2: {
    name: "T S Minha Fathim",
    role: "Co-Leader",
    photo: "images/member2.jpg",
    skills: ["Cryptography", "Web Security"],
    projects: ["Project 2"],
    bio: "Write about yourself...",
    social: {
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username",
      website: "https://username.com",
      email: "mailto:username@email.com"
    }
  },
  3: {
    name: "member3",
    role: "Malware Analyst",
    photo: "images/member3.jpg",
    skills: ["Malware Analysis", "Sandboxing"],
    projects: ["Malware Research"],
    bio: "Write about yourself...",
    social: {
      linkedin: "#",
      github: "#",
      website: "#",
      email: "mailto:example@mail.com"
    }
  },
  4: {
    name: "member4",
    role: "Network Security",
    photo: "images/member4.jpg",
    skills: ["Network Defense", "IDS/IPS"],
    projects: ["SOC Automation"],
    bio: "Write about yourself...",
    social: {
      linkedin: "#",
      github: "#",
      website: "#",
      email: "mailto:example@mail.com"
    }
  }
};

// Elements
const modal = document.getElementById("profile-overlay");
const photo = document.getElementById("profilePhoto");
const nameEl = document.getElementById("profileName");
const roleEl = document.getElementById("profileRole");
const skillsEl = document.getElementById("profileSkills");
const projectsEl = document.getElementById("profileProjects");
const bioEl = document.getElementById("profileBio");
const socialEl = document.getElementById("profileSocial");

// Card click
document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-member");
    const member = members[id];

    photo.src = member.photo;
    nameEl.textContent = member.name;
    roleEl.textContent = member.role;
    skillsEl.innerHTML = member.skills.map(s => `<li>${s}</li>`).join("");
    projectsEl.innerHTML = member.projects.map(p => `<li>${p}</li>`).join("");
    bioEl.textContent = member.bio;

    // Social Links with SVGs
    socialEl.innerHTML = `
      <a href="${member.social.linkedin}" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.37H4.8v13.62H.22V8.37zM7.59 8.37h4.38v1.86h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.98v8.16h-4.58v-7.23c0-1.73-.03-3.96-2.41-3.96-2.41 0-2.78 1.87-2.78 3.82v7.37H7.59V8.37z"/></svg>
        LinkedIn
      </a>
      <a href="${member.social.github}" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12c0 5.1 3.3 9.41 7.9 10.94.58.11.79-.25.79-.55v-2.05c-3.22.7-3.89-1.55-3.89-1.55-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.75-1.55-2.57-.29-5.27-1.28-5.27-5.72 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.46.12-3.05 0 0 .98-.31 3.2 1.19.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.64 1.59.24 2.76.12 3.05.75.82 1.2 1.86 1.2 3.13 0 4.46-2.71 5.42-5.29 5.71.42.36.8 1.07.8 2.16v3.2c0 .3.21.67.8.55 4.6-1.53 7.9-5.84 7.9-10.94C23.5 5.74 18.27.5 12 .5z"/></svg>
        GitHub
      </a>
      <a href="${member.social.website}" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.014 2 17.54 6.477 22 12 22s10-4.46 10-9.986C22 6.484 17.523 2 12 2zm0 2c1.657 0 3 3.582 3 8s-1.343 8-3 8-3-3.582-3-8 1.343-8 3-8z"/></svg>
        Website
      </a>
      <a href="${member.social.email}" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm10 9l10-7H2l10 7z"/></svg>
        Email
      </a>
    `;

    modal.style.display = "flex";
  });
});

function closeProfile() {
  modal.style.display = "none";
}

window.onclick = e => {
  if (e.target === modal) closeProfile();
};
