const showLanding = (req, res) => {
  res.render("user/landing-page");
};
const showContact = (req, res) => {
  res.render("user/contact");
};
const showServiceDetails = (req, res) => {
  const id = req.params["id"];
  const services = [
    {
      id: "digital-enablement",
      title: "Digital Enablement Services",
      description:
        "Unlock the full potential of your business's digital presence with our comprehensive digital enablement services, tailored for both new and existing ventures.",
      points: [
        "We provide end-to-end solutions, from building a brand identity to designing your website, setting up email systems, boosting with SEO, and executing targeted digital marketing strategies. Let us be your partner in creating a strong and engaging online presence",
      ],
    },
    {
      id: "infrastructure-services",
      title: "Infrastructure and Cloud Services",
      description:
        "Ensure the robustness and reliability of your IT infrastructure with our comprehensive services. From network design and setup to vigilant system monitoring and maintenance, we optimize system performance for peak efficiency.",
      points: [
        "Ensure the robustness and reliability of your IT infrastructure with our comprehensive services. From network design and setup to vigilant system monitoring and maintenance, we optimize system performance for peak efficiency.",
        "Facilitate IT infrastructure migrations/transitions: Guide and support organizations in migrating and transforming their existing IT infrastructure to cloud or SDDC environments, ensuring minimal disruption to business operations.",
        "Conduct IT infrastructure due diligence: Conduct thorough assessments of IT infrastructure efficacy, availability, and security, providing recommendations to mitigate risks and enhance infrastructure security based on industry best practices.",
      ],
    },
    {
      id: "business-applications-devops",
      title: "Business Applications and DevOps",
      description:
        "Optimize your business processes with cutting-edge applications and embrace agile DevOps methodologies. Our solutions streamline workflows, enhance collaboration, and deliver high-quality software rapidly.",
      points: [
        "Develop and integrate business applications: Specialize in developing web and mobile applications, intranet and portals, SharePoint migrations, and Power Platforms, enabling seamless integration and alignment between business applications for enhanced productivity.",
        "Enable DevOps practices: Assist organizations in adopting DevOps practices, enabling continuous development and agile practices for software-driven innovations.",
      ],
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste",
      points: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste",
      ],
    },
    {
      id: "it-consulting-services",
      title: "IT Consulting Services",
      description:
        "Our experienced consultants craft forward-thinking IT strategies aligned with your business goals. With a focus on personalization and productivity, we provide expert guidance to accelerate growth.",
      points: [
        "Provide expert guidance for technology transformation: Support organizations in technology transformation and adoption of open-source and cloud technologies, offering strategic advice and guidance aligned with their business goals.",
      ],
    },
    {
      id: "e-commerce-services",
      title: "E-Commerce Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste.",
      points: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit sint repellendus quo sit enim! Amet ipsa velit saepe quisquam itaque. Facilis sed iusto commodi provident. Cupiditate delectus beatae iste.",
      ],
    },
  ];
  const selectedService = services.find((el) => el.id === id);
  res.render("user/service-details", { service: selectedService });
};
const showBlog = (req, res) => {
  res.render("user/blogs");
};
const showBlogDetails = (req, res) => {
  res.render("user/blog-details");
};
const showNews = (req, res) => {
  res.render("user/news");
};
const showNewsDetails = (req, res) => {
  res.render("user/news-details");
};
const showUseCase = (req, res) => {
  res.render("user/use-cases");
};
const showPrivacyPolicy = (req, res) => {
  res.render("user/privacy-policy");
};
const showTerms = (req, res) => {
  res.render("user/terms-of-use");
};

export {
  showLanding,
  showContact,
  showServiceDetails,
  showBlog,
  showBlogDetails,
  showUseCase,
  showNews,
  showNewsDetails,
  showPrivacyPolicy,
  showTerms,
};
