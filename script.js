// ========== AI SMART CAREER GUIDE : FINAL PROFESSIONAL ENGINE ==========

// ----------------------------
// 1. CAREER DATABASE
// ----------------------------
const CAREERS = [
  {
    id: "cs_software",
    name: "Computer Science & Software Development",
    stream: "Science (with Maths)",
    minMarks: 60,
    keywords: ["coding", "programming", "software", "developer", "app", "web", "computer", "ai"],
    subjects: ["Mathematics", "Computer Science", "English"],
    courses10: ["Diploma in Computer Engineering", "Web/App Development Certificate"],
    courses12India: ["B.Tech CSE", "BCA", "B.Sc Computer Science"],
    courses12Global: ["BSc Computer Science", "Software Engineering Degree"],
    examsIndia: ["JEE Main", "State Engineering Exams"],
    examsGlobal: ["SAT", "IELTS / TOEFL"],
    jobs: ["Software Developer", "Web/App Developer", "AI Engineer"],
    salaryIndia: "₹4L – ₹25L+ per year",
    salaryGlobal: "$60,000 – $200,000+ per year",
    futureScope: "Extremely high global demand in all industries.",
    tips: ["Learn Python or JavaScript", "Build projects", "Use GitHub"]
  },

  {
    id: "electrical",
    name: "Electrical Engineering / Electrician",
    stream: "Science / Technical",
    minMarks: 55,
    keywords: ["electric", "wiring", "circuit", "power", "voltage"],
    subjects: ["Physics", "Maths", "Basic Electrical"],
    courses10: ["Diploma in Electrical", "ITI Electrician"],
    courses12India: ["B.Tech Electrical"],
    courses12Global: ["BEng Electrical"],
    examsIndia: ["JEE Main", "Polytechnic Exams"],
    examsGlobal: ["SAT", "IELTS"],
    jobs: ["Electrical Engineer", "Electrician", "Power Plant Engineer"],
    salaryIndia: "₹2.5L – ₹10L+ per year",
    salaryGlobal: "$50,000 – $140,000+ per year",
    futureScope: "High demand due to renewable energy and smart cities.",
    tips: ["Learn safety rules", "Practice wiring", "Learn circuit reading"]
  },

  {
    id: "medical",
    name: "Doctor / Medical",
    stream: "Science (Biology)",
    minMarks: 70,
    keywords: ["doctor", "medical", "biology", "hospital", "mbbs"],
    subjects: ["Biology", "Chemistry", "Physics"],
    courses10: ["First Aid", "Healthcare Basics"],
    courses12India: ["MBBS", "BDS", "BSc Nursing"],
    courses12Global: ["Pre-Med", "MD Programs"],
    examsIndia: ["NEET"],
    examsGlobal: ["MCAT", "IELTS"],
    jobs: ["Doctor", "Nurse", "Pharmacist"],
    salaryIndia: "₹4L – ₹30L+ per year",
    salaryGlobal: "$80,000 – $300,000+ per year",
    futureScope: "Always in very high demand globally.",
    tips: ["Strong biology", "Patience", "Long-term study"]
  }
];

// ----------------------------
// 2. MATCHING LOGIC
// ----------------------------
function matchCareer(userText) {
  const text = userText.toLowerCase();

  for (let career of CAREERS) {
    for (let kw of career.keywords) {
      if (text.includes(kw)) {
        return career; // ✅ Return FIRST strong match
      }
    }
  }
  return null; // ❌ No match found
}

// ----------------------------
// 3. MAIN FUNCTION
// ----------------------------
function generateCareer() {
  const name = document.getElementById("name").value.trim();
  const marks = Number(document.getElementById("marks").value);
  const interestsRaw = document.getElementById("interests").value.trim();
  const output = document.getElementById("results");

  if (!name || !marks || !interestsRaw) {
    alert("Please fill Name, Marks and Interests.");
    return;
  }

  const matchedCareer = matchCareer(interestsRaw);

  let html = `
    <div class="card result-card">
      <h2>Hi ${name}, Career Guidance for: ${interestsRaw.toUpperCase()}</h2>
  `;

  if (matchedCareer && marks >= matchedCareer.minMarks) {
    html += renderCareerCard(matchedCareer);
  } else {
    html += renderCustomFieldCard(interestsRaw);
  }

  html += `</div>`;
  output.innerHTML = html;
}

// ----------------------------
// 4. FULL CAREER CARD
// ----------------------------
function renderCareerCard(career) {
  return `
  <div class="career-section">
    <h3>${career.name}</h3>
    <p><b>Stream:</b> ${career.stream}</p>

    <div class="career-grid">
      <div class="career-block"><h4>Subjects</h4><ul>${career.subjects.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>After 10th</h4><ul>${career.courses10.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>After 12th (India)</h4><ul>${career.courses12India.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>After 12th (Global)</h4><ul>${career.courses12Global.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>Exams (India)</h4><ul>${career.examsIndia.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>Exams (Global)</h4><ul>${career.examsGlobal.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>Jobs</h4><ul>${career.jobs.map(s => `<li>${s}</li>`).join("")}</ul></div>
      <div class="career-block"><h4>Salary</h4><p>India: ${career.salaryIndia}<br>Global: ${career.salaryGlobal}</p></div>
      <div class="career-block"><h4>Future Scope</h4><p>${career.futureScope}</p></div>
      <div class="career-block full"><h4>Tips</h4><ul>${career.tips.map(s => `<li>${s}</li>`).join("")}</ul></div>
    </div>
  </div>
  `;
}

// ----------------------------
// 5. CUSTOM UNKNOWN FIELD
// ----------------------------
function renderCustomFieldCard(fieldName) {
  return `
  <div class="career-section custom-career">
    <h3>Custom Career: ${fieldName.toUpperCase()}</h3>
    <p>This field is not in the default database. You can still build a future in it.</p>

    <div class="career-grid">
      <div class="career-block">
        <h4>Steps You Can Take</h4>
        <ul>
          <li>Search diplomas or degrees related to "${fieldName}".</li>
          <li>Find mentors on YouTube, LinkedIn or colleges.</li>
          <li>Join online communities and courses.</li>
        </ul>
      </div>

      <div class="career-block">
        <h4>Backup Advice</h4>
        <ul>
          <li>Keep 1–2 related backup careers.</li>
          <li>Improve communication and digital skills.</li>
          <li>Gain practical exposure through internships.</li>
        </ul>
      </div>
    </div>
  </div>
  `;
}

// ----------------------------
// 6. SAVE / LOAD / CLEAR
// ----------------------------
function saveReport() {
  const data = document.getElementById("results").innerHTML;
  if (!data) {
    alert("Generate a report first!");
    return;
  }
  localStorage.setItem("careerReport", data);
  alert("Career report saved successfully!");
}

function loadReport() {
  const saved = localStorage.getItem("careerReport");
  if (saved) {
    document.getElementById("results").innerHTML = saved;
  }
}

function clearReport() {
  localStorage.removeItem("careerReport");
  document.getElementById("results").innerHTML = "";
  alert("Previous report cleared!");
}

window.onload = function () {
  localStorage.removeItem("careerReport"); // auto clear on start
  document.getElementById("results").innerHTML = "";
};

