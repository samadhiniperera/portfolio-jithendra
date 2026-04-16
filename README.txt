=============================================
JITHENDRA PATHIRAJA PORTFOLIO — SETUP GUIDE
=============================================

FOLDER STRUCTURE:
=================
portfolio/
├── index.html                    ← Main page (Home, About, Skills, Contact)
├── design-manufacturing.html     ← Design & Manufacturing Projects
├── fluid-dynamics.html           ← Fluid Dynamics Projects  
├── mechanical-simulations.html   ← Mechanical Simulations
├── academic-projects.html        ← Academic Projects
├── style.css                     ← All styling
├── script.js                     ← All JavaScript
├── cv/
│   └── Jithendra_CV.pdf          ← ⚠️ PUT YOUR CV HERE (rename to Jithendra_CV.pdf)
├── reports/
│   ├── welding-jig-report.pdf    ← ⚠️ PUT REPORT HERE when ready
│   ├── paddock-stand-report.pdf  ← ⚠️ PUT REPORT HERE when ready
│   ├── suspension-report.pdf     ← ⚠️ PUT REPORT HERE when ready
│   ├── quickjack-report.pdf      ← ⚠️ PUT REPORT HERE when ready
│   ├── steering-redesign-report.pdf
│   ├── hydrodynamic-tunnel-report.pdf
│   └── aerofoil-report.pdf
├── images/
│   ├── profile.jpg               ← ⚠️ PUT YOUR PROFILE PHOTO HERE
│   └── projects/
│       ├── dm-p1/                ← Welding Jig (1.jpg to 17.jpeg) ✅ DONE
│       ├── dm-p2/                ← Paddock Stand (1.jpg to 9.jpg) ✅ DONE
│       ├── dm-p3/                ← Quick Jack  ⚠️ ADD PHOTOS HERE
│       ├── dm-p4/                ← Steering Redesign ⚠️ ADD PHOTOS HERE
│       ├── fluid-p1/             ← FYP Hydrodynamic Tunnel ⚠️ ADD PHOTOS HERE
│       ├── fluid-p2/             ← Aerofoil Simulations ⚠️ ADD PHOTOS HERE
│       ├── sim-p1/               ← Suspension MATLAB (1-10, 6.png, 7.png) ✅ DONE
│       └── academic/             ← Academic projects ⚠️ ADD PHOTOS HERE
└── videos/
    └── sim-p1/
        └── video.mp4             ← Suspension simulation video ✅ DONE


HOW TO ADD YOUR CV (Step by Step):
===================================
OPTION A — Google Drive (RECOMMENDED for download button):
1. Upload "Jithendra_CV.pdf" to Google Drive
2. Right-click → Share → "Anyone with the link" → Viewer
3. Copy the share link (looks like: https://drive.google.com/file/d/FILEID/view)
4. Change it to: https://drive.google.com/uc?export=download&id=FILEID
5. In index.html, find: href="cv/Jithendra_CV.pdf"
   Replace with:   href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
   Do the same in the About section Download CV button.

OPTION B — Local file (simpler):
1. Rename your CV file to: Jithendra_CV.pdf
2. Put it inside the cv/ folder
3. No code changes needed — it already works!


HOW TO ADD PHOTOS TO A PROJECT:
================================
Example: Adding Quick Jack photos (dm-p3):
1. Put your photos in: images/projects/dm-p3/
2. Name them: 1.jpg, 2.jpg, 3.jpg, etc. (in order you want them)
3. Open design-manufacturing.html
4. Find the Quick Jack project section (search for "dm3")
5. Remove the placeholder <div> (the one with "Photos Coming Soon")
6. Add image tags like this:
   <img src="images/projects/dm-p3/1.jpg" alt="Quick Jack" class="proj-slide active" />
   <img src="images/projects/dm-p3/2.jpg" alt="Quick Jack" class="proj-slide" />
   (First image gets class="proj-slide active", rest just get class="proj-slide")


HOW TO ADD A REPORT PDF:
=========================
1. Name your report file correctly (e.g. welding-jig-report.pdf)
2. Put it in the reports/ folder
3. The button already links to it — no code changes needed!


HOW TO DEPLOY YOUR PORTFOLIO (make it live):
=============================================
OPTION A — GitHub Pages (FREE):
1. Create a GitHub account at github.com
2. Create a new repository called: yourusername.github.io
3. Upload ALL portfolio files to that repository
4. Go to Settings → Pages → Source: main branch
5. Your site is live at: https://yourusername.github.io

OPTION B — Netlify (FREE, easiest):
1. Go to netlify.com → Sign up free
2. Drag and drop your entire portfolio folder onto the Netlify dashboard
3. Your site gets a URL like: random-name.netlify.app
4. You can change it to a custom name for free

OPTION C — GitHub + Netlify (BEST):
1. Upload to GitHub as in Option A
2. Connect Netlify to your GitHub repository
3. Every time you push changes to GitHub, Netlify automatically updates your site


THINGS TO UPDATE WHEN YOU HAVE ACTUAL CONTENT:
===============================================
⚠️  profile.jpg — replace with your actual profile photo
⚠️  cv/Jithendra_CV.pdf — add your actual CV
⚠️  reports/*.pdf — add your actual project reports
⚠️  images/projects/dm-p3/ — add Quick Jack photos
⚠️  images/projects/dm-p4/ — add Steering Redesign photos
⚠️  images/projects/fluid-p1/ — add FYP Hydrodynamic Tunnel photos
⚠️  images/projects/fluid-p2/ — add Aerofoil Simulation photos
⚠️  academic-projects.html — add your academic project details using the template
⚠️  LinkedIn URL — update "jithendra-pathiraja" if your LinkedIn URL is different


WHAT IS ALREADY WORKING:
=========================
✅  Dark/Light mode toggle
✅  Hamburger menu (all items visible when open)
✅  4 project dropdown items: Design & Manufacturing, Fluid Dynamics, Mechanical Simulations, Academic Projects
✅  "View Projects" button goes to Design & Manufacturing page
✅  Profile photo is STATIC (no spinning)
✅  About section slideshow with actual photos (no cropping — shows full image)
✅  All project slideshows with your actual photos
✅  Simulation video included in Mechanical Simulations page
✅  Email Me buttons work (opens mail app)
✅  Send Message form works (opens mail app)
✅  Download Resume button works (downloads CV once you add it)
✅  Download CV button in About section works
✅  LinkedIn buttons work
✅  Report buttons work (once you add PDFs)
✅  Responsive design (works on mobile, tablet, desktop)
✅  Split screen friendly — navbar collapses, sidebar shows all items at once
