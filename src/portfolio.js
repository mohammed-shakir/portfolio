/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammed Shakir",
  title: "Hi, I'm Shakir",
  subTitle: emoji(
    "Hi, I'm Mohammed Shakir, a software engineer with a Master's in Computer Engineering. I've worked on a wide range of projects, from machine learning for driver monitoring, to real-time 3D satellite tracking, LiDAR systems, and backend-heavy data platforms. I'm still exploring the fields, always learning, and figuring out where I want to specialize, but I love working on complex, meaningful tech."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mohammed-shakir",
  linkedin: "https://www.linkedin.com/in/mohammed-shakir-185337186/",
  gmail: "mohammedshakir010528@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I work across a wide range of tech projects, from data systems and infrastructure to interactive applications and tools.",
  skills: [
    emoji(
      "🧠 Versatile engineer with experience across real-time systems, visualization, and backend architecture."
    ),
    emoji(
      "🚀 Curious by nature, constantly exploring new tools, tech, and problem domains."
    ),
    emoji(
      "🛠 Hands-on builder, from concept to code — always focused on learning through doing."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Rust", fontAwesomeClassname: "fab fa-rust"},
    {skillName: "Dart", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Haskell", fontAwesomeClassname: "fas fa-code"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Firebase", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "ROS", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Luleå University of Technology",
      logo: require("./assets/images/LTU.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2020 - Januari 2026"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Systems & Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Data & Infrastructure",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming Languages & Tools",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Softhouse (Designstudio)",
      companylogo: require("./assets/images/softhouseLogo.png"), // Replace with actual logo path
      date: "Feb 2025 – Present",
      desc: "Part of Softhouse's internal Designstudio project, focusing on modernizing web architecture.",
      descBullets: [
        "Redesigned frontend structure and implemented Slack/email alert flows.",
        "Worked on application architecture and system integrations."
      ]
    },
    {
      role: "Developer",
      company: "SOEP (Satellite Orbit and Event Predictor)",
      companylogo: require("./assets/images/soepLogo.png"), // Replace with actual logo path
      date: "Sep 2024 – Jan 2025",
      desc: "Built an open-source platform for real-time satellite tracking and 3D visualization.",
      descBullets: [
        "Implemented orbital path calculations and real-time rendering.",
        "Handled data pipelines and interactive UI in JavaScript."
      ]
    },
    {
      role: "Software Developer",
      company: "Flasheye",
      companylogo: require("./assets/images/flasheyeLogo.png"), // Replace with actual logo path
      date: "Jan 2023 – Jan 2024",
      desc: "Developed advanced software for LiDAR-based systems used in safety and surveillance applications.",
      descBullets: [
        "Worked with ROS, InfluxDB, and C++ for backend development.",
        "Contributed to real-time data processing and system testing."
      ]
    },
    {
      role: "Fullstack Developer",
      company: "Sportcentrum",
      companylogo: require("./assets/images/sportcentrumLogo.png"), // Replace with actual logo path
      date: "Feb 2022 – May 2023",
      desc: "Co-founded and built a sports news aggregation platform from scratch.",
      descBullets: [
        "Integrated web crawling, Elasticsearch, and database pipelines.",
        "Developed frontend and backend features with Python, SQL, and React."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "CAB",
      companylogo: require("./assets/images/cabLogo.png"), // Replace with actual logo path
      date: "Aug 2019 – May 2020",
      desc: "Built ML models to detect driver drowsiness and improve vehicle safety.",
      descBullets: [
        "Implemented eye and head tracking using TensorFlow and Keras.",
        "Delivered a real-time predictive system to assess driver alertness."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎"),
  number: "+46765584566",
  email_address: "mohammedshakir010528@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
