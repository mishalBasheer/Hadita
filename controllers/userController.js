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

      content: [
        {
          heading: "",
          points: [
            "We provide end-to-end solutions, from building a brand identity to designing your website, setting up email systems, boosting with SEO, and executing targeted digital marketing strategies. Let us be your partner in creating a strong and engaging online presence",
          ],
        },
      ],
    },
    {
      id: "infrastructure-services",
      title: "Infrastructure and Cloud Services",
      description:
        "Ensure the robustness and reliability of your IT infrastructure with our comprehensive services. From network design and setup to vigilant system monitoring and maintenance, we optimize system performance for peak efficiency.",

      content: [
        {
          heading: "",
          points: [
            "Ensure the robustness and reliability of your IT infrastructure with our comprehensive services. From network design and setup to vigilant system monitoring and maintenance, we optimize system performance for peak efficiency.",
            "Facilitate IT infrastructure migrations/transitions: Guide and support organizations in migrating and transforming their existing IT infrastructure to cloud or SDDC environments, ensuring minimal disruption to business operations.",
            "Conduct IT infrastructure due diligence: Conduct thorough assessments of IT infrastructure efficacy, availability, and security, providing recommendations to mitigate risks and enhance infrastructure security based on industry best practices.",
          ],
        },
      ],
    },
    {
      id: "business-applications-devops",
      title: "Business Applications and DevOps",
      description:
        "Optimize your business processes with cutting-edge applications and embrace agile DevOps methodologies. Our solutions streamline workflows, enhance collaboration, and deliver high-quality software rapidly.",

      content: [
        {
          heading: "",
          points: [
            "Develop and integrate business applications: Specialize in developing web and mobile applications, intranet and portals, SharePoint migrations, and Power Platforms, enabling seamless integration and alignment between business applications for enhanced productivity.",
            "Enable DevOps practices: Assist organizations in adopting DevOps practices, enabling continuous development and agile practices for software-driven innovations.",
          ],
        },
      ],
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "We're dedicated to revolutionizing industries through cutting-edge artificial intelligence solutions. Our team of experts combines deep technical expertise with a passion for innovation to deliver customized AI software that transforms businesses.",
      content: [
        {
          heading: "Our Services:",
          points: [
            "AI-powered Solutions Tailored to Your Needs Custom AI Development: We design and develop AI solutions from the ground up, ensuring they seamlessly integrate with your existing systems and processes.",
            "Machine Learning Algorithms: Our team specializes in creating robust machine learning models that learn and adapt, providing insights and predictions that drive informed decision-making.",
            "Natural Language Processing (NLP): We harness the power of NLP to extract meaningful insights from text data, enabling you to understand customer sentiment, automate content analysis, and more.",
            "Computer Vision: Our advanced computer vision applications allow for accurate image and video analysis, opening up possibilities for automation, object recognition, and more.",
            "AI Consulting: Our experienced consultants work closely with your team to identify opportunities for AI implementation, develop a tailored strategy, and guide you through the entire process.",
          ],
        },
      ],
    },
    {
      id: "it-consulting-services",
      title: "IT Consulting Services",
      description:
        "Our experienced consultants craft forward-thinking IT strategies aligned with your business goals. With a focus on personalization and productivity, we provide expert guidance to accelerate growth.",

      content: [
        {
          heading: "",
          points: [
            "Provide expert guidance for technology transformation: Support organizations in technology transformation and adoption of open-source and cloud technologies, offering strategic advice and guidance aligned with their business goals.",
          ],
        },
      ],
    },
    {
      id: "e-commerce-services",
      title: "E-Commerce Services",
      description:
        "We specialize in creating powerful and scalable e-commerce solutions that drive growth and maximize online sales. With expertise in platforms like Magento, WooCommerce, and more, we have the knowledge and experience to bring your online store to life.",
      content: [
        {
          heading: "Our E-Commerce Expertise:",
          points: [
            "Magento:Harnessing the robust capabilities of Magento, our team crafts bespoke e-commerce experiences. From custom theme development to complex module integrations, we ensure that your online store is both visually stunning and highly functional.",
            "WooCommerce:As experts in WooCommerce, we leverage the flexibility of this popular WordPress plugin to build seamless and user-friendly e-commerce platforms. Our solutions are designed to convert visitors into loyal customers, all while providing an intuitive backend for easy management.",
          ],
        },
        {
          heading: "Key Features of Our E-Commerce Solutions:",
          points: [
            "User-Centric Design: Our designs prioritize user experience, ensuring intuitive navigation, mobile responsiveness, and engaging product displays.",
            "Scalability: Whether you're a startup or an enterprise, our solutions are built to grow with your business, adapting to increased traffic and sales.",
            "Customization: We understand that every business is unique. Our e-commerce solutions are tailored to your specific needs, allowing for extensive customization and feature integration.",
            "SEO Optimization: We implement best practices for on-page SEO to ensure your products get the visibility they deserve in search engine results.",
            "Payment Gateway Integration: Seamless and secure payment processing ensures a hassle-free experience for your customers.",
            "Inventory Management: Efficiently manage your product catalog, track inventory, and receive real-time updates on stock levels.",
            "",
          ],
        },
        {
          heading: "Our Process:",
          points: [
            "Consultation: We begin by understanding your business goals, target audience, and specific requirements to create a tailored e-commerce strategy.",
            "Design and Development: Our skilled team of developers and designers work collaboratively to bring your vision to life, focusing on both aesthetics and functionality.",
            "Testing and Quality Assurance: Rigorous testing ensures that your e-commerce platform is bug-free, secure, and performs optimally.",
            "Launch and Optimization: Once your site is live, we continue to monitor performance and make necessary adjustments to improve user experience and conversion rates.",
          ],
        },
      ],
    },
  ];
  const selectedService = services.find((el) => el.id === id);
  console.log(selectedService);
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
