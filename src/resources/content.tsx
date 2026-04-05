import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abishek",
  lastName: "S",
  name: `ABISHEK S`,
  role: "Data Analyst | Python Developer",
  avatar: "/images/abishek.png",
  email: "abisheksivakumar72@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on data analysis, Python development, and tech learning</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ABISHEKSIVAKUMAR",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abishek-s-57b0b1208",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data-driven insights, powered by Python and analytics.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Farm Protection ML
        </Text>
      </Row>
    ),
    href: "/work/farm-land-protection-system",
  },
  subline: (
    <>
    Passionate about data analysis. Skilled in Python, SQL, and visualization.<br/>
    <br /> 
    Turning raw data into actionable insights with modern analytics tools and techniques.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a data enthusiast passionate about leveraging Python, SQL, and advanced analytics to drive business decisions. With a strong foundation in data science and full-stack web development, I excel at transforming complex data into actionable insights. I'm committed to continuous learning and thrive in collaborative environments where technical skills meet creative problem-solving.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "G-Tec Computer Education",
        timeframe: "June 2024 - December 2024",
        role: "Trainee Instructor",
        achievements: [
          <>
            Guided and assisted students in grasping technical concepts related to programming languages such as Python, C, and SQL.
          </>,
          <>
            Offered personalized mentorship to help students troubleshoot issues, enhancing their comprehension of key technical principles and improving their problem-solving skills.
          </>,
          <>
            Developed comprehensive learning materials and curriculum for programming courses, ensuring clarity and effective knowledge transfer.
          </>,
          <>
            Conducted hands-on coding sessions and practical demonstrations to reinforce theoretical concepts and build practical programming expertise.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bannari Amman Institute of Technology, Bangalore",
        description: <><strong>Bachelor of Engineering, Computer Science</strong> (2020 – 2024)  | CGPA: 7.71</>,
      },
      {
        name: "SVGV Matric Higher Secondary School",
        description: <><strong>Higher Secondary School Certificate</strong> (2018 – 2020) Score: 59.00%</>,
      },
      {
        name: "M S Vidhyalaya Matric Higher Secondary School",
        description: <><strong>Secondary School Certificate</strong> (2017 – 2018) Score: 89.00%</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Data Science",
        description: (
          <>Strong proficiency in Python for data analysis and scripting. Experienced in SQL for database querying and data manipulation. Skilled in Data Science methodologies including statistical analysis, machine learning principles, and predictive modeling.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "sql" },
        ],
        images: [],
      },
      {
        title: "Data Visualization & Analytics",
        description: (
          <>Expert-level skills in Microsoft Excel for advanced data analysis, pivot tables, and comprehensive reporting. Proficient in Tableau and Power BI for creating interactive dashboards and visual insights that drive business decisions.</>
        ),
        tags: [
          { name: "Excel", icon: "excel" },
          { name: "Tableau", icon: "tableau" },
          { name: "Power BI", icon: "powerbi" },
        ],
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>Full-stack development experience with HTML5, CSS, JavaScript, and React.js for frontend development. Capable of creating responsive, user-friendly web applications with modern frameworks.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Data Analytics & Python Development Insights",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data science and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // {
    //   src: "/images/gallery/horizontal-1.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-4.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-3.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-1.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-2.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-2.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/horizontal-4.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-3.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
