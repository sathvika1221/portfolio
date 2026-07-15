import tataImg from "./assets/images/Tata.png";
import nasscomImg from "./assets/images/Nasscom.png";
import awsImg from "./assets/images/Amazon EMR.png";
import googleImg from "./assets/images/google.png";
import salesforceImg from "./assets/images/Salesforce.png";
import ciscoImg from "./assets/images/Cisco.png";
import infosysImg from "./assets/images/infosys.png";
import ibmImg from "./assets/images/IBM.png";
import hpImg from "./assets/images/HP.png";


const greeting = {
  username: "SATHVIKA MEDABALIMI",
  title: "Hi all, I'm Sathvika 👋",
  subTitle:(
    "AI & ML enthusiast and Computer Science Engineering student passionate about building intelligent applications, full-stack web solutions and data-driven systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cxvyETUGU2IN3-DA3FMklyEzfknJ48pg/view?usp=drive_link",
  displayGreeting: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "CMR College of Engineering and Technology",
      subHeader: "B.Tech in Computer Science Engineering (AI & ML)",
      duration: "2023 - 2027",
      desc: "Pursuing specialization in Artificial Intelligence and Machine Learning.",
      descBullets: [
        "Current GPA: 7.88",
        "Worked on AI, ML and Full Stack projects"
      ]
    },
    {
      schoolName: "Narayana Junior College",
      subHeader: "Intermediate (MPC)",
      duration: "2021 - 2023",
      desc: "Completed Intermediate with MPC background.",
      descBullets: [
        "Scored 93%"
      ]
    },
    {
      schoolName: "The King's School",
      subHeader: "Board of Secondary Education Telangana",
      duration: "Completed 2021",
      desc: "Completed secondary education.",
      descBullets: [
        "GPA: 10"
      ]
    }
  ]
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "UI/UX & Web Development Intern",
      company: "Cognify Technologies",
      date: "2024 - 2025",
      desc: "Worked on UI/UX and web development projects.",
      descBullets: [
        "Designed interfaces and explored UI/UX principles",
        "Worked on web development implementation"
      ]
    },
    {
      role: "Web Development Intern",
      company: "ApexPlanet",
      date: "2024 - 2025",
      desc: "Worked on web technologies and development workflows.",
      descBullets: [
        "Built web projects",
        "Worked with HTML, CSS and JavaScript"
      ]
    }
  ]
};

// Projects

  const bigProjects = {
  title: "Featured Projects",
  subtitle: "AI and Machine Learning Projects",

  projects: [
    {
      projectName: "Fake News Detection",
      projectDesc: "Machine learning model for fake news detection.",
      githubLink: "https://github.com/sathvika1221/fake-news-detection"
    },
    {
      projectName: "News Classification System",
      projectDesc: "NLP-based news classification system.",
      githubLink: "https://github.com/sathvika1221/news-classification"
    },
    {
      projectName: "Stree Raksha",
      projectDesc: "Safety-focused application concept.",
      githubLink: "https://github.com/sathvika1221/stree-raksha"
    },
    {
      projectName: "Soil Analysis Using AI/ML",
      projectDesc: "AI-based soil analysis project.",
      githubLink: "https://github.com/sathvika1221/soil-analysis"
    }
  ],

  display: true
  }
  


// Achievement Section
const achievementSection = {
  title: "Certifications 🏆",
  subtitle: "Some certifications and learning achievements",

  achievementsCards: [
    {
      title: "Tata Data Visualization Certification",
      subtitle:
        "Learned how to understand data and present insights using dashboards and charts.",
       image: tataImg,  
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_tata-forage-virtualinternship-activity-7430563962036854786-ABI9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },

    {
      title: "AWS Cloud Foundations",
      subtitle:
        "Explored cloud computing basics and learned AWS services.",
         image: awsImg,

      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_aws-amazonemr-cloudlearning-activity-7449871390779944960--ZaE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },

    {
      title: "Google Cloud – Introduction to Generative AI",
      subtitle:
        "Designed user-friendly interfaces and improved user experience skills.",
         image: googleImg,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_googlecloud-generativeai-activity-7448040092776108053-iSp2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },
    {
      title:"Salesforce Certified AI Associate – Salesforce",
      subtitle:
        "Gained foundational knowledge of AI concepts and Salesforce's AI capabilities.",
         image: salesforceImg,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_salesforcecertified-trailhead-professionaldevelopment-activity-7421952889709056001-w0cu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },
    {
      title:"Cisco Modern AI",
      subtitle:
         "Learned modern AI concepts and explored real-world AI applications.",
          image: ciscoImg,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_cisco-activity-7422268858855522304-I1Ma?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]

    },

    {
      title:"Infosys Introduction to Data Science",
      subtitle:
        "Gained foundational knowledge of data science concepts and techniques.",
         image: infosysImg,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_datascience-machinelearning-learningjourney-activity-7446451135466618881-SWFL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },
    {
      title:"IBM-Data Science 101",
      subtitle:
        "Explored data science fundamentals and gained practical skills in data analysis.",
         image: ibmImg,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_artificialintelligence-machinelearning-datascience-activity-7437746436739608576-mQbk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },
    {

      title:"HP LIFE – Data Science & Analytics",
      subtitle:
        "Learned data science and analytics concepts to analyze and interpret data effectively.",
        image: hpImg,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_datascience-artificialintelligence-machinelearning-activity-7437512361260978177-3OCv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
        }
      ]
    },
     {
    title: "NASSCOM AI Fluency Framework & Foundations",
    subtitle: "Completed AI Fluency Framework & Foundations certification.",
    image: nasscomImg,
    footerLink: [
      {
        name: "View Certificate",
        url: "https://www.linkedin.com/posts/sathvika-medabalimi-ab5718338_successfully-completed-the-gen-ai-nasscom-activity-7434486970782851072-lVLg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTS4SkBtSXOz9af3oZHe_i8uJVTrqCZyNU"
      }
    ]
  }
  ],

  display: true
};

  


// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

// Remove Twitter

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const skillsSection = {
  display: false
};

const splashScreen = {
  enabled: false
};

const illustration = {
  animated: false
};

const talkSection = {
  display: false
};

const twitterDetails = {
  display: false
};

const isHireable = false;
const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Let's connect and collaborate",
  number: "+91-7569325346",
  email_address: "sathvika.medaabalimi@gmail.com"
};

const podcastSection = {
  display: false
};

const openSource = {
  display: false
};

const socialMediaLinks = {
  github: "https://github.com/sathvika1221",
  linkedin: "https://www.linkedin.com/in/sathvika-medabalimi-ab5718338",
  gmail: "sathvika.medaabalimi@gmail.com",
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Coming Soon",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};
export {
  greeting,
  illustration,
  techStack,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  splashScreen,
  talkSection,
  twitterDetails,
  contactInfo,
  podcastSection,
  socialMediaLinks,
  openSource,
  blogSection,
  resumeSection,
  isHireable
};

