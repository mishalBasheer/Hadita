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
      id: "cloud-services",
      title: "Cloud Services",
      description:
        "Unleash the full potential of the cloud with our expert guidance. Our tailored cloud solutions include migration, deployment, and management, allowing businesses to scale efficiently, reduce operational costs, and bolster data security.",
      points: [
        "Develop customized cloud strategies: Work closely with clients to develop tailored cloud strategies that align with their unique business objectives, driving sustainable growth and competitive advantage.",
        "Ensure seamless cloud migration: Assist organizations in seamlessly migrating their existing on-premise platforms and environments to the cloud, leveraging the scalability and cost-efficiency of cloud infrastructure.",
        "Enable efficient cloud integration: Specialize in enabling seamless integration between heterogeneous systems and solutions deployed across cloud and on-premises infrastructure, ensuring efficient communication and data flow.",
      ],
    },
    {
      id: "infrastructure-services",
      title: "Infrastructure Services",
      description:
        "Ensure the robustness and reliability of your IT infrastructure with our comprehensive services. From network design and setup to vigilant system monitoring and maintenance, we optimize system performance for peak efficiency.",
      points: [
        "Ensure the robustness and reliability of your IT infrastructure with our comprehensive services. From network design and setup to vigilant system monitoring and maintenance, we optimize system performance for peak efficiency.",
        "Facilitate IT infrastructure migrations/transitions: Guide and support organizations in migrating and transforming their existing IT infrastructure to cloud or SDDC environments, ensuring minimal disruption to business operations.",
        "Conduct IT infrastructure due diligence: Conduct thorough assessments of IT infrastructure efficacy, availability, and security, providing recommendations to mitigate risks and enhance infrastructure security based on industry best practices.",
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
      id: "digital-transformation",
      title: "Digital Transformation",
      description:
        "Stay ahead in the digital era with our transformative services. Leverage the latest technologies and practices to drive innovation, customer engagement, and overall business success.",
      points: [
        "Support organizations in digital transformation: Help businesses become more tech-intensive, unlock the value of their data, explore innovative ways to serve customers, and empower remote workforces, ensuring they adapt to the changing socio-economic environment and stay ahead of the curve.",
      ],
    },
    {
      id: "cloud-infrastructure-security",
      title: "Cloud and Infrastructure Security",
      description:
        "Comprehensive Cloud and Infrastructure Security: Safeguard valuable data with tailored strategies, vulnerability testing, and security hardening. Ensure compliance and resilience in an ever-changing digital landscape.",
      points: [
        "Implement comprehensive security strategies and services: Tailor and implement robust security strategies and services for cloud and hybrid environments, safeguarding valuable data and digital assets.",
        "Perform vulnerability and penetration testing: Employ sophisticated methodologies to identify vulnerabilities in infrastructure, applications, and devices, providing detailed reports and effective remediation solutions.",
        "Implement security hardening and compliance: Implement industry-recognized security benchmarks such as CIS to strengthen the security posture of existing IT infrastructure, ensuring compliance with relevant standards and regulations.",
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


export {
  showLanding,
  showContact,
  showServiceDetails,
  showBlog,
  showBlogDetails,  
  showUseCase,
  showNews,
  showNewsDetails,
};
