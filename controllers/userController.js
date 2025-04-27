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
        "HADITA Cloud Services – End-to-End Cloud Transformation for Future-Ready Enterprises. At HADITA, we offer a robust suite of cloud services designed to help businesses modernize, scale, and thrive in the digital economy. Our comprehensive offerings span across assessment, migration, operations, optimization, and compliance, all delivered with strategic guidance and support.",
      content: [
        {
          id: "cloud-assessment-strategy",
          heading: "Cloud Assessment & Strategy Development",
          description:
            "Our Cloud Assessment Services deliver a 360-degree analysis of your existing IT infrastructure, applications, workloads, and business goals. HADITA helps you assess cloud readiness and build a personalized transformation roadmap that aligns with your operational, financial, and security needs.",
          offerings: [
            "Infrastructure & application discovery",
            "Cloud readiness scoring",
            "TCO & ROI analysis",
            "Cloud platform selection (AWS, Azure, GCP, Hybrid)",
            "Strategic roadmap design",
          ],
          valueAdd:
            "We go beyond templates—our team provides consultative guidance, industry-specific insights, and stakeholder workshops to ensure you have a cloud strategy that is realistic, secure, and scalable.",
          cta: {
            title: "For a free consultation, please contact!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "cloud-deployment-migration",
          heading: "Cloud Deployment & Migration Services",
          description:
            "Transition to the cloud with zero disruption. HADITA's deployment and migration services are tailored to minimize downtime, maintain data integrity, and reduce risk. We support rehosting, re-platforming, and cloud-native modernization initiatives.",
          offerings: [
            "Migration strategy & planning",
            "Application & data migration",
            "Cloud-native app development",
            "Hybrid and multi-cloud setups",
            "Pilot and phased deployment approaches",
          ],
          valueAdd:
            "With our certified engineers and prebuilt accelerators, we ensure seamless migration execution with full post-migration validation, training, and documentation.",
          cta: {
            title:
              "We are happy to assist you in your cloud deployment and migration!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "cloud-operations-management",
          heading: "Cloud Operations & Infrastructure Management",
          description:
            "Ensure continuous availability, performance, and cost-efficiency of your cloud environments. HADITA provides managed services for infrastructure, workloads, and applications with a proactive and SLA-driven approach.",
          offerings: [
            "Real-time performance monitoring",
            "Incident detection and remediation",
            "Cloud cost and resource optimization",
            "Backup management and disaster recovery",
            "Capacity planning and auto-scaling",
          ],
          valueAdd:
            "Our integrated CloudOps model includes automation, alerting, governance, and reporting tools that keep your environment always optimized and secure.",
          cta: {
            title:
              "Our experts are happy to support you in your Cloud operation and management.",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "modern-work-solutions",
          heading: "Modern Work Solutions",
          description:
            "Enable a connected, secure, and collaborative workplace. HADITA's modern work solutions empower your workforce to operate from anywhere while maintaining enterprise-grade security and productivity.",
          offerings: [
            "Microsoft 365 and Google Workspace deployment",
            "Identity & Access Management (IAM)",
            "Endpoint security and mobile device management",
            "Remote work infrastructure setup",
            "Collaboration tools and policy enforcement",
          ],
          valueAdd:
            "We help businesses build flexible work environments without compromising compliance or user experience, supported by continuous training and support.",
          cta: {
            title:
              "Learn more about how HADITA can support you in setting up modern work solutions!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "cloud-backup-security",
          heading: "Cloud Backup, Security & Risk Mitigation",
          description:
            "Protect your data and assets from breaches, loss, and system failures. HADITA implements multi-layered security frameworks and enterprise-grade backup systems to keep your business resilient.",
          offerings: [
            "Automated backup systems",
            "Threat detection and response",
            "Encryption at rest and in transit",
            "Ransomware protection",
            "Security audits and penetration testing",
          ],
          valueAdd:
            "Security is baked into every layer—from design to deployment. Our Zero Trust security framework ensures robust protection and fast incident response.",
          cta: {
            title: "Look for backup and security solutions!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "cloud-optimization",
          heading: "Cloud Optimization",
          description:
            "Make your cloud work smarter. HADITA's optimization services analyze your current architecture to eliminate inefficiencies, reduce costs, and improve scalability.",
          offerings: [
            "Cost tracking and budgeting",
            "Resource right-sizing and scaling",
            "Performance tuning",
            "Reserved and spot instance optimization",
            "Multi-cloud billing management",
          ],
          valueAdd:
            "We provide real-time dashboards, savings recommendations, and automation scripts to continuously reduce spend while enhancing performance.",
          cta: {
            title: "Look for backup and security solutions!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "cloud-integration",
          heading: "Cloud Integration",
          description:
            "Ensure your applications talk to each other smoothly. HADITA builds reliable integration pipelines that connect legacy systems, SaaS platforms, and third-party services.",
          offerings: [
            "API gateway configuration",
            "Integration with ERP, CRM, and custom apps",
            "Event-driven architecture setup",
            "Data flow mapping and transformation",
            "Hybrid integration solutions",
          ],
          valueAdd:
            "Our cloud integration architects ensure your business processes are streamlined through secure, scalable, and real-time integrations.",
          cta: {
            title: "Speak to our integration expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "ai-ml-model-development-hosting",
          heading: "AI/ML Model Development and Hosting",
          description:
            "Unlock the power of artificial intelligence and machine learning to automate processes, drive smarter decision-making, and enhance customer experiences. HADITA offers full-lifecycle AI/ML services—from use-case identification to scalable deployment.",
          offerings: [
            "AI/ML consulting & use-case discovery",
            "Model development (supervised, unsupervised, NLP, CV)",
            "Data pipeline creation & feature engineering",
            "Model training, tuning, and validation",
            "Hosting models on cloud-native platforms (SageMaker, Vertex AI, Azure ML)",
            "MLOps pipeline setup for version control and continuous learning",
            "Real-time inference deployment through REST APIs",
          ],
          valueAdd:
            "We combine cloud-native tools and open-source frameworks to reduce development time and operational overhead while ensuring your models are secure, scalable, and cost-effective.",
          cta: {
            title: "Speak to our AI/ML experts!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "iot-integration-cloud-platforms",
          heading: "IoT Integration with Cloud Platforms",
          description:
            "Transform your physical assets into intelligent systems with our Internet of Things (IoT) cloud integration services. HADITA enables real-time data collection, processing, and analytics from distributed devices to unlock automation and insights.",
          offerings: [
            "IoT architecture design and device onboarding",
            "Integration with cloud platforms (AWS IoT Core, Azure IoT Hub, Google Cloud IoT)",
            "Protocol support (MQTT, CoAP, HTTP, OPC-UA)",
            "Edge-to-cloud data ingestion",
            "IoT analytics and dashboards",
            "Device management, firmware updates, and remote control",
          ],
          valueAdd:
            "We provide secure, scalable, and interoperable IoT ecosystems, enabling you to build smart factories, cities, healthcare systems, and logistics solutions with low maintenance.",
          cta: {
            title: "Speak to our IoT experts!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
        {
          id: "pocs-innovation-labs",
          heading: "POCs and Innovation Labs",
          description:
            "Accelerate your innovation journey with HADITA's Proof-of-Concept (POC) services and Innovation Labs. We help you validate new ideas, experiment with cutting-edge technologies, and build real-world use cases to drive digital transformation.",
          offerings: [
            "Prototype and MVP development",
            "Rapid prototyping with cloud services",
            "Experimentation with emerging technologies (AI/ML, IoT, blockchain)",
            "Cross-functional collaboration",
            "Go-to-market strategy development",
          ],
          valueAdd:
            "We work with you from concept to execution, helping you mitigate risks, validate market-fit, and scale innovation initiatives with the latest tools and frameworks.",
          cta: {
            title: "Interested in exploring new possibilities?",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud assessment and strategy",
              url: "#cloud-assessment-strategy",
            },
            {
              title: "Cloud deployment and migration",
              url: "#cloud-deployment-migration",
            },
            {
              title: "Cloud operations and management",
              url: "#cloud-operations-management",
            },
            {
              title: "Modern work solutions",
              url: "#modern-work-solutions",
            },
            {
              title: "Cloud backup and security",
              url: "#cloud-backup-security",
            },
            {
              title: "Cloud optimization",
              url: "#cloud-optimization",
            },
            {
              title: "Cloud integration",
              url: "#cloud-integration",
            },
            {
              title: "AI/ML model development and hosting",
              url: "#ai-ml-model-development-hosting",
            },
            {
              title: "IoT integration with cloud platforms",
              url: "#iot-integration-cloud-platforms",
            },
            {
              title: "POCs and innovation labs",
              url: "#pocs-innovation-labs",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're modernizing legacy systems, moving to the cloud for the first time, or scaling up a cloud-native business—HADITA is your trusted transformation partner.",
        cta: {
          title: "Book a Free Consulting Call",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "infrastructure-services",
      title: "Infrastructure Services",
      description:
        "HADITA Infrastructure Services: Design and Implement Robust and Resilient Infrastructure Solutions. At HADITA, we design, implement, and manage intelligent infrastructure solutions that serve as the digital backbone for modern enterprises. From foundational IT hardware to virtualized cloud infrastructure, our services are built to support secure, scalable, and high-performing environments tailored to your business goals. We provide end-to-end infrastructure services, covering physical, hybrid, and cloud-native environments with a strong focus on security, uptime, and performance.",
      content: [
        {
          id: "core-it-infrastructure-services",
          heading: "Core IT Infrastructure Services",
          description:
            "These services focus on building and managing your foundational IT environment—on-premise or hybrid.",
          offerings: [
            "Data center setup and management",
            "Server and storage infrastructure",
            "Enterprise networking (LAN, WAN, SD-WAN)",
            "Virtualization (VMware, Hyper-V, KVM)",
            "Hyperconverged infrastructure (HCI) solutions",
            "Infrastructure lifecycle management",
            "Structured cabling and physical asset deployment",
          ],
          valueAdd:
            "Vendor-agnostic approach and integrated solutions that reduce complexity, improve reliability, and optimize TCO.",
          cta: {
            title: "Speak to our Infrastructure Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Infrastructure Services",
              url: "#cloud-infrastructure-services",
            },
            {
              title: "Network Infrastructure Solutions",
              url: "#network-infrastructure-solutions",
            },
            {
              title: "Infrastructure Security Services",
              url: "#infrastructure-security-services",
            },
            {
              title: "Infrastructure Monitoring & Management",
              url: "#infrastructure-monitoring-management",
            },
            {
              title: "Infrastructure Modernization & Automation",
              url: "#infrastructure-modernization-automation",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
            {
              title: "Get Your Free IT & Cloud Assessment",
              url: "#free-assessment",
            },
          ],
        },
        {
          id: "cloud-infrastructure-services",
          heading: "Cloud Infrastructure Services",
          description:
            "Leverage the agility of the cloud while maintaining enterprise-grade performance and governance.",
          offerings: [
            "Cloud infrastructure setup (IaaS, PaaS)",
            "Public, private, and hybrid cloud provisioning",
            "Cloud-native architecture design",
            "Serverless computing environments",
            "Network & storage configuration in cloud platforms",
            "Infrastructure as Code (IaC) automation",
            "Cloud resource scaling and management",
          ],
          valueAdd:
            "Seamless integration with AWS, Azure, Google Cloud, and Oracle with expert-led deployment and support for migration and modernization.",
          cta: {
            title: "Speak to our Cloud Infrastructure Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Core IT Infrastructure Services",
              url: "#core-it-infrastructure-services",
            },
            {
              title: "Network Infrastructure Solutions",
              url: "#network-infrastructure-solutions",
            },
            {
              title: "Infrastructure Security Services",
              url: "#infrastructure-security-services",
            },
            {
              title: "Infrastructure Monitoring & Management",
              url: "#infrastructure-monitoring-management",
            },
            {
              title: "Infrastructure Modernization & Automation",
              url: "#infrastructure-modernization-automation",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
            {
              title: "Get Your Free IT & Cloud Assessment",
              url: "#free-assessment",
            },
          ],
        },
        {
          id: "network-infrastructure-solutions",
          heading: "Network Infrastructure Solutions",
          description:
            "Power fast, secure, and reliable communication across your organization with intelligent networking solutions.",
          offerings: [
            "Enterprise Wi-Fi and LAN infrastructure",
            "SD-WAN and WAN optimization",
            "Network design and security architecture",
            "Load balancing, failover, and redundancy solutions",
            "VPN setup and secure remote access",
            "Firewall and edge security configurations",
          ],
          valueAdd:
            "Customized, high-performance networks that support digital workplaces, cloud connectivity, and zero-trust security postures.",
          cta: {
            title: "Speak to our Network Infrastructure Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Core IT Infrastructure Services",
              url: "#core-it-infrastructure-services",
            },
            {
              title: "Cloud Infrastructure Services",
              url: "#cloud-infrastructure-services",
            },
            {
              title: "Infrastructure Security Services",
              url: "#infrastructure-security-services",
            },
            {
              title: "Infrastructure Monitoring & Management",
              url: "#infrastructure-monitoring-management",
            },
            {
              title: "Infrastructure Modernization & Automation",
              url: "#infrastructure-modernization-automation",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
            {
              title: "Get Your Free IT & Cloud Assessment",
              url: "#free-assessment",
            },
          ],
        },
        {
          id: "infrastructure-security-services",
          heading: "Infrastructure Security Services",
          description:
            "Protect your IT environment with multi-layered security that's embedded across your infrastructure stack.",
          offerings: [
            "Network access control and segmentation",
            "Infrastructure hardening and patch management",
            "Endpoint detection and response (EDR)",
            "SIEM and log management integration",
            "Threat and vulnerability management",
            "Compliance monitoring (ISO, NIST, GDPR, etc.)",
          ],
          valueAdd:
            "A 'security by design' philosophy across all deployments, ensuring maximum protection against internal and external threats.",
          cta: {
            title: "Speak to our Infrastructure Security Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Core IT Infrastructure Services",
              url: "#core-it-infrastructure-services",
            },
            {
              title: "Cloud Infrastructure Services",
              url: "#cloud-infrastructure-services",
            },
            {
              title: "Network Infrastructure Solutions",
              url: "#network-infrastructure-solutions",
            },
            {
              title: "Infrastructure Monitoring & Management",
              url: "#infrastructure-monitoring-management",
            },
            {
              title: "Infrastructure Modernization & Automation",
              url: "#infrastructure-modernization-automation",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
            {
              title: "Get Your Free IT & Cloud Assessment",
              url: "#free-assessment",
            },
          ],
        },
        {
          id: "infrastructure-monitoring-management",
          heading: "Infrastructure Monitoring & Management",
          description:
            "Maintain peak operational efficiency and pre-empt disruptions with proactive monitoring and support.",
          offerings: [
            "Infrastructure monitoring (NOC services)",
            "Real-time alerting and incident response",
            "Predictive analytics for failure prevention",
            "Asset health and performance reporting",
            "Automated patching and maintenance",
            "SLA-driven support desk and remote management",
          ],
          valueAdd:
            "AI-assisted tools for predictive maintenance and reduced MTTR (mean time to repair), ensuring uninterrupted operations.",
          cta: {
            title: "Speak to our Infrastructure Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Core IT Infrastructure Services",
              url: "#core-it-infrastructure-services",
            },
            {
              title: "Cloud Infrastructure Services",
              url: "#cloud-infrastructure-services",
            },
            {
              title: "Network Infrastructure Solutions",
              url: "#network-infrastructure-solutions",
            },
            {
              title: "Infrastructure Security Services",
              url: "#infrastructure-security-services",
            },
            {
              title: "Infrastructure Modernization & Automation",
              url: "#infrastructure-modernization-automation",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
            {
              title: "Get Your Free IT & Cloud Assessment",
              url: "#free-assessment",
            },
          ],
        },
        {
          id: "infrastructure-modernization-automation",
          heading: "Infrastructure Modernization & Automation",
          description:
            "Transform legacy environments into agile, automated ecosystems optimized for modern workloads.",
          offerings: [
            "Legacy system assessment and upgrade",
            "Containerization and microservices adoption",
            "DevOps toolchain integration (CI/CD, GitOps)",
            "Infrastructure automation using Ansible, Terraform, etc.",
            "Cloud-native development support",
            "RPA-based IT operations (AIOps)",
          ],
          valueAdd:
            "Enables faster deployments, greater scalability, and reduced human error—laying the groundwork for future innovation.",
          cta: {
            title: "Speak to our Infrastructure Modernization Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Core IT Infrastructure Services",
              url: "#core-it-infrastructure-services",
            },
            {
              title: "Cloud Infrastructure Services",
              url: "#cloud-infrastructure-services",
            },
            {
              title: "Network Infrastructure Solutions",
              url: "#network-infrastructure-solutions",
            },
            {
              title: "Infrastructure Security Services",
              url: "#infrastructure-security-services",
            },
            {
              title: "Infrastructure Monitoring & Management",
              url: "#infrastructure-monitoring-management",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
            {
              title: "Get Your Free IT & Cloud Assessment",
              url: "#free-assessment",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're modernizing existing systems, scaling to cloud, or establishing new IT infrastructure from scratch—HADITA can support you to do it right, securely, and future-proofed.",
        cta: {
          title: "Book a Consultation!",
          form: {
            name: "Name",
            mobile: "Mobile",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "cloud-security",
      title: "Cloud Security",
      description:
        "HADITA Cloud Security Services: Secure by Design. Scalable by Default. Powered by Intelligence.",
      content: [
        {
          id: "cloud-infrastructure-security",
          heading: "Cloud Infrastructure Security",
          description:
            "Protect your foundational cloud resources—compute, storage, and networking—with policy-driven controls and continuous risk assessments.",
          offerings: [
            "Infrastructure-as-Code (IaC) security scanning",
            "Cloud Security Posture Management (CSPM)",
            "Real-time misconfiguration detection & remediation",
            "Identity & access hardening (least privilege enforcement)",
            "Secure VPC/subnet and network access design",
            "Security group and firewall auditing",
            "Encryption enforcement for data in-transit & at-rest",
          ],
          valueAdd:
            "We integrate cloud-native tools like AWS Config, Azure Defender, and GCP Security Command Center alongside custom threat detection for full visibility and proactive defence.",
          cta: {
            title: "Speak to our Security Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Workload & Application Security",
              url: "#workload-application-security",
            },
            {
              title: "Cloud Visibility, Monitoring & Threat Detection",
              url: "#cloud-visibility-monitoring-threat-detection",
            },
            {
              title: "Identity & Access Management (IAM) Security",
              url: "#identity-access-management-iam-security",
            },
            {
              title: "Security Automation & DevSecOps",
              url: "#security-automation-devsecops",
            },
            {
              title: "Security Advisory, Audit & Training",
              url: "#security-advisory-audit-training",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
          ],
        },
        {
          id: "workload-application-security",
          heading: "Workload & Application Security",
          description:
            "Secure cloud-native workloads, containers, and applications without compromising agility or performance.",
          offerings: [
            "Container security (Kubernetes, Docker, EKS, AKS)",
            "Serverless workload scanning (Lambda, Cloud Functions, etc.)",
            "Runtime protection and anomaly detection",
            "Application firewall and micro-segmentation",
            "API gateway and API security monitoring",
            "Threat modelling and secure code practices",
          ],
          valueAdd:
            "We bridge the gap between Dev and Sec by embedding security into CI/CD pipelines with DevSecOps best practices—shifting left to prevent vulnerabilities early.",
          cta: {
            title: "Speak to our Workload and Application Security Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Infrastructure Security",
              url: "#cloud-infrastructure-security",
            },
            {
              title: "Cloud Visibility, Monitoring & Threat Detection",
              url: "#cloud-visibility-monitoring-threat-detection",
            },
            {
              title: "Identity & Access Management (IAM) Security",
              url: "#identity-access-management-iam-security",
            },
            {
              title: "Security Automation & DevSecOps",
              url: "#security-automation-devsecops",
            },
            {
              title: "Security Advisory, Audit & Training",
              url: "#security-advisory-audit-training",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
          ],
        },
        {
          id: "cloud-visibility-monitoring-threat-detection",
          heading: "Cloud Visibility, Monitoring & Threat Detection",
          description:
            "Centralized visibility is key to stopping breaches. HADITA delivers real-time insights and actionable intelligence across all your cloud environments.",
          offerings: [
            "Unified cloud asset inventory across regions & providers",
            "Continuous security scanning and anomaly alerts",
            "Integration with SIEM and SOAR platforms",
            "Threat intelligence feeds & correlation",
            "DNS monitoring and deep packet inspection (DPI)",
            "Cloud-native audit logging (AWS CloudTrail, Azure Monitor, etc.)",
          ],
          valueAdd:
            "We help you detect threats in real time and respond swiftly with managed detection and response (MDR) built into cloud operations.",
          cta: {
            title:
              "Learn how we can support you in bringing visibility and threat detection!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Infrastructure Security",
              url: "#cloud-infrastructure-security",
            },
            {
              title: "Workload & Application Security",
              url: "#workload-application-security",
            },
            {
              title: "Identity & Access Management (IAM) Security",
              url: "#identity-access-management-iam-security",
            },
            {
              title: "Security Automation & DevSecOps",
              url: "#security-automation-devsecops",
            },
            {
              title: "Security Advisory, Audit & Training",
              url: "#security-advisory-audit-training",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
          ],
        },
        {
          id: "identity-access-management-iam-security",
          heading: "Identity & Access Management (IAM) Security",
          description:
            "Misconfigured identities are a top cloud risk. We ensure your identity policies are air-tight and aligned to least privilege principles.",
          offerings: [
            "Role-based access control (RBAC) and policy audits",
            "Privileged access management (PAM)",
            "Identity federation and SSO integration",
            "Multi-factor authentication (MFA) enforcement",
            "Temporary credentials management for DevOps",
          ],
          valueAdd:
            "We automate identity governance with zero-trust policies and continuous monitoring to eliminate hidden permissions and toxic combinations.",
          cta: {
            title: "Speak to our IAM Security Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Infrastructure Security",
              url: "#cloud-infrastructure-security",
            },
            {
              title: "Workload & Application Security",
              url: "#workload-application-security",
            },
            {
              title: "Cloud Visibility, Monitoring & Threat Detection",
              url: "#cloud-visibility-monitoring-threat-detection",
            },
            {
              title: "Security Automation & DevSecOps",
              url: "#security-automation-devsecops",
            },
            {
              title: "Security Advisory, Audit & Training",
              url: "#security-advisory-audit-training",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
          ],
        },
        {
          id: "security-automation-devsecops",
          heading: "Security Automation & DevSecOps",
          description:
            "Embed security into your DevOps workflows to minimize manual effort and eliminate security debt.",
          offerings: [
            "Automated vulnerability scans for every code push",
            "IaC and container pipeline scanning (Terraform, Helm, etc.)",
            "Policy-as-Code integration for CI/CD gates",
            "GitOps security integration",
            "SOAR-enabled incident response",
          ],
          valueAdd:
            "We turn security into a continuous process rather than a bottleneck—improving developer velocity while minimizing risks.",
          cta: {
            title: "Learn how we can support you in security automation!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Infrastructure Security",
              url: "#cloud-infrastructure-security",
            },
            {
              title: "Workload & Application Security",
              url: "#workload-application-security",
            },
            {
              title: "Cloud Visibility, Monitoring & Threat Detection",
              url: "#cloud-visibility-monitoring-threat-detection",
            },
            {
              title: "Identity & Access Management (IAM) Security",
              url: "#identity-access-management-iam-security",
            },
            {
              title: "Security Advisory, Audit & Training",
              url: "#security-advisory-audit-training",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
          ],
        },
        {
          id: "security-advisory-audit-training",
          heading: "Security Advisory, Audit & Training",
          description:
            "Security is a journey—HADITA equips your teams with the knowledge and strategies to stay ahead of threats.",
          offerings: [
            "Cloud security assessments and maturity models",
            "Risk evaluation workshops",
            "Penetration testing and red teaming",
            "Security awareness and training programs",
            "Executive reporting and roadmap planning",
          ],
          valueAdd:
            "We don't just fix issues—we enable your teams with long-term resilience through actionable strategies and continuous improvement.",
          cta: {
            title: "Speak to our Security Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Infrastructure Security",
              url: "#cloud-infrastructure-security",
            },
            {
              title: "Workload & Application Security",
              url: "#workload-application-security",
            },
            {
              title: "Cloud Visibility, Monitoring & Threat Detection",
              url: "#cloud-visibility-monitoring-threat-detection",
            },
            {
              title: "Identity & Access Management (IAM) Security",
              url: "#identity-access-management-iam-security",
            },
            {
              title: "Security Automation & DevSecOps",
              url: "#security-automation-devsecops",
            },
            {
              title: "Managed Services",
              url: "#managed-services",
            },
          ],
        },
      ],
      footer: {
        description:
          "Partner with HADITA to build a resilient, compliant, and intelligent cloud security posture—so your business can scale fearlessly in the digital era.",
        cta: {
          title: "Book a consultation with our security experts!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "managed-services",
      title: "Managed Services",
      description:
        "HADITA Managed Services: Simplify IT. Amplify Performance. Secure Your Future.",
      content: [
        {
          heading: "IT Managed Services",
          description:
            "Whether you're a startup scaling rapidly or an enterprise seeking efficiency, our IT managed services provide comprehensive operational support.",
          offerings: [
            "SLA-based Service Desk & Remote Support",
            "IT Asset Management & Software Licensing",
            "Desktop & Endpoint Management (MDM)",
            "Network & Infrastructure Monitoring",
            "Hardware Procurement & Lifecycle Management",
            "Onsite Engineer Dispatch & IT Field Services",
          ],
          valueAdd:
            "A dedicated team of certified engineers ensures minimal downtime, proactive maintenance, and full IT visibility with real-time dashboards and reporting.",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Managed Services",
              url: "#cloud-managed-services",
            },
            {
              title: "Cybersecurity Managed Services",
              url: "#cybersecurity-managed-services",
            },
          ],
        },
        {
          heading: "Cloud Managed Services",
          description:
            "Unlock the full potential of your cloud investment with proactive management, monitoring, and cost optimization.",
          offerings: [
            "Cloud Infrastructure Monitoring & Management",
            "Multi-cloud Operations (AWS, Azure, GCP)",
            "Cloud Cost Optimization & Billing Analysis",
            "Backup, Disaster Recovery & Business Continuity",
            "Cloud Security Monitoring & Incident Response",
            "Continuous Compliance Management",
          ],
          valueAdd:
            "We combine automation, AI, and cloud-native expertise to ensure your workloads are always available, secure, and scalable—no matter the platform.",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "IT Managed Services",
              url: "#it-managed-services",
            },
            {
              title: "Cybersecurity Managed Services",
              url: "#cybersecurity-managed-services",
            },
          ],
        },
        {
          heading: "Cybersecurity Managed Services",
          description:
            "Protect your business from evolving threats with a multi-layered, proactive cybersecurity strategy delivered as a service.",
          offerings: [
            "Security Operations Center (SOC)",
            "Threat Detection & Incident Response (MDR/XDR)",
            "Vulnerability Management & Penetration Testing",
            "Firewall, Endpoint & Email Security Management",
            "Identity & Access Management (IAM)",
            "Data Loss Prevention & Ransomware Defense",
          ],
          valueAdd:
            "Our cybersecurity approach is proactive, not reactive. We implement zero-trust architectures and real-time threat intelligence to keep you a step ahead.",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "IT Managed Services",
              url: "#it-managed-services",
            },
            {
              title: "Cloud Managed Services",
              url: "#cloud-managed-services",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're looking to outsource your entire IT department, optimize your cloud operations, or secure your digital ecosystem—HADITA Managed Services deliver the peace of mind and performance your business deserves.",
        cta: {
          title: "Speak to our Managed Services Consultants!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      description:
        "At HADITA, we specialize in building bespoke digital solutions that drive operational excellence, customer engagement, and long-term growth. Our custom software development services are tailored to meet the evolving needs of businesses across industries in the GCC region.",
      content: [
        {
          heading: "Customized Software Product Development",
          description:
            "We design and develop custom software products from the ground up, ensuring they align with your unique business processes and objectives. Whether you need a SaaS platform, enterprise application, or customer-facing solution, HADITA delivers scalable, secure, and high-performance software tailored to your vision.",
          offerings: [],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Legacy System Modernization",
              url: "#legacy-system-modernization",
            },
            {
              title: "Web & Mobile App Development",
              url: "#web-mobile-app-development",
            },
            {
              title: "Cloud-Native Application Development",
              url: "#cloud-native-application-development",
            },
            {
              title: "Post Deployment Support & Maintenance",
              url: "#post-deployment-support-maintenance",
            },
          ],
        },
        {
          heading: "Legacy System Modernization",
          description:
            "Transform outdated and underperforming legacy systems into agile, cloud-ready platforms. HADITA modernizes legacy applications by re-architecting monolithic systems, upgrading outdated tech stacks, and optimizing for future scalability and efficiency.",
          offerings: [],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Customized Software Product Development",
              url: "#customized-software-product-development",
            },
            {
              title: "Web & Mobile App Development",
              url: "#web-mobile-app-development",
            },
            {
              title: "Cloud-Native Application Development",
              url: "#cloud-native-application-development",
            },
            {
              title: "Post Deployment Support & Maintenance",
              url: "#post-deployment-support-maintenance",
            },
          ],
        },
        {
          heading: "Web & Mobile App Development",
          description:
            "Create engaging digital experiences with HADITA’s end-to-end web and mobile application development. From responsive websites to native and cross-platform mobile apps, we focus on performance, intuitive design, and seamless user experiences across devices.",
          offerings: [],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Customized Software Product Development",
              url: "#customized-software-product-development",
            },
            {
              title: "Legacy System Modernization",
              url: "#legacy-system-modernization",
            },
            {
              title: "Cloud-Native Application Development",
              url: "#cloud-native-application-development",
            },
            {
              title: "Post Deployment Support & Maintenance",
              url: "#post-deployment-support-maintenance",
            },
          ],
        },
        {
          heading: "Cloud-Native Application Development",
          description:
            "Leverage the power of cloud computing with applications designed specifically for cloud environments. We build resilient, microservices-based, and containerized solutions using platforms like AWS, Azure, and Google Cloud, ensuring flexibility, scalability, and cost-efficiency.",
          offerings: [],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Customized Software Product Development",
              url: "#customized-software-product-development",
            },
            {
              title: "Legacy System Modernization",
              url: "#legacy-system-modernization",
            },
            {
              title: "Web & Mobile App Development",
              url: "#web-mobile-app-development",
            },
            {
              title: "Post Deployment Support & Maintenance",
              url: "#post-deployment-support-maintenance",
            },
          ],
        },
        {
          heading: "Post-Deployment Support & Maintenance",
          description:
            "Our commitment doesn’t end at launch. HADITA offers reliable software support and maintenance services, including bug fixes, performance optimization, version upgrades, and continuous improvements—ensuring your solutions stay future-ready and aligned with evolving business goals.",
          offerings: [],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Customized Software Product Development",
              url: "#customized-software-product-development",
            },
            {
              title: "Legacy System Modernization",
              url: "#legacy-system-modernization",
            },
            {
              title: "Web & Mobile App Development",
              url: "#web-mobile-app-development",
            },
            {
              title: "Cloud-Native Application Development",
              url: "#cloud-native-application-development",
            },
          ],
        },
      ],
      footer: {
        description: "Let’s create software that works the way you do—better.",
        cta: {
          title: "Speak to our consultant today!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "custom-mobile-app-development",
      title: "Custom Mobile App Development",
      description:
        "At HADITA, we specialize in crafting mobile applications that deliver meaningful user experiences and real business value. From concept to launch—and beyond—we build high-performance mobile apps tailored to your goals, powered by cutting-edge technology and deep user insights.",
      content: [
        {
          heading: "Native App Development",
          description:
            "We develop native mobile apps that harness the full capabilities of iOS and Android platforms. Whether you're targeting Apple’s iOS ecosystem or the expansive Android market, HADITA delivers sleek, responsive, and feature-rich apps with maximum device compatibility and speed.",
          offerings: [
            "iOS (Swift, Objective-C)",
            "Android (Kotlin, Java)",
            "Optimized for speed, security, and device features",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cross-Platform App Development",
              url: "#cross-platform-app-development",
            },
            {
              title: "Enterprise Mobile Applications",
              url: "#enterprise-mobile-applications",
            },
            {
              title: "MVP Development",
              url: "#mvp-development",
            },
            {
              title: "Mobile App UI/UX Design",
              url: "#mobile-app-ui-ux-design",
            },
            {
              title: "Mobile App Testing & QA",
              url: "#mobile-app-testing-qa",
            },
            {
              title: "Mobile App Support & Maintenance",
              url: "#mobile-app-support-maintenance",
            },
          ],
        },
        {
          heading: "Cross-Platform App Development",
          description:
            "Using frameworks like Flutter and React Native, we build cross-platform mobile applications that reduce time-to-market while maintaining a native-like experience. Ideal for businesses seeking cost-effective mobile strategies without compromising on quality.",
          offerings: [
            "Faster development cycles",
            "Unified UI/UX across devices",
            "Lower maintenance costs",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Native App Development",
              url: "#native-app-development",
            },
            {
              title: "Enterprise Mobile Applications",
              url: "#enterprise-mobile-applications",
            },
            {
              title: "MVP Development",
              url: "#mvp-development",
            },
            {
              title: "Mobile App UI/UX Design",
              url: "#mobile-app-ui-ux-design",
            },
            {
              title: "Mobile App Testing & QA",
              url: "#mobile-app-testing-qa",
            },
            {
              title: "Mobile App Support & Maintenance",
              url: "#mobile-app-support-maintenance",
            },
          ],
        },
        {
          heading: "Enterprise Mobile Applications",
          description:
            "We develop secure, scalable mobile apps tailored for internal teams, field operations, and enterprise workflows. From workforce enablement to mobile BI dashboards, HADITA equips your organization with powerful tools—on the go.",
          offerings: [
            "Role-based access control",
            "Secure integration with enterprise systems (ERP, CRM, HRMS)",
            "Offline functionality for field operations",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Native App Development",
              url: "#native-app-development",
            },
            {
              title: "Cross-Platform App Development",
              url: "#cross-platform-app-development",
            },
            {
              title: "MVP Development",
              url: "#mvp-development",
            },
            {
              title: "Mobile App UI/UX Design",
              url: "#mobile-app-ui-ux-design",
            },
            {
              title: "Mobile App Testing & QA",
              url: "#mobile-app-testing-qa",
            },
            {
              title: "Mobile App Support & Maintenance",
              url: "#mobile-app-support-maintenance",
            },
          ],
        },
        {
          heading: "MVP Development",
          description:
            "HADITA supports to bring ideas to life through Minimum Viable Products. We help validate concepts quickly with lean mobile app builds—ready to iterate, test, and scale based on user feedback and market fit.",
          offerings: [
            "Rapid prototyping",
            "Lean architecture for scalability",
            "Analytics integration for insights",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Native App Development",
              url: "#native-app-development",
            },
            {
              title: "Cross-Platform App Development",
              url: "#cross-platform-app-development",
            },
            {
              title: "Enterprise Mobile Applications",
              url: "#enterprise-mobile-applications",
            },
            {
              title: "Mobile App UI/UX Design",
              url: "#mobile-app-ui-ux-design",
            },
            {
              title: "Mobile App Testing & QA",
              url: "#mobile-app-testing-qa",
            },
            {
              title: "Mobile App Support & Maintenance",
              url: "#mobile-app-support-maintenance",
            },
          ],
        },
        {
          heading: "Mobile App UI/UX Design",
          description:
            "We craft beautiful, intuitive mobile interfaces that enhance user engagement and retention. Every tap, swipe, and scroll is optimized to create a seamless journey—from onboarding to checkout.",
          offerings: [
            "Wireframing & prototyping",
            "Human-centered design",
            "Motion design & microinteractions",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Native App Development",
              url: "#native-app-development",
            },
            {
              title: "Cross-Platform App Development",
              url: "#cross-platform-app-development",
            },
            {
              title: "Enterprise Mobile Applications",
              url: "#enterprise-mobile-applications",
            },
            {
              title: "MVP Development",
              url: "#mvp-development",
            },
            {
              title: "Mobile App Testing & QA",
              url: "#mobile-app-testing-qa",
            },
            {
              title: "Mobile App Support & Maintenance",
              url: "#mobile-app-support-maintenance",
            },
          ],
        },
        {
          heading: "Mobile App Testing & QA",
          description:
            "From functional and usability testing to performance and security checks, HADITA ensures your app delivers a flawless experience on every device and OS version.",
          offerings: [
            "Manual & automated testing",
            "Device lab coverage",
            "Regression and stress testing",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Native App Development",
              url: "#native-app-development",
            },
            {
              title: "Cross-Platform App Development",
              url: "#cross-platform-app-development",
            },
            {
              title: "Enterprise Mobile Applications",
              url: "#enterprise-mobile-applications",
            },
            {
              title: "MVP Development",
              url: "#mvp-development",
            },
            {
              title: "Mobile App UI/UX Design",
              url: "#mobile-app-ui-ux-design",
            },
            {
              title: "Mobile App Support & Maintenance",
              url: "#mobile-app-support-maintenance",
            },
          ],
        },
        {
          heading: "App Maintenance & Support",
          description:
            "We provide post-launch support to ensure continuous improvement, regular updates, and peak performance. HADITA’s mobile app lifecycle management includes bug fixes, OS updates, feature enhancements, and user feedback implementation.",
          offerings: [
            "SLA-based support",
            "App store management",
            "Version upgrades",
          ],
          valueAdd: "",
          cta: {
            title: "Speak to our Consultant!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Native App Development",
              url: "#native-app-development",
            },
            {
              title: "Cross-Platform App Development",
              url: "#cross-platform-app-development",
            },
            {
              title: "Enterprise Mobile Applications",
              url: "#enterprise-mobile-applications",
            },
            {
              title: "MVP Development",
              url: "#mvp-development",
            },
            {
              title: "Mobile App UI/UX Design",
              url: "#mobile-app-ui-ux-design",
            },
            {
              title: "Mobile App Testing & QA",
              url: "#mobile-app-testing-qa",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're building your first app or optimizing a mobile-first strategy, HADITA delivers future-ready mobile solutions that work as hard as you do.",
        cta: {
          title: "Speak to our Mobile Expert!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "rpa-services",
      title: "Robotic Process Automation (RPA) Services",
      description:
        "At HADITA, we empower businesses to enhance efficiency and accuracy by automating repetitive tasks through our comprehensive RPA solutions. Our services are designed to streamline operations, reduce errors, and allow your workforce to focus on strategic initiatives.",
      content: [
        {
          heading: "Process Assessment & Strategy Development",
          description:
            "We begin by conducting a thorough analysis of your existing workflows to identify automation opportunities. Our team collaborates with stakeholders to develop a tailored RPA strategy that aligns with your business objectives and ensures optimal return on investment.",
          offerings: [
            "In-depth process analysis to pinpoint automation potential.",
            "Customized RPA roadmaps aligned with organizational goals.",
            "Expertise in handling cross-industry processes.",
          ],
          cta: {
            title:
              "Unlock the potential of automation in your operations. Schedule a consultation with our RPA experts today.",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "RPA Implementation & Integration",
              url: "#rpa-implementation-integration",
            },
            {
              title: "RPA Tools",
              url: "#rpa-tools",
            },
          ],
        },
        {
          heading: "RPA Implementation & Integration",
          description:
            "We ensure seamless deployment of RPA solutions into your existing IT infrastructure. Our approach emphasizes minimal disruption and maximum compatibility, integrating bots with your current systems and applications.",
          offerings: [
            "Expertise in integrating RPA with various enterprise systems.",
            "Adherence to best practices for smooth implementation.",
            "Focus on scalability to accommodate future growth.",
          ],
          cta: {
            title:
              "Achieve seamless automation integration. Reach out to our team for a tailored implementation plan.",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Process Assessment & Strategy",
              url: "#process-assessment-strategy",
            },
            {
              title: "RPA Tools",
              url: "#rpa-tools",
            },
          ],
        },
        {
          heading: "RPA Tool: UiPath",
          description:
            "A user-friendly and enterprise-grade RPA platform, UiPath offers powerful automation for both attended and unattended processes. It’s ideal for rapid deployment, AI integration, and scaling automation across departments.",
          cta: {
            title: "Discover how UiPath can empower your business operations!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Process Assessment & Strategy",
              url: "#process-assessment-strategy",
            },
            {
              title: "RPA Implementation & Integration",
              url: "#rpa-implementation-integration",
            },
          ],
        },
        {
          heading: "RPA Tool: Automation Anywhere",
          description:
            "Known for its cloud-native architecture and robust bot capabilities, Automation Anywhere is perfect for businesses aiming for enterprise-wide automation with strong governance and security.",
          cta: {
            title:
              "Explore the potential of Automation Anywhere for your enterprise!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Process Assessment & Strategy",
              url: "#process-assessment-strategy",
            },
            {
              title: "RPA Implementation & Integration",
              url: "#rpa-implementation-integration",
            },
          ],
        },
        {
          heading: "RPA Tool: Blue Prism",
          description:
            "Blue Prism delivers secure, scalable digital workforce solutions for highly regulated industries. It’s ideal for clients who require centralized control, auditability, and enterprise-grade compliance.",
          cta: {
            title:
              "Find out how Blue Prism can meet your compliance and scalability needs!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Process Assessment & Strategy",
              url: "#process-assessment-strategy",
            },
            {
              title: "RPA Implementation & Integration",
              url: "#rpa-implementation-integration",
            },
          ],
        },
        {
          heading: "RPA Tool: Open-Source RPA Platforms",
          description:
            "For organizations seeking flexibility and cost-efficiency, we support open-source RPA tools such as TagUI, Robocorp, and others. These platforms offer transparency, high customization, and developer freedom.",
          cta: {
            title:
              "Learn how open-source RPA tools can be a flexible solution for your business!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Process Assessment & Strategy",
              url: "#process-assessment-strategy",
            },
            {
              title: "RPA Implementation & Integration",
              url: "#rpa-implementation-integration",
            },
          ],
        },
      ],
      footer: {
        description:
          "Contact HADITA today to discover how our RPA services can drive efficiency and growth in your organization.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "iot-services",
      title: "IoT Services",
      description:
        "HADITA brings cutting-edge Internet of Things (IoT) solutions to businesses across the UAE. Our comprehensive IoT services are designed to seamlessly integrate devices, networks, and applications, providing real-time insights and enhancing operational efficiency.",
      content: [
        {
          heading: "Consulting and Solution Development",
          description:
            "We begin with a thorough assessment of your business processes to identify opportunities for IoT integration. Our team collaborates with you to develop customized IoT strategies that align with your objectives and drive innovation.",
          cta: {
            title:
              "Start your IoT transformation today. Speak with our experts!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Connected Devices",
              url: "#connected-devices",
            },
            {
              title: "Vertical Applications",
              url: "#vertical-applications",
            },
          ],
        },
        {
          heading: "Connected Devices",
          description:
            "Our solutions encompass the integration of various sensors and devices, enabling real-time data collection and monitoring. This connectivity allows for improved decision-making and operational efficiency.",
          cta: {
            title:
              "Unlock the power of connected devices. Speak with our experts!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Consulting and Solution Development",
              url: "#consulting-solution-development",
            },
            {
              title: "End-to-End System Integration",
              url: "#end-to-end-system-integration",
            },
          ],
        },
        {
          heading: "Vertical Applications",
          description:
            "We develop industry-specific IoT applications tailored to sectors such as manufacturing, healthcare, and smart cities. These applications address unique challenges and drive sector-specific innovations.",
          cta: {
            title:
              "Explore our industry-specific IoT applications. Get in touch with our team!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Consulting and Solution Development",
              url: "#consulting-solution-development",
            },
            {
              title: "Connected Devices",
              url: "#connected-devices",
            },
          ],
        },
        {
          heading: "End-to-End System Integration",
          description:
            "Our team ensures seamless integration of IoT solutions with your existing IT infrastructure, facilitating smooth data flow and interoperability between systems.",
          cta: {
            title: "Achieve seamless IoT integration. Talk to our experts now!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Consulting and Solution Development",
              url: "#consulting-solution-development",
            },
            {
              title: "Testing",
              url: "#testing",
            },
          ],
        },
        {
          heading: "Testing",
          description:
            "We conduct rigorous testing of IoT solutions to ensure functionality, security, and performance meet the highest standards before deployment.",
          cta: {
            title:
              "Ensure quality with our comprehensive IoT testing services!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "End-to-End System Integration",
              url: "#end-to-end-system-integration",
            },
            {
              title: "Managed Services and Support",
              url: "#managed-services-support",
            },
          ],
        },
        {
          heading: "Managed Services and Support",
          description:
            "Post-deployment, we offer ongoing support and maintenance to ensure your IoT solutions continue to operate optimally and evolve with your business needs.",
          cta: {
            title: "Get ongoing support for your IoT solutions. Reach out now!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Testing",
              url: "#testing",
            },
            {
              title: "Industry Focus Areas",
              url: "#industry-focus-areas",
            },
          ],
        },
        {
          heading: "Industry Focus Areas",
          description: "We specialize in IoT solutions for various industries:",
          subSections: [
            {
              title: "Smart Industries",
              description:
                "Revolutionize manufacturing, energy, and utility sectors by integrating IoT solutions that enhance efficiency and promote sustainable growth.",
            },
            {
              title: "Smart Living",
              description:
                "Elevate quality of life through IoT applications in healthcare, security, and wearable technologies, fostering safer and healthier environments.",
            },
            {
              title: "Smart Enterprises",
              description:
                "Implement IoT in smart buildings, offices, and retail spaces to connect people, machines, and data, driving business efficiency and innovation.",
            },
          ],
          cta: {
            title: "Explore our IoT solutions tailored to your industry needs!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Consulting and Solution Development",
              url: "#consulting-solution-development",
            },
            {
              title: "Managed Services and Support",
              url: "#managed-services-support",
            },
          ],
        },
      ],
      footer: {
        description:
          "Contact HADITA today to discover how our IoT services can drive efficiency and innovation in your organization.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "it-consulting-services",
      title: "IT Consulting Services",
      description:
        "In today's rapidly evolving digital landscape, aligning technology with business objectives is crucial for sustained success. At HADITA, we offer comprehensive IT consulting services designed to empower organizations across the UAE. Our mission is to transform your IT infrastructure into a strategic asset that drives efficiency, innovation, and growth.",
      content: [
        {
          heading: "Strategic IT Advisory",
          description:
            "We collaborate with your leadership team to develop IT strategies that align with your business goals, ensuring technology acts as a catalyst for growth and competitive advantage.",
          cta: {
            title:
              "Start aligning your IT strategy with your business goals. Speak with our experts!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "IT Infrastructure Assessment & Optimization",
              url: "#it-infrastructure-assessment",
            },
            {
              title: "Digital Transformation Services",
              url: "#digital-transformation-services",
            },
          ],
        },
        {
          heading: "IT Infrastructure Assessment & Optimization",
          description:
            "Our team conducts thorough evaluations of your existing IT infrastructure to identify areas for improvement, ensuring optimal performance, scalability, and security.",
          cta: {
            title:
              "Optimize your IT infrastructure for growth. Talk to our experts!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Strategic IT Advisory",
              url: "#strategic-it-advisory",
            },
            {
              title: "Cybersecurity & Risk Management",
              url: "#cybersecurity-risk-management",
            },
          ],
        },
        {
          heading: "Digital Transformation Services",
          description:
            "We guide organizations through the digital transformation journey, integrating advanced technologies to modernize operations and enhance customer experiences.",
          cta: {
            title:
              "Transform your business with digital solutions. Speak to our team!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "IT Infrastructure Assessment & Optimization",
              url: "#it-infrastructure-assessment",
            },
            {
              title: "Cloud Services & Migration",
              url: "#cloud-services-migration",
            },
          ],
        },
        {
          heading: "Cybersecurity & Risk Management",
          description:
            "Protect your organization from evolving cyber threats with our comprehensive cybersecurity strategies and risk management solutions.",
          cta: {
            title:
              "Protect your assets with robust cybersecurity. Contact us now!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Digital Transformation Services",
              url: "#digital-transformation-services",
            },
            {
              title: "IT Compliance & Governance",
              url: "#it-compliance-governance",
            },
          ],
        },
        {
          heading: "Cloud Services & Migration",
          description:
            "Leverage the power of the cloud with our end-to-end services, including strategy, migration, and management, to enhance agility and reduce costs.",
          cta: {
            title: "Maximize your cloud strategy. Talk to our experts today!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Digital Transformation Services",
              url: "#digital-transformation-services",
            },
            {
              title: "IT Project Management",
              url: "#it-project-management",
            },
          ],
        },
        {
          heading: "IT Project Management",
          description:
            "Ensure the successful delivery of IT projects with our expert project management services, from planning through execution and support.",
          cta: {
            title:
              "Get your IT projects delivered on time and within budget. Speak to our team!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cloud Services & Migration",
              url: "#cloud-services-migration",
            },
            {
              title: "IT Compliance & Governance",
              url: "#it-compliance-governance",
            },
          ],
        },
        {
          heading: "IT Compliance & Governance",
          description:
            "Navigate the complex landscape of IT compliance with our services, ensuring adherence to local and international regulations and standards.",
          cta: {
            title:
              "Ensure compliance with expert governance. Get in touch with us!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Cybersecurity & Risk Management",
              url: "#cybersecurity-risk-management",
            },
            {
              title: "IT Project Management",
              url: "#it-project-management",
            },
          ],
        },
      ],
      footer: {
        description:
          "Ready to Transform Your IT Landscape? Partner with HADITA to harness the full potential of your technology investments. Contact us today to schedule a consultation and discover how our IT consulting services can drive your business forward.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "application-modernization-services",
      title: "Application Modernization Services",
      description:
        "Modernizing legacy applications is critical to stay agile, competitive, and secure in today’s digital economy. At HADITA, we help businesses transform outdated systems into scalable, cloud-ready, and future-proof digital assets—without disrupting core operations.",
      content: [
        {
          heading: "Legacy Application Assessment & Roadmapping",
          description:
            "We start with a comprehensive evaluation of your existing systems—identifying bottlenecks, technical debt, and modernization opportunities. Our roadmap aligns with your business goals, ensuring minimal disruption and maximum ROI.",
          cta: {
            title:
              "Ready to transform your legacy systems? Let’s start with a smart modernization plan.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Re-Architecture & Re-Engineering",
              url: "#re-architecture-re-engineering",
            },
            {
              title: "Cloud Migration & Optimization",
              url: "#cloud-migration-optimization",
            },
          ],
        },
        {
          heading: "Re-Architecture & Re-Engineering",
          description:
            "We redesign and re-engineer legacy systems by breaking down monolithic applications into modular, service-oriented or microservices-based architectures. This improves flexibility, maintainability, and performance.",
          cta: {
            title:
              "Empower your tech stack with modern architecture. Speak to our solution architects today.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Legacy Application Assessment & Roadmapping",
              url: "#legacy-application-assessment-roadmapping",
            },
            {
              title: "Cloud Migration & Optimization",
              url: "#cloud-migration-optimization",
            },
          ],
        },
        {
          heading: "Cloud Migration & Optimization",
          description:
            "HADITA ensures a seamless migration of applications from on-premise to cloud environments—public, private, or hybrid. We also optimize workloads for better performance, cost-efficiency, and reliability.",
          cta: {
            title:
              "Scale faster in the cloud. Schedule your cloud readiness assessment now.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Legacy Application Assessment & Roadmapping",
              url: "#legacy-application-assessment-roadmapping",
            },
            {
              title: "Re-Architecture & Re-Engineering",
              url: "#re-architecture-re-engineering",
            },
          ],
        },
        {
          heading: "UI/UX Modernization",
          description:
            "Outdated user interfaces hurt usability and engagement. We redesign legacy frontends with modern UI/UX principles, ensuring mobile responsiveness, accessibility, and seamless navigation across all devices.",
          cta: {
            title:
              "Give your app a modern look and feel. Request a UI/UX revamp consultation.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Legacy Application Assessment & Roadmapping",
              url: "#legacy-application-assessment-roadmapping",
            },
            {
              title: "Re-Architecture & Re-Engineering",
              url: "#re-architecture-re-engineering",
            },
          ],
        },
        {
          heading: "Integration with Modern Systems",
          description:
            "HADITA enables your legacy apps to communicate effectively with modern CRMs, ERPs, and third-party platforms via custom APIs, middleware, or event-driven architectures.",
          cta: {
            title:
              "Bridge the old with the new. Let’s unlock your data’s full potential.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Legacy Application Assessment & Roadmapping",
              url: "#legacy-application-assessment-roadmapping",
            },
            {
              title: "Re-Architecture & Re-Engineering",
              url: "#re-architecture-re-engineering",
            },
          ],
        },
      ],
      footer: {
        description:
          "Contact us today for a free modernization assessment or to schedule a discovery workshop.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "e-commerce-platform-development",
      title: "E-commerce Services",
      description:
        "In a world where digital commerce is evolving at lightning speed, a cookie-cutter online store just won't cut it. At Hadita, we specialize in building robust, future-ready e-commerce platforms that empower brands to sell smarter, scale faster, and deliver delightful customer experiences across all channels. Whether you're launching a D2C brand, creating a B2B portal, or scaling a multi-vendor marketplace, our team brings strategy, creativity, and cutting-edge technology to the table—ensuring every touchpoint drives value.",
      content: [
        {
          heading: "Custom E-commerce Development",
          description:
            "Your business is unique—your online store should be too. We design and develop bespoke e-commerce platforms that reflect your brand ethos and streamline your customer journey from browsing to checkout.",
          cta: {
            title: "Speak to Our Consultants to Build Your Storefront!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Headless Commerce Solutions",
              url: "#headless-commerce-solutions",
            },
            {
              title: "E-Commerce SEO and Marketing",
              url: "#e-commerce-seo-and-marketing",
            },
            {
              title: "System Integration & Automation",
              url: "#system-integration-automation",
            },
          ],
        },
        {
          heading: "Headless Commerce Solutions",
          description:
            "Headless commerce empowers brands to deliver lightning-fast, omnichannel experiences across web, mobile, POS, and more. It separates the presentation layer from the logic layer—giving you total control over UX and scalability.",
          cta: {
            title: "Speak to Our Consultants to Build Your Storefront!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom E-commerce Development",
              url: "#custom-e-commerce-development",
            },
            {
              title: "E-Commerce SEO and Marketing",
              url: "#e-commerce-seo-and-marketing",
            },
            {
              title: "System Integration & Automation",
              url: "#system-integration-automation",
            },
          ],
        },
        {
          heading: "E-commerce SEO & Performance Marketing",
          description:
            "E-commerce success doesn’t stop at launch. Our digital marketing and SEO strategies ensure your products reach the right people at the right time—across search engines, social platforms, and marketplaces.",
          cta: {
            title: "Grow Your Online Sales with Hadita. Speak to a Consultant!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom E-commerce Development",
              url: "#custom-e-commerce-development",
            },
            {
              title: "Headless Commerce Solutions",
              url: "#headless-commerce-solutions",
            },
            {
              title: "System Integration & Automation",
              url: "#system-integration-automation",
            },
          ],
        },
        {
          heading: "System Integration & Automation",
          description:
            "Streamline operations by integrating your store with inventory, shipping, finance, and CRM systems. Automation reduces manual effort and human error, improving operational efficiency.",
          cta: {
            title:
              "Streamline your E-Commerce business. Speak to our consultant!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom E-commerce Development",
              url: "#custom-e-commerce-development",
            },
            {
              title: "Headless Commerce Solutions",
              url: "#headless-commerce-solutions",
            },
            {
              title: "E-Commerce SEO and Marketing",
              url: "#e-commerce-seo-and-marketing",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're launching a new store, scaling an existing one, or reimagining your customer experience—Hadita is your strategic partner for smart, scalable, and future-ready e-commerce solutions. Let’s talk about your e-commerce goals.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "artificial-intelligence-ai-consulting",
      title: "Artificial Intelligence (AI) Consulting Services",
      description:
        "At HADITA, we help businesses move from ambition to action with AI. Our AI Consulting Services are designed to guide organizations through every phase of their AI journey—from ideation to implementation—with a focus on solving real-world problems, creating measurable impact, and building future-ready capabilities. Whether you're exploring automation, predictive insights, or next-gen AI products, HADITA brings a strategic, data-driven, and human-centered approach to make it happen.",
      content: [
        {
          heading: "AI Strategy & Roadmap",
          description:
            "We align AI capabilities with your business goals, helping you build a strategic foundation that drives innovation and value from day one.",
          offerings: [
            "AI maturity benchmarking",
            "Use case discovery workshops",
            "Strategic roadmap with timelines & ROI projections",
            "Change management and stakeholder alignment",
          ],
          valueAdd:
            "Tailored strategies for AI adoption and execution, aligned with your business objectives and outcomes.",
          cta: {
            title: "Speak to our AI Consultant today!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Use Case Discovery & Feasibility",
              url: "#use-case-discovery-feasibility",
            },
            {
              title: "Machine Learning and Data Science Solutions",
              url: "#machine-learning-data-science-solutions",
            },
            {
              title: "AI Powered Process Optimization",
              url: "#ai-powered-process-optimization",
            },
            {
              title: "AI Training & Team Enablement",
              url: "#ai-training-team-enablement",
            },
          ],
        },
        {
          heading: "Use Case Discovery & Feasibility",
          description:
            "We help you find and prioritize AI use cases that align with your data, business challenges, and potential for return—grounded in both technical feasibility and business value.",
          offerings: [
            "Business process analysis & pain-point mapping",
            "Technical readiness & data health assessment",
            "Feasibility scoring & value matrix",
            "Risk indicators and mitigation strategies",
          ],
          valueAdd:
            "Ensuring high-impact AI solutions by prioritizing business value and aligning with data readiness and technical feasibility.",
          cta: {
            title: "Speak to our AI Consultant today!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "AI Strategy & Roadmap",
              url: "#ai-strategy-roadmap",
            },
            {
              title: "Machine Learning and Data Science Solutions",
              url: "#machine-learning-data-science-solutions",
            },
            {
              title: "AI Powered Process Optimization",
              url: "#ai-powered-process-optimization",
            },
            {
              title: "AI Training & Team Enablement",
              url: "#ai-training-team-enablement",
            },
          ],
        },
        {
          heading: "Machine Learning & Data Science Solutions",
          description:
            "From customer behavior prediction to image classification and NLP, we design custom AI solutions that learn, adapt, and scale with your business.",
          offerings: [
            "Predictive & prescriptive modeling",
            "Natural Language Processing (NLP), computer vision & recommendation engines",
            "Model training, tuning, and deployment",
            "MLOps frameworks for lifecycle management",
          ],
          valueAdd:
            "Custom-designed AI models that learn and scale with your business needs, providing actionable insights to improve decision-making.",
          cta: {
            title:
              "Learn how actionable insights lead to better decisions and smart operations.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "AI Strategy & Roadmap",
              url: "#ai-strategy-roadmap",
            },
            {
              title: "Use Case Discovery & Feasibility",
              url: "#use-case-discovery-feasibility",
            },
            {
              title: "AI Powered Process Optimization",
              url: "#ai-powered-process-optimization",
            },
            {
              title: "AI Training & Team Enablement",
              url: "#ai-training-team-enablement",
            },
          ],
        },
        {
          heading: "AI-Powered Process Optimization",
          description:
            "We help businesses re-engineer their workflows with AI—automating repetitive tasks, predicting process bottlenecks, and improving efficiency across the board. Optimized processes mean lower costs, faster delivery, and happier customers—powered by AI that keeps learning.",
          offerings: [
            "Process analysis and automation roadmap",
            "Intelligent automation using AI + RPA",
            "Predictive insights for smarter operations",
            "Real-time monitoring and optimization",
          ],
          valueAdd:
            "Transforming workflows to drive efficiency, reduce costs, and enhance customer experience using AI-powered automation.",
          cta: {
            title: "Learn more about AI-powered process optimization!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "AI Strategy & Roadmap",
              url: "#ai-strategy-roadmap",
            },
            {
              title: "Use Case Discovery & Feasibility",
              url: "#use-case-discovery-feasibility",
            },
            {
              title: "Machine Learning and Data Science Solutions",
              url: "#machine-learning-data-science-solutions",
            },
            {
              title: "AI Training & Team Enablement",
              url: "#ai-training-team-enablement",
            },
          ],
        },
        {
          heading: "AI Training & Team Enablement",
          description:
            "We empower your teams with the skills and mindset needed to manage, sustain, and scale AI initiatives from within.",
          offerings: [
            "Executive briefings and team workshops",
            "Hands-on training in ML tools and platforms",
            "AI adoption playbooks for business functions",
            "Internal champions and CoE guidance",
          ],
          valueAdd:
            "Building internal AI capabilities and champions through comprehensive training and support to scale AI across the business.",
          cta: {
            title: "Build an AI-ready team. Speak to our Team!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "AI Strategy & Roadmap",
              url: "#ai-strategy-roadmap",
            },
            {
              title: "Use Case Discovery & Feasibility",
              url: "#use-case-discovery-feasibility",
            },
            {
              title: "Machine Learning and Data Science Solutions",
              url: "#machine-learning-data-science-solutions",
            },
            {
              title: "AI Powered Process Optimization",
              url: "#ai-powered-process-optimization",
            },
          ],
        },
      ],
      footer: {
        description:
          "At HADITA, AI is more than technology—it’s transformation. Whether you're just getting started or scaling AI across your enterprise, we're here to help you deliver it right.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "custom-ai-development",
      title: "Custom AI Software Development",
      description:
        "At HADITA, we build custom AI-powered software that transforms how your business operates. Whether you're building a recommendation engine, predictive analytics dashboard, or a computer vision platform—we engineer intelligent systems from the ground up, precisely aligned with your goals, data, and ecosystem. From idea to impact, our team of AI experts, data scientists, and solution architects deliver cutting-edge applications that are scalable, secure, and production ready.",
      content: [
        {
          heading: "Custom AI Software Development",
          description:
            "We develop end-to-end AI applications that align with your unique needs—built to scale, integrate, and perform across real-world scenarios. From predictive models to full-stack ML systems, we bring your AI vision to life with precision.",
          offerings: [
            "Custom ML models (regression, classification, forecasting)",
            "NLP tools (chatbots, sentiment analysis, text summarization)",
            "Computer vision systems (object detection, image analysis)",
            "MLOps implementation for continuous learning and scalability",
          ],
          valueAdd:
            "AI solutions tailored to your business that scale, integrate seamlessly, and drive meaningful results.",
          cta: {
            title:
              "Ready to develop your custom AI product? Request a free consultation.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Generative AI Development",
              url: "#generative-ai-development",
            },
            {
              title: "AI Component Development",
              url: "#ai-component-development",
            },
            {
              title: "AI Training",
              url: "#ai-training",
            },
          ],
        },
        {
          heading: "Generative AI Development",
          description:
            "We help you build and integrate Generative AI models that create, automate, and personalize—at scale. From content generation to conversational agents, we engineer powerful GenAI systems that adapt to your brand’s tone and business logic.",
          offerings: [
            "Custom LLM-based applications and fine-tuning",
            "GenAI-powered chatbots and digital assistants",
            "Text, code, and image generation workflows",
            "Integration with OpenAI, Claude, open-source LLMs",
          ],
          valueAdd:
            "Generative AI models that adapt to your business, automate processes, and generate content in alignment with your brand’s vision.",
          cta: {
            title: "Want to build your own GenAI assistant? Speak to our Team.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom AI Software Development",
              url: "#custom-ai-software-development",
            },
            {
              title: "AI Component Development",
              url: "#ai-component-development",
            },
            {
              title: "AI Training",
              url: "#ai-training",
            },
          ],
        },
        {
          heading: "AI Component Development",
          description:
            "We engineer AI modules that seamlessly embed into your existing infrastructure—enhancing workflows without overhauling systems. From fraud detection engines to recommendation models, our components are modular, efficient, and API-ready.",
          offerings: [
            "Reusable AI modules for core business functions",
            "Smart extractors, classifiers, recommendation systems",
            "API-first design for ERP, CRM, or custom tools",
            "Real-time analytics and alert engines",
          ],
          valueAdd:
            "Modular, lightweight AI components that integrate smoothly with your existing systems to optimize business functions.",
          cta: {
            title:
              "Need intelligent components for your current platform? Get a Free Consultation.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom AI Software Development",
              url: "#custom-ai-software-development",
            },
            {
              title: "Generative AI Development",
              url: "#generative-ai-development",
            },
            {
              title: "AI Training",
              url: "#ai-training",
            },
          ],
        },
        {
          heading: "AI Enablement & Team Training",
          description:
            "We don’t just build AI—we help you adopt and evolve it. Our enablement programs ensure your teams understand, manage, and scale AI solutions confidently, with full transparency.",
          offerings: [
            "Executive AI briefings & roadmap alignment",
            "Workshops on ML, GenAI, and prompt engineering",
            "Internal documentation & knowledge transfer",
            "Building internal AI champions and CoEs",
          ],
          valueAdd:
            "Tailored AI enablement and training to empower your team to confidently manage, scale, and sustain AI technologies across your organization.",
          cta: {
            title:
              "Empower your team for AI success? Request a free consultation.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom AI Software Development",
              url: "#custom-ai-software-development",
            },
            {
              title: "Generative AI Development",
              url: "#generative-ai-development",
            },
            {
              title: "AI Component Development",
              url: "#ai-component-development",
            },
          ],
        },
      ],
      footer: {
        description:
          "Every business challenge is unique—your AI solution should be too. With HADITA, you get custom-built intelligence that delivers real results, not one-size-fits-all algorithms.",
        cta: {
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "data-analytics",
      title: "Data & Analytics Consulting",
      description:
        "At HADITA, we empower organizations to unlock the true value of their data. From raw, scattered information to clear, actionable insights—we help you build a data-first culture that drives agility, accuracy, and business growth. Our data & analytics services are built to transform how you operate, strategize, and compete in a digital world.",
      content: [
        {
          heading: "Business Intelligence (BI) Solutions",
          description:
            "Interactive dashboards and KPIs for real-time decision-making—using tools like Power BI, Tableau, and Looker.",
          offerings: [
            "Real-time dashboards",
            "Custom KPIs",
            "Power BI, Tableau, and Looker expertise",
            "Data visualization for executive decision-making",
          ],
          valueAdd:
            "Empower your team with intuitive, real-time insights through interactive BI solutions that enhance decision-making at all levels.",
          cta: {
            title: "Speak to our Data Consultant Now!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Data Strategy & Architecture",
              url: "#data-strategy-architecture",
            },
            {
              title: "Advanced Analytics & Forecasting",
              url: "#advanced-analytics-forecasting",
            },
            {
              title: "ETL & Data Integration",
              url: "#etl-data-integration",
            },
            {
              title: "Data Governance & Quality Frameworks",
              url: "#data-governance-quality",
            },
          ],
        },
        {
          heading: "Data Strategy & Architecture",
          description:
            "Define your enterprise data roadmap, implement scalable architectures, and modernize your data infrastructure across cloud, hybrid, or on-prem environments.",
          offerings: [
            "Data architecture design",
            "Cloud, hybrid, and on-prem architecture solutions",
            "Enterprise data roadmap planning",
            "Modernizing legacy data systems",
          ],
          valueAdd:
            "Create a robust, scalable data infrastructure to support your business goals and future-proof your organization’s data needs.",
          cta: {
            title: "Want to build a data strategy? Speak to our Expert!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Business Intelligence (BI) Solutions",
              url: "#business-intelligence-solutions",
            },
            {
              title: "Advanced Analytics & Forecasting",
              url: "#advanced-analytics-forecasting",
            },
            {
              title: "ETL & Data Integration",
              url: "#etl-data-integration",
            },
            {
              title: "Data Governance & Quality Frameworks",
              url: "#data-governance-quality",
            },
          ],
        },
        {
          heading: "Advanced Analytics & Forecasting",
          description:
            "Predictive modeling, customer segmentation, churn analysis, and anomaly detection using machine learning.",
          offerings: [
            "Predictive analytics & modeling",
            "Customer segmentation and targeting",
            "Churn analysis and retention modeling",
            "Anomaly detection using AI",
          ],
          valueAdd:
            "Leverage machine learning and advanced analytics to drive smarter decisions, improve customer retention, and predict future business trends.",
          cta: {
            title:
              "Unlock predictive insights for your business. Get in touch today!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Business Intelligence (BI) Solutions",
              url: "#business-intelligence-solutions",
            },
            {
              title: "Data Strategy & Architecture",
              url: "#data-strategy-architecture",
            },
            {
              title: "ETL & Data Integration",
              url: "#etl-data-integration",
            },
            {
              title: "Data Governance & Quality Frameworks",
              url: "#data-governance-quality",
            },
          ],
        },
        {
          heading: "ETL & Data Integration",
          description:
            "Seamless data extraction, cleansing, and consolidation from multiple sources (ERP, CRM, cloud platforms) into unified, analytics-ready formats.",
          offerings: [
            "Data extraction from multiple sources",
            "Data cleansing and transformation",
            "Integration with ERP, CRM, cloud platforms",
            "Unified, analytics-ready data formats",
          ],
          valueAdd:
            "Ensure smooth data flows across your systems with efficient ETL processes and seamless integration, enabling better decision-making with clean, consolidated data.",
          cta: {
            title: "Need ETL and data integration services? Speak to our Team.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Business Intelligence (BI) Solutions",
              url: "#business-intelligence-solutions",
            },
            {
              title: "Data Strategy & Architecture",
              url: "#data-strategy-architecture",
            },
            {
              title: "Advanced Analytics & Forecasting",
              url: "#advanced-analytics-forecasting",
            },
            {
              title: "Data Governance & Quality Frameworks",
              url: "#data-governance-quality",
            },
          ],
        },
        {
          heading: "Data Governance & Quality Frameworks",
          description:
            "Ensure data consistency, privacy compliance (GDPR, HIPAA), and high-quality pipelines for trusted insights.",
          offerings: [
            "Data quality management",
            "Privacy compliance (GDPR, HIPAA)",
            "Data pipeline optimization",
            "End-to-end data governance",
          ],
          valueAdd:
            "Guarantee trusted insights and regulatory compliance by implementing rigorous data governance and quality management frameworks.",
          cta: {
            title:
              "Ensure your data is reliable and compliant. Speak to our Consultant.",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Business Intelligence (BI) Solutions",
              url: "#business-intelligence-solutions",
            },
            {
              title: "Data Strategy & Architecture",
              url: "#data-strategy-architecture",
            },
            {
              title: "Advanced Analytics & Forecasting",
              url: "#advanced-analytics-forecasting",
            },
            {
              title: "ETL & Data Integration",
              url: "#etl-data-integration",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you’re building a data lake, implementing enterprise dashboards, or launching a full analytics CoE—HADITA is your strategic partner for intelligent data transformation.",
        cta: {
          title: "Talk to our Data Consultant Now!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "data-science-as-a-service",
      title: "Data Science Solutions",
      description:
        "At HADITA, we specialize in turning complex data into actionable insights. Our advanced Data Science solutions empower organizations to make data-driven decisions that drive innovation, optimize processes, and improve outcomes. With the right tools, models, and strategies, we help businesses tap into the full potential of their data to unlock new opportunities.",
      content: [
        {
          heading: "Data Strategy & Consulting",
          description:
            "Define a clear, comprehensive data strategy aligned with your business goals. We help you design the right roadmap to ensure data is used as a strategic asset.",
          offerings: [
            "Data roadmap design and implementation",
            "Strategic alignment with business objectives",
            "Data governance frameworks",
          ],
          valueAdd:
            "Ensure that your data is optimized as a strategic asset for smarter decisions and long-term business success.",
          cta: {
            title: "Speak to our Data Strategy Consultant!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Predictive Analytics",
              url: "#predictive-analytics",
            },
            {
              title: "Machine Learning Model Development",
              url: "#machine-learning-model-development",
            },
            {
              title: "Data Engineering & Integration",
              url: "#data-engineering-integration",
            },
            {
              title: "Text Analytics & NLP",
              url: "#text-analytics-nlp",
            },
          ],
        },
        {
          heading: "Predictive Analytics",
          description:
            "Build predictive models that forecast trends, customer behaviors, and operational outcomes, enabling smarter decision-making and proactive action.",
          offerings: [
            "Customer behavior forecasting",
            "Market trend analysis",
            "Operational outcome prediction",
          ],
          valueAdd:
            "Leverage predictive insights to drive proactive strategies and decisions for sustained business growth.",
          cta: {
            title: "Speak to our Predictive Analytics Expert!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Data Strategy & Consulting",
              url: "#data-strategy-consulting",
            },
            {
              title: "Machine Learning Model Development",
              url: "#machine-learning-model-development",
            },
          ],
        },
        {
          heading: "Machine Learning Model Development",
          description:
            "Create custom machine learning models for classification, regression, clustering, and optimization, tailored to solve your specific business challenges.",
          offerings: [
            "Custom ML model development",
            "Classification and regression models",
            "Clustering and optimization solutions",
          ],
          valueAdd:
            "Unlock actionable insights by leveraging advanced machine learning techniques tailored to your business challenges.",
          cta: {
            title: "Talk to our Machine Learning Expert!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Predictive Analytics",
              url: "#predictive-analytics",
            },
            {
              title: "Data Engineering & Integration",
              url: "#data-engineering-integration",
            },
          ],
        },
        {
          heading: "Data Engineering & Integration",
          description:
            "Design robust data pipelines to streamline data collection, processing, and integration from diverse sources, ensuring high-quality data for analysis.",
          offerings: [
            "ETL process design and implementation",
            "Data pipeline integration",
            "Data quality assurance",
          ],
          valueAdd:
            "Ensure seamless data flow across systems and reliable data pipelines that provide the foundation for accurate analysis and decision-making.",
          cta: {
            title: "Speak to our Data Engineering Consultant!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Predictive Analytics",
              url: "#predictive-analytics",
            },
            {
              title: "Machine Learning Model Development",
              url: "#machine-learning-model-development",
            },
          ],
        },
        {
          heading: "Advanced Statistical Analysis",
          description:
            "Utilize advanced statistical methods and techniques to uncover insights from large datasets, enabling better insights into customer behavior, market trends, and operational performance.",
          offerings: [
            "Statistical analysis and modeling",
            "Hypothesis testing",
            "Advanced data exploration techniques",
          ],
          valueAdd:
            "Enhance data-driven decision-making by utilizing robust statistical methods that bring clarity to your business performance and trends.",
          cta: {
            title: "Talk to our Data Scientist for Statistical Insights!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Data Strategy & Consulting",
              url: "#data-strategy-consulting",
            },
            {
              title: "Data Visualization & Reporting",
              url: "#data-visualization-reporting",
            },
          ],
        },
        {
          heading: "Data Visualization & Reporting",
          description:
            "Convert complex data into easy-to-understand visualizations that enable actionable insights. Dashboards, charts, and reports that highlight key performance indicators (KPIs).",
          offerings: [
            "Custom dashboards and reporting tools",
            "Data visualization for business intelligence",
            "KPI tracking and reporting",
          ],
          valueAdd:
            "Transform complex data into meaningful insights through intuitive visualizations and dashboards that empower timely, informed decision-making.",
          cta: {
            title: "Speak to our Data Visualization Expert!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Advanced Statistical Analysis",
              url: "#advanced-statistical-analysis",
            },
            {
              title: "Text Analytics & NLP",
              url: "#text-analytics-nlp",
            },
          ],
        },
        {
          heading: "Text Analytics & Natural Language Processing (NLP)",
          description:
            "Extract insights from unstructured data using text mining, sentiment analysis, and NLP techniques to gain valuable insights from customer feedback, reviews, and other textual data sources.",
          offerings: [
            "Sentiment analysis",
            "Text mining and extraction",
            "NLP for customer feedback and reviews",
          ],
          valueAdd:
            "Unlock valuable insights from unstructured data, enhancing customer understanding and improving business strategies through NLP techniques.",
          cta: {
            title: "Speak to our NLP Expert!",
            buttonText: "Request Consultation",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Data Strategy & Consulting",
              url: "#data-strategy-consulting",
            },
            {
              title: "Data Visualization & Reporting",
              url: "#data-visualization-reporting",
            },
          ],
        },
      ],
      footer: {
        description:
          "Unlock the power of your data and fuel business growth with our data science solutions, tailored to meet your organization’s unique needs.",
        cta: {
          title: "Schedule a Free Consultation with our Data Scientists!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "digital-enablement",
      title: "Digital Enablement",
      description:
        "At HADITA, we offer a comprehensive suite of services designed to elevate your brand in the digital world. Whether you’re looking to develop a dynamic website, boost your digital marketing efforts, or enhance your online visibility with SEO, we are here to help you succeed. Our team of experts works with you to create tailored solutions that not only meet your business goals but also provide a seamless, engaging experience for your audience. Partner with us to build a robust online presence, drive growth, and stay ahead of the competition in today’s fast-paced digital landscape.",
      content: [
        {
          heading: "Website Development",
          description:
            "At HADITA, we specialize in creating responsive and user-friendly websites tailored to your business objectives. Our services encompass:",
          offerings: [
            "Custom Web Design: Developing unique, visually appealing designs that align with your brand identity.",
            "E-commerce Solutions: Building secure and scalable online stores to enhance your sales performance.",
            "Content Management Systems (CMS): Implementing platforms like WordPress and Joomla for easy content updates.",
            "Web Application Development: Delivering robust applications to streamline your business processes.",
          ],
          valueAdd:
            "Partner with us to transform your digital presence and engage effectively with your audience.",
          cta: {
            title: "Request a Free Website Development Consultation!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Digital Marketing",
              url: "#digital-marketing",
            },
            {
              title: "Search Engine Optimization (SEO)",
              url: "#seo",
            },
          ],
        },
        {
          heading: "Digital Marketing",
          description:
            "Our comprehensive digital marketing services are designed to elevate your brand's online presence:",
          offerings: [
            "Social Media Marketing (SMM): Leveraging platforms like Facebook, Instagram, and LinkedIn to connect with your target audience.",
            "Pay-Per-Click (PPC) Advertising: Managing targeted ad campaigns to drive immediate traffic and conversions.",
            "Email Marketing: Crafting personalized campaigns to nurture leads and retain customers.",
            "Content Marketing: Developing valuable content to engage users and establish brand authority.",
          ],
          valueAdd:
            "Book a free consultation to elevate your digital marketing strategy and enhance your online presence.",
          cta: {
            title: "Request a Free Digital Marketing Consultation!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Website Development",
              url: "#website-development",
            },
            {
              title: "Search Engine Optimization (SEO)",
              url: "#seo",
            },
          ],
        },
        {
          heading: "Search Engine Optimization (SEO)",
          description:
            "Our SEO services are focused on improving your website's ranking on search engines, thereby increasing organic traffic:",
          offerings: [
            "On-Page SEO: Optimizing website elements like meta tags, headers, and content for relevant keywords.",
            "Off-Page SEO: Building quality backlinks and enhancing domain authority through ethical practices.",
            "Technical SEO: Ensuring your website's technical aspects, such as site speed and mobile-friendliness, meet search engine standards.",
            "Local SEO: Optimizing your online presence to attract local customers and improve regional search rankings.",
          ],
          valueAdd:
            "Book a free consultation to boost your search engine rankings and drive targeted traffic to your site.",
          cta: {
            title: "Request an SEO Consultation!",
            buttonText: "Submit",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Website Development",
              url: "#website-development",
            },
            {
              title: "Digital Marketing",
              url: "#digital-marketing",
            },
          ],
        },
      ],
      footer: {
        description:
          "At HADITA, we combine creativity, strategy, and technology to deliver exceptional website development, digital marketing, and SEO services tailored to your business needs.",
        cta: {
          title:
            "Let’s Build Something Great Together! Book a Free Consultation.",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "web-development",
      title: "Website Development Services",
      description:
        "At HADITA, we don’t just build websites—we craft high-performing digital platforms that deliver seamless user experiences, drive engagement, and elevate your brand’s digital presence. Whether you're a startup, a scaling business, or an enterprise, we offer end-to-end website development services that align technology with business strategy.",
      content: [
        {
          heading: "Custom Website Development",
          description:
            "Tailor-made websites that reflect your brand, attract customers, and create lasting impressions.",
          offerings: [
            "Custom website design and development",
            "Responsive design for seamless user experience",
            "User-centric UI/UX design",
            "Scalable architecture for future growth",
            "Performance optimization for faster load times",
          ],
          valueAdd:
            "Tailored designs that match your business needs, built with the latest technologies to ensure speed, performance, and scalability.",
          cta: {
            title: "Speak to our Website Development Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "E-Commerce Development",
              url: "#e-commerce-development",
            },
            {
              title: "Web Application Development",
              url: "#web-application-development",
            },
            {
              title: "Mobile-Responsive Development",
              url: "#mobile-responsive-development",
            },
            {
              title: "Security & Performance Optimization",
              url: "#security-performance-optimization",
            },
            {
              title: "CMS Development",
              url: "#cms-development",
            },
          ],
        },
        {
          heading: "E-Commerce Development",
          description:
            "Launch scalable, secure, and high-performance online stores that drive conversions.",
          offerings: [
            "E-commerce platform development (Shopify, WooCommerce, Magento)",
            "Custom cart, checkout, and payment gateway integration",
            "Product management, inventory systems, and order tracking",
            "Customer account management and security features",
            "SEO-friendly design and optimized for conversions",
          ],
          valueAdd:
            "Scalable e-commerce platforms that provide an easy-to-manage storefront, secure payment systems, and seamless customer experiences.",
          cta: {
            title: "Talk to Our E-Commerce Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom Website Development",
              url: "#custom-website-development",
            },
            {
              title: "Web Application Development",
              url: "#web-application-development",
            },
            {
              title: "Mobile-Responsive Development",
              url: "#mobile-responsive-development",
            },
            {
              title: "Security & Performance Optimization",
              url: "#security-performance-optimization",
            },
            {
              title: "CMS Development",
              url: "#cms-development",
            },
          ],
        },
        {
          heading: "Web Application Development",
          description:
            "Create custom web applications that solve unique business challenges and enhance operational efficiency.",
          offerings: [
            "Custom web applications for businesses",
            "Full-stack development (React, Angular, Node.js, Python)",
            "Cloud-based application integration",
            "API development and third-party integrations",
            "Data management systems and analytics tools",
          ],
          valueAdd:
            "Robust, user-friendly web apps that streamline your business operations, built for scalability, flexibility, and performance.",
          cta: {
            title: "Get Your Web Application Built!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom Website Development",
              url: "#custom-website-development",
            },
            {
              title: "E-Commerce Development",
              url: "#e-commerce-development",
            },
            {
              title: "Mobile-Responsive Development",
              url: "#mobile-responsive-development",
            },
            {
              title: "Security & Performance Optimization",
              url: "#security-performance-optimization",
            },
            {
              title: "CMS Development",
              url: "#cms-development",
            },
          ],
        },
        {
          heading: "Mobile-Responsive Development",
          description:
            "Ensure your website looks and performs perfectly on all devices, from mobile phones to desktop computers.",
          offerings: [
            "Mobile-first design strategy",
            "Responsive layout design for multi-device compatibility",
            "Cross-browser compatibility and testing",
            "User experience optimization for touchscreens",
            "Fast loading times on mobile devices",
          ],
          valueAdd:
            "Provide an optimal user experience on every device, keeping your brand consistent and accessible across all screen sizes.",
          cta: {
            title: "Optimize Your Website for Mobile!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom Website Development",
              url: "#custom-website-development",
            },
            {
              title: "E-Commerce Development",
              url: "#e-commerce-development",
            },
            {
              title: "Web Application Development",
              url: "#web-application-development",
            },
            {
              title: "Security & Performance Optimization",
              url: "#security-performance-optimization",
            },
            {
              title: "CMS Development",
              url: "#cms-development",
            },
          ],
        },
        {
          heading: "Security & Performance Optimization",
          description:
            "Protect your website and ensure fast loading times for a flawless user experience.",
          offerings: [
            "SSL certificate integration for secure browsing",
            "Speed optimization (image compression, code minification)",
            "Security best practices (firewall, DDoS protection)",
            "Performance monitoring and tuning",
            "Regular updates and patch management",
          ],
          valueAdd:
            "Maximize site speed and security to provide a secure, fast, and seamless browsing experience for your users.",
          cta: {
            title: "Enhance Your Website's Security & Speed!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom Website Development",
              url: "#custom-website-development",
            },
            {
              title: "E-Commerce Development",
              url: "#e-commerce-development",
            },
            {
              title: "Web Application Development",
              url: "#web-application-development",
            },
            {
              title: "Mobile-Responsive Development",
              url: "#mobile-responsive-development",
            },
            {
              title: "CMS Development",
              url: "#cms-development",
            },
          ],
        },
        {
          heading: "CMS Development",
          description:
            "Empower your team to easily manage content with flexible, user-friendly content management systems.",
          offerings: [
            "WordPress, Joomla, and Drupal development",
            "Custom CMS development for tailored functionality",
            "Theme and plugin development",
            "Content migration and integration",
            "SEO optimization for better content visibility",
          ],
          valueAdd:
            "Create websites that allow you to manage content effortlessly, empowering your team to focus on what matters most—your business.",
          cta: {
            title: "Create Your Custom CMS Today!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Custom Website Development",
              url: "#custom-website-development",
            },
            {
              title: "E-Commerce Development",
              url: "#e-commerce-development",
            },
            {
              title: "Web Application Development",
              url: "#web-application-development",
            },
            {
              title: "Mobile-Responsive Development",
              url: "#mobile-responsive-development",
            },
            {
              title: "Security & Performance Optimization",
              url: "#security-performance-optimization",
            },
          ],
        },
      ],
      footer: {
        description:
          "Let HADITA transform your vision into a powerful online presence. Whether you're revamping an old site or launching a new one, our experts are ready to deliver a high-quality website that converts.",
        cta: {
          title: "Book a Consultation!",
          form: {
            name: "Name",
            mobile: "Mobile",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "seo-services",
      title: "Search Engine Optimization (SEO) Services",
      description:
        "In today’s digital world, if your business isn’t on the first page of search results, it might as well be invisible. At HADITA, we help you rise above the noise with strategic SEO solutions designed to improve your search rankings, drive qualified traffic, and convert visitors into loyal customers. Our approach blends creativity with data and technical precision to build a long-term organic growth engine for your business.",
      content: [
        {
          heading: "Technical SEO",
          description:
            "We start from the foundation. Our experts ensure your website is fast, mobile-friendly, secure, and technically optimized for search engines to crawl and index effectively.",
          offerings: [
            "Site Speed Optimization",
            "Mobile Responsiveness",
            "Schema Markup Implementation",
            "Crawlability & Indexing Improvements",
            "XML Sitemaps & Robots.txt Optimization",
            "Core Web Vitals Optimization",
          ],
          valueAdd:
            "A solid technical foundation that ensures optimal website performance and search engine visibility, setting the stage for organic growth.",
          cta: {
            title: "Talk to Our Technical SEO Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "On-Page SEO",
              url: "#on-page-seo",
            },
            {
              title: "Off-Page SEO & Link Building",
              url: "#off-page-seo-link-building",
            },
            {
              title: "Local SEO",
              url: "#local-seo",
            },
            {
              title: "E-Commerce SEO",
              url: "#e-commerce-seo",
            },
            {
              title: "SEO Audits & Analytics",
              url: "#seo-audits-analytics",
            },
          ],
        },
        {
          heading: "On-Page SEO",
          description:
            "Content is key—but structure is just as important. We fine-tune every element of your web pages to improve relevance, clarity, and keyword alignment.",
          offerings: [
            "Keyword Research & Mapping",
            "Meta Tags Optimization (Title, Description, Alt Text)",
            "Internal Linking Strategy",
            "Content Optimization for SEO",
            "UX Enhancements",
            "Image SEO",
          ],
          valueAdd:
            "Optimized content and structure that enhances your website’s relevance, improving search rankings and delivering a better user experience.",
          cta: {
            title: "Get Your On-Page SEO Improved!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Technical SEO",
              url: "#technical-seo",
            },
            {
              title: "Off-Page SEO & Link Building",
              url: "#off-page-seo-link-building",
            },
            {
              title: "Local SEO",
              url: "#local-seo",
            },
            {
              title: "E-Commerce SEO",
              url: "#e-commerce-seo",
            },
            {
              title: "SEO Audits & Analytics",
              url: "#seo-audits-analytics",
            },
          ],
        },
        {
          heading: "Off-Page SEO & Link Building",
          description:
            "We strengthen your domain authority with ethical and strategic backlink-building techniques that establish your brand as a trustworthy source in your industry.",
          offerings: [
            "High-Quality Backlink Acquisition",
            "Guest Posting & PR Outreach",
            "Business Directory Listings",
            "Competitor Link Gap Analysis",
            "Influencer Collaboration for SEO",
          ],
          valueAdd:
            "Ethical backlinking strategies that not only improve your SEO but also enhance your online reputation and authority.",
          cta: {
            title: "Start Building Strong Backlinks!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Technical SEO",
              url: "#technical-seo",
            },
            {
              title: "On-Page SEO",
              url: "#on-page-seo",
            },
            {
              title: "Local SEO",
              url: "#local-seo",
            },
            {
              title: "E-Commerce SEO",
              url: "#e-commerce-seo",
            },
            {
              title: "SEO Audits & Analytics",
              url: "#seo-audits-analytics",
            },
          ],
        },
        {
          heading: "Local SEO",
          description:
            "Capture local customers by optimizing your Google Business Profile and ensuring consistency across directories. Perfect for clinics, cafes, retail outlets, and local service providers.",
          offerings: [
            "Google My Business Optimization",
            "Local Keywords Targeting",
            "Customer Review Strategy",
            "Location Pages & Maps Integration",
            "Citation Building",
          ],
          valueAdd:
            "Increase local visibility, capture foot traffic, and attract nearby customers with well-optimized location-based SEO strategies.",
          cta: {
            title: "Boost Your Local Search Rankings!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Technical SEO",
              url: "#technical-seo",
            },
            {
              title: "On-Page SEO",
              url: "#on-page-seo",
            },
            {
              title: "Off-Page SEO & Link Building",
              url: "#off-page-seo-link-building",
            },
            {
              title: "E-Commerce SEO",
              url: "#e-commerce-seo",
            },
            {
              title: "SEO Audits & Analytics",
              url: "#seo-audits-analytics",
            },
          ],
        },
        {
          heading: "E-Commerce SEO",
          description:
            "We help your products get discovered by optimizing product pages, descriptions, filters, and rich snippets to improve search visibility across e-commerce platforms.",
          offerings: [
            "Product Page Optimization",
            "SEO-Friendly URLs for Products",
            "Structured Data for Products",
            "Category/Filter SEO",
            "Image & Video SEO",
          ],
          valueAdd:
            "Enhance your product discoverability, improve visibility on major e-commerce platforms, and boost sales with strategic SEO for your store.",
          cta: {
            title: "Enhance Your E-Commerce SEO!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Technical SEO",
              url: "#technical-seo",
            },
            {
              title: "On-Page SEO",
              url: "#on-page-seo",
            },
            {
              title: "Off-Page SEO & Link Building",
              url: "#off-page-seo-link-building",
            },
            {
              title: "Local SEO",
              url: "#local-seo",
            },
            {
              title: "SEO Audits & Analytics",
              url: "#seo-audits-analytics",
            },
          ],
        },
        {
          heading: "SEO Audits & Analytics",
          description:
            "Our comprehensive audits uncover what’s holding your site back. Get detailed insights and recommendations, followed by continuous monitoring of KPIs and SEO health.",
          offerings: [
            "SEO Site Audits & Reports",
            "Performance Analytics & Insights",
            "Continuous SEO Health Monitoring",
            "Competitor & Keyword Analysis",
            "Monthly Performance Reporting",
          ],
          valueAdd:
            "Actionable insights and data-driven strategies to continuously improve and adapt your SEO efforts for sustained growth.",
          cta: {
            title: "Get Your Free SEO Audit!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Technical SEO",
              url: "#technical-seo",
            },
            {
              title: "On-Page SEO",
              url: "#on-page-seo",
            },
            {
              title: "Off-Page SEO & Link Building",
              url: "#off-page-seo-link-building",
            },
            {
              title: "Local SEO",
              url: "#local-seo",
            },
            {
              title: "E-Commerce SEO",
              url: "#e-commerce-seo",
            },
          ],
        },
      ],
      footer: {
        description:
          "Let HADITA help you dominate search engine rankings, drive quality traffic, and grow your business organically. Our full-service SEO solutions are designed to put your brand on the map.",
        cta: {
          title: "Book Your Free SEO Audit Today!",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "digital-marketing-services",
      title: "Digital Marketing Services",
      description:
        "Power Your Brand’s Growth. Reach, Engage & Convert with HADITA.",
      content: [
        {
          heading: "Social Media Marketing (SMM)",
          description:
            "Grow your community, amplify your voice, and build a brand that connects. We create platform-specific content and campaigns that spark engagement and conversions.",
          offerings: [
            "Campaign Management",
            "Content Calendars",
            "Influencer Partnerships",
            "Ad Management",
          ],
          valueAdd:
            "Targeted campaigns that build a loyal audience and drive measurable results on platforms like Instagram, Facebook, LinkedIn, and TikTok.",
          cta: {
            title: "Speak to our Social Media Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Search Engine Marketing (SEM)",
              url: "#search-engine-marketing-sem",
            },
            {
              title: "Email Marketing & Automation",
              url: "#email-marketing-automation",
            },
            {
              title: "Content Marketing",
              url: "#content-marketing",
            },
            {
              title: "E-Commerce & Marketplace Marketing",
              url: "#e-commerce-marketplace-marketing",
            },
            {
              title: "Analytics & Conversion Rate Optimization (CRO)",
              url: "#analytics-cro",
            },
          ],
        },
        {
          heading: "Search Engine Marketing (SEM / PPC)",
          description:
            "Get instant visibility and qualified leads through targeted paid ad campaigns. We manage every step—from keyword research to A/B testing and budget optimization.",
          offerings: [
            "Search Ads",
            "Shopping Ads",
            "Remarketing",
            "Performance Analytics",
          ],
          valueAdd:
            "Maximize ROI through precision-targeted PPC campaigns on Google, Bing, and YouTube.",
          cta: {
            title: "Speak to our SEM Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Social Media Marketing (SMM)",
              url: "#social-media-marketing-smm",
            },
            {
              title: "Email Marketing & Automation",
              url: "#email-marketing-automation",
            },
            {
              title: "Content Marketing",
              url: "#content-marketing",
            },
            {
              title: "E-Commerce & Marketplace Marketing",
              url: "#e-commerce-marketplace-marketing",
            },
            {
              title: "Analytics & Conversion Rate Optimization (CRO)",
              url: "#analytics-cro",
            },
          ],
        },
        {
          heading: "Email Marketing & Automation",
          description:
            "Drive retention and repeat sales with personalized email campaigns. From newsletters to drip sequences, we create content that converts.",
          offerings: [
            "Campaign Design",
            "Segmentation",
            "Automation",
            "Analytics",
          ],
          valueAdd:
            "Tailored email strategies that nurture leads, improve engagement, and drive conversions with tools like Mailchimp, HubSpot, and Klaviyo.",
          cta: {
            title: "Speak to our Email Marketing Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Social Media Marketing (SMM)",
              url: "#social-media-marketing-smm",
            },
            {
              title: "Search Engine Marketing (SEM)",
              url: "#search-engine-marketing-sem",
            },
            {
              title: "Content Marketing",
              url: "#content-marketing",
            },
            {
              title: "E-Commerce & Marketplace Marketing",
              url: "#e-commerce-marketplace-marketing",
            },
            {
              title: "Analytics & Conversion Rate Optimization (CRO)",
              url: "#analytics-cro",
            },
          ],
        },
        {
          heading: "Content Marketing",
          description:
            "Build thought leadership and rank better with engaging, SEO-rich content. We craft blog articles, videos, case studies, infographics, and more to connect your brand with your audience.",
          offerings: [
            "Blog Writing",
            "Video Scripting",
            "Content Strategy",
            "Landing Pages",
          ],
          valueAdd:
            "Create high-quality content that boosts brand credibility, drives traffic, and improves SEO rankings.",
          cta: {
            title: "Speak to our Content Marketing Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Social Media Marketing (SMM)",
              url: "#social-media-marketing-smm",
            },
            {
              title: "Search Engine Marketing (SEM)",
              url: "#search-engine-marketing-sem",
            },
            {
              title: "Email Marketing & Automation",
              url: "#email-marketing-automation",
            },
            {
              title: "E-Commerce & Marketplace Marketing",
              url: "#e-commerce-marketplace-marketing",
            },
            {
              title: "Analytics & Conversion Rate Optimization (CRO)",
              url: "#analytics-cro",
            },
          ],
        },
        {
          heading: "E-Commerce & Marketplace Marketing",
          description:
            "We optimize your digital storefronts and run high-ROI campaigns on platforms like Amazon, Flipkart, Noon, and Shopify.",
          offerings: [
            "Product Listing Optimization",
            "Sponsored Ads",
            "Conversion Funnel Optimization",
          ],
          valueAdd:
            "Optimize product visibility and sales with targeted strategies across e-commerce platforms like Amazon, Flipkart, and Shopify.",
          cta: {
            title: "Speak to our E-Commerce Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Social Media Marketing (SMM)",
              url: "#social-media-marketing-smm",
            },
            {
              title: "Search Engine Marketing (SEM)",
              url: "#search-engine-marketing-sem",
            },
            {
              title: "Email Marketing & Automation",
              url: "#email-marketing-automation",
            },
            {
              title: "Content Marketing",
              url: "#content-marketing",
            },
            {
              title: "Analytics & Conversion Rate Optimization (CRO)",
              url: "#analytics-cro",
            },
          ],
        },
        {
          heading: "Analytics & Conversion Rate Optimization (CRO)",
          description:
            "Every campaign is backed by insights. We continuously monitor, test, and refine strategies to improve ROI.",
          offerings: [
            "Dashboard Setup",
            "Heatmaps",
            "A/B Testing",
            "Funnel Optimization",
          ],
          valueAdd:
            "Data-driven optimization strategies to increase conversions and ensure measurable campaign success.",
          cta: {
            title: "Speak to our CRO Expert!",
            buttonText: "Request Call Back",
            form: {
              name: "Name",
              mobile: "Mobile#",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Social Media Marketing (SMM)",
              url: "#social-media-marketing-smm",
            },
            {
              title: "Search Engine Marketing (SEM)",
              url: "#search-engine-marketing-sem",
            },
            {
              title: "Email Marketing & Automation",
              url: "#email-marketing-automation",
            },
            {
              title: "Content Marketing",
              url: "#content-marketing",
            },
            {
              title: "E-Commerce & Marketplace Marketing",
              url: "#e-commerce-marketplace-marketing",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're launching a startup or expanding your digital presence, HADITA’s digital marketing expertise ensures you’re reaching the right people—at the right time—on the right channels.",
        cta: {
          title: "Book a Free Strategy Session!",
          form: {
            name: "Name",
            mobile: "Mobile",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "sap-business-one",
      title: "SAP Services",
      description:
        "SAP Business One is a cost-effective ERP for SMEs. HADITA helps businesses deploy and optimize this solution to manage finance, operations, inventory, and customer relationships under one integrated platform.",
      content: [
        {
          id: "sap-business-one",
          heading: "SAP Business One",
          description:
            "SAP Business One is a comprehensive ERP solution designed for SMEs. HADITA provides end-to-end services to implement, customize, and optimize SAP B1 to streamline your finance, operations, inventory, and customer relationship management.",
          offerings: [
            "Rapid Implementation",
            "Customization & Add-On Development",
            "User Training & Enablement",
            "Support and Troubleshooting",
            "Process optimization and workflow automation",
            "Integration with third-party systems",
          ],
          valueAdd:
            "Our localized approach ensures quick go-live with minimal disruption. We enable SMEs to scale effectively with reliable reporting, inventory accuracy, and improved customer service through SAP B1.",
          cta: {
            title:
              "Get in touch today to transform your finance, operations, and customer experience with SAP B1!",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "SAP S/4HANA Migration",
              url: "/services/sap-s4hana-migration",
            },
            {
              title: "SAP Implementation and Rollout",
              url: "/services/sap-implementation",
            },
            {
              title: "SAP Cloud Services",
              url: "/services/sap-cloud-services",
            },
            {
              title: "SAP Upgrade Services",
              url: "/services/sap-upgrade-services",
            },
            {
              title: "SAP Support and Maintenance",
              url: "/services/sap-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're implementing SAP Business One for the first time, customizing it for your unique business needs, or looking for ongoing support - HADITA is your trusted SAP partner for SMEs.",
        cta: {
          title: "Book a Free SAP Consultation",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "sap-s4hana-migration",
      title: "SAP Services",
      description:
        "Partnering with Incresol, HADITA offers a structured approach to migrating from legacy SAP systems or ECC to SAP S/4HANA, leveraging Incresol's migration frameworks and best practices.",
      content: [
        {
          id: "sap-s4hana-migration",
          heading: "SAP S/4HANA Migration",
          description:
            "HADITA provides comprehensive migration services to transition your business from legacy SAP systems or ECC to the intelligent ERP suite SAP S/4HANA. Our partnership with Incresol ensures proven methodologies and best practices for a smooth transformation.",
          offerings: [
            "System Readiness Assessment",
            "Greenfield or Brownfield Migration",
            "Post-Migration Optimization",
            "Hybrid Cloud Deployment",
            "Data migration and transformation",
            "Custom code adaptation",
            "Testing and validation",
          ],
          valueAdd:
            "We bring S/4HANA transformation without disrupting ongoing operations, reducing TCO, and increasing system intelligence and business responsiveness. Our phased approach minimizes risk while maximizing the value of your S/4HANA investment.",
          cta: {
            title:
              "Accelerate your SAP S/4HANA migration with HADITA—seamless transition, smarter systems, and zero disruption. Contact us today!",
            buttonText: "Request Migration Assessment",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "SAP Business One",
              url: "/services/sap-business-one",
            },
            {
              title: "SAP S/4HANA Migration",
              url: "/services/sap-s4hana-migration",
            },
            {
              title: "SAP Implementation and Rollout",
              url: "/services/sap-implementation",
            },
            {
              title: "SAP Cloud Services",
              url: "/services/sap-cloud-services",
            },
            {
              title: "SAP Upgrade Services",
              url: "/services/sap-upgrade-services",
            },
            {
              title: "SAP Support and Maintenance",
              url: "/services/sap-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're planning your first move to S/4HANA or optimizing an existing implementation, HADITA's migration expertise ensures you unlock the full potential of SAP's next-generation ERP.",
        cta: {
          title: "Get Your Free S/4HANA Migration Assessment",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "sap-implementation",
      title: "SAP Services",
      description:
        "From discovery to deployment, HADITA provides SAP implementation services that align with your business goals using global methodologies and regional expertise.",
      content: [
        {
          id: "sap-implementation-rollout",
          heading: "SAP Implementation & Rollout",
          description:
            "HADITA delivers end-to-end SAP implementation services combining global best practices with local business understanding to ensure successful digital transformation.",
          offerings: [
            "Full-Cycle Implementation",
            "Regional Rollout Support",
            "Functional Enhancements",
            "Roll-in for Multinational Deployments",
            "Business process reengineering",
            "Data migration and cutover planning",
            "Post-go-live hypercare",
          ],
          valueAdd:
            "We focus on business continuity, user-centric configuration, and phased implementation strategies to maximize impact and user adoption.",
          cta: {
            title:
              "Drive successful SAP implementations with HADITA—global standards, regional insight, and business-aligned delivery from start to finish. Contact us today!",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "SAP Business One",
              url: "/services/sap-business-one",
            },
            {
              title: "SAP S/4HANA Migration",
              url: "/services/sap-s4hana-migration",
            },
            {
              title: "SAP Implementation and Rollout",
              url: "/services/sap-implementation",
            },
            {
              title: "SAP Cloud Services",
              url: "/services/sap-cloud-services",
            },
            {
              title: "SAP Upgrade Services",
              url: "/services/sap-upgrade-services",
            },
            {
              title: "SAP Support and Maintenance",
              url: "/services/sap-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you need a full-scale SAP implementation, regional rollout support, or multinational deployment coordination - HADITA combines global SAP expertise with local business understanding for successful transformations.",
        cta: {
          title: "Discuss Your SAP Implementation Needs",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "sap-cloud-services",
      title: "SAP Services",
      description:
        "HADITA facilitates the transition to SAP S/4HANA Cloud, empowering businesses with real-time data access, agility, and reduced infrastructure overhead.",
      content: [
        {
          id: "sap-cloud-services",
          heading: "SAP Cloud Services",
          description:
            "HADITA provides comprehensive SAP Cloud solutions to help businesses transition to SAP S/4HANA Cloud, enabling real-time data access, business agility, and reduced infrastructure complexity.",
          offerings: [
            "Cloud Strategy & Planning",
            "Public/Private Cloud Setup",
            "Data Security & Compliance",
            "Cloud Operations Management",
            "Hybrid cloud architecture design",
            "Performance optimization and monitoring",
            "Disaster recovery planning",
          ],
          valueAdd:
            "We combine the innovation of SAP Cloud with robust support to accelerate your digital transformation securely and sustainably.",
          cta: {
            title:
              "Unlock agility and innovation with HADITA—your trusted partner for secure, scalable SAP Cloud transformation. Contact us today!",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "SAP Business One",
              url: "/services/sap-business-one",
            },
            {
              title: "SAP S/4HANA Migration",
              url: "/services/sap-s4hana-migration",
            },
            {
              title: "SAP Implementation and Rollout",
              url: "/services/sap-implementation",
            },
            {
              title: "SAP Cloud Services",
              url: "/services/sap-cloud-services",
            },
            {
              title: "SAP Upgrade Services",
              url: "/services/sap-upgrade-services",
            },
            {
              title: "SAP Support and Maintenance",
              url: "/services/sap-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're moving to SAP Cloud for the first time or optimizing your existing cloud environment, HADITA provides the expertise to ensure a secure, high-performance SAP Cloud transformation.",
        cta: {
          title: "Discuss Your SAP Cloud Strategy",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "sap-upgrade-services",
      title: "SAP Services",
      description:
        "The 2027 SAP HANA Mandate: SAP has mandated that all current SAP ECC systems must be migrated to the SAP S/4HANA platform by 2027, as ECC will no longer receive standard support beyond that date. This upgrade isn't just a technical migration—it's a strategic move towards a more agile, real-time enterprise built on SAP's powerful in-memory HANA database and intelligent technologies.",
      content: [
        {
          id: "sap-upgrade-services",
          heading: "SAP Upgrade Services",
          description:
            "With SAP's announcement to end mainstream support for SAP ECC by 2027, organizations must plan their migration to SAP S/4HANA to stay current and compliant. In partnership with Incresol, HADITA can support you to upgrade SAP services to the latest SAP technologies efficiently.",
          offerings: [
            "SAP ECC to S/4HANA Upgrade (Greenfield or Brownfield)",
            "Technical and Functional Readiness Assessments",
            "Data Migration and Cleansing",
            "Process Reengineering and Fiori Enablement",
            "Post-Migration Optimization and Training",
            "System performance benchmarking",
            "Custom code adaptation",
          ],
          valueAdd:
            "HADITA is committed to guiding organizations across the Middle East through this critical upgrade journey with minimal business disruption. Our offerings include:\n- Local SAP experts with hands-on S/4HANA migration experience\n- Pre-assessment workshops to evaluate current SAP landscape readiness\n- Customized migration roadmap aligned with your business goals and timelines\n- Cost-effective support packages for SMEs and large enterprises\n- Ongoing post-upgrade maintenance and optimization to fully leverage S/4HANA capabilities\n\nWe ensure a smooth, secure, and scalable transition to S/4HANA, future-proofing your business and aligning with SAP's long-term vision for intelligent enterprise transformation.",
          cta: {
            title:
              "Future-proof your business with HADITA—seamlessly upgrade to SAP S/4HANA before 2027 with expert-led, disruption-free transformation. Contact us today!",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "SAP Business One",
              url: "/services/sap-business-one",
            },
            {
              title: "SAP S/4HANA Migration",
              url: "/services/sap-s4hana-migration",
            },
            {
              title: "SAP Implementation and Rollout",
              url: "/services/sap-implementation",
            },
            {
              title: "SAP Cloud Services",
              url: "/services/sap-cloud-services",
            },
            {
              title: "SAP Upgrade Services",
              url: "/services/sap-upgrade-services",
            },
            {
              title: "SAP Support and Maintenance",
              url: "/services/sap-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Don't wait until the 2027 deadline - start your SAP S/4HANA upgrade journey now with HADITA's proven methodology and regional expertise to ensure business continuity and maximize the value of your SAP investment.",
        cta: {
          title: "Schedule Your SAP Upgrade Assessment",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "sap-support-maintenance",
      title: "SAP Services",
      description:
        "Get end-to-end application management, real-time monitoring, issue resolution, and performance optimization for your SAP systems.",
      content: [
        {
          id: "sap-support-maintenance",
          heading: "SAP Support & Maintenance",
          description:
            "Comprehensive support services to keep your SAP systems running optimally with high availability and business continuity.",
          offerings: [
            "Managed SAP Services",
            "SLA-Based Support",
            "24/7 Monitoring & Helpdesk",
            "Functional and Technical Maintenance",
            "Performance tuning and optimization",
            "Patch management and version updates",
            "Custom code support and debugging",
          ],
          valueAdd:
            "We provide peace of mind through proactive SAP support tailored to your operational needs, ensuring high availability and business continuity.",
          cta: {
            title:
              "Ensure uninterrupted operations with HADITA—your reliable partner for proactive, round-the-clock SAP support and maintenance. Contact us today!",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "SAP Business One",
              url: "/services/sap-business-one",
            },
            {
              title: "SAP S/4HANA Migration",
              url: "/services/sap-s4hana-migration",
            },
            {
              title: "SAP Implementation and Rollout",
              url: "/services/sap-implementation",
            },
            {
              title: "SAP Cloud Services",
              url: "/services/sap-cloud-services",
            },
            {
              title: "SAP Upgrade Services",
              url: "/services/sap-upgrade-services",
            },
            {
              title: "SAP Support and Maintenance",
              url: "/services/sap-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "From routine maintenance to critical issue resolution, HADITA's SAP support services ensure your business systems remain stable, secure, and performing at their peak.",
        cta: {
          title: "Get Expert SAP Support",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "salesforce-implementation-services",
      title: "Salesforce CRM Solutions",
      description:
        "Delivering scalable CRM solutions using Salesforce's suite including Sales Cloud, Service Cloud, and Marketing Cloud, with end-to-end integration and support.",
      content: [
        {
          id: "salesforce-implementation-services",
          heading: "Salesforce Implementation Services",
          description:
            "Implement tailored Salesforce solutions based on your sales and service processes for accelerated CRM adoption.",
          offerings: [
            "Process Mapping & Configuration",
            "Data Migration & Setup",
            "App Customization",
            "Training & Hypercare",
            "User adoption strategies",
            "Change management support",
          ],
          valueAdd:
            "Our agile approach ensures a fast, efficient rollout with built-in scalability, helping you maximize Salesforce's full potential.",
          cta: {
            title:
              "Maximize your customer relationships with HADITA—agile, scalable Salesforce CRM solutions tailored for growth. Contact us today!",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Salesforce Implementation Services",
              url: "/services/salesforce-implementation-services",
            },
            {
              title: "Salesforce Integration Services",
              url: "/services/salesforce-integration-services",
            },
            {
              title: "Salesforce Support and Maintenance",
              url: "/services/salesforce-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you're implementing Salesforce for the first time, customizing it for your unique business processes, or looking for ongoing optimization - HADITA is your trusted Salesforce partner for CRM transformation.",
        cta: {
          title: "Book a Free Salesforce Consultation",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "salesforce-integration-services",
      title: "Salesforce Services",
      description:
        "We integrate Salesforce with ERPs, marketing automation tools, and custom platforms for unified data and improved collaboration.",
      content: [
        {
          id: "salesforce-integration-services",
          heading: "Salesforce Integration Services",
          description:
            "HADITA provides comprehensive Salesforce integration solutions to connect your CRM with other business systems, eliminating data silos and enabling seamless workflows across your organization.",
          offerings: [
            "API-Based Integration",
            "Middleware Configuration",
            "Legacy System Integration",
            "Cross-Platform Synchronization",
            "Real-time data sync solutions",
            "Custom connector development",
            "Integration monitoring and maintenance",
          ],
          valueAdd:
            "Our robust integration framework reduces data silos and operational friction, enabling connected customer experiences across all your business platforms.",
          cta: {
            title:
              "Seamless Salesforce integration for connected, data-driven operations! Contact us today.",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Salesforce Implementation Services",
              url: "/services/salesforce-implementation-services",
            },
            {
              title: "Salesforce Integration Services",
              url: "/services/salesforce-integration-services",
            },
            {
              title: "Salesforce Support and Maintenance",
              url: "/services/salesforce-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you need to connect Salesforce with your ERP, marketing tools, or custom applications, HADITA delivers reliable, scalable integration solutions that drive business efficiency.",
        cta: {
          title: "Get Started with Salesforce Integration",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "salesforce-support-maintenance",
      title: "Salesforce Services",
      description:
        "HADITA offers Salesforce administration, issue resolution, enhancements, and system scaling for long-term CRM success.",
      content: [
        {
          id: "salesforce-support-maintenance",
          heading: "Salesforce Support & Maintenance",
          description:
            "HADITA provides comprehensive Salesforce support and maintenance services to ensure your CRM platform remains optimized, secure, and aligned with your evolving business needs.",
          offerings: [
            "On-Demand Support",
            "Change Request Management",
            "Salesforce Health Checks",
            "Enhancement Services",
            "Performance optimization",
            "Security updates and compliance",
            "User training and adoption support",
          ],
          valueAdd:
            "We ensure your CRM evolves with your business, delivering reliability, user satisfaction, and consistent performance through proactive maintenance and strategic enhancements.",
          cta: {
            title:
              "Keep your Salesforce CRM running at its best with HADITA—reliable support, smart enhancements, and scalable performance for lasting success.",
            buttonText: "Request Call Back",
            form: {
              name: "Your Name",
              mobile: "Your Number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Salesforce Implementation Services",
              url: "/services/salesforce-implementation-services",
            },
            {
              title: "Salesforce Integration Services",
              url: "/services/salesforce-integration-services",
            },
            {
              title: "Salesforce Support and Maintenance",
              url: "/services/salesforce-support-maintenance",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you need ongoing support, periodic enhancements, or complete system health checks - HADITA's Salesforce experts ensure your CRM investment delivers continuous business value.",
        cta: {
          title: "Get a Free Salesforce Health Check",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
    {
      id: "odoo-erp-solutions",
      title: "Odoo ERP Solutions",
      description:
        "We implement Odoo's modular ERP to streamline functions like inventory, sales, HR, and accounting into a unified system.",
      content: [
        {
          id: "odoo-erp-implementation",
          heading: "Odoo – ERP Solutions",
          description:
            "HADITA implements Odoo's flexible, modular ERP platform to integrate and automate your business processes across departments including inventory, sales, HR, and accounting.",
          offerings: [
            "End-to-End Implementation",
            "Module Customization",
            "Ongoing Support & Upgrades",
            "Odoo Training",
            "Multi-company and multi-currency setup",
            "Integration with third-party applications",
            "Performance optimization and scaling",
          ],
          valueAdd:
            "Our Odoo expertise helps you scale affordably while achieving automation, real-time insights, and business efficiency across all departments.",
          cta: {
            title:
              "Simplify and scale your operations with HADITA—expert Odoo ERP solutions tailored for efficiency, automation, and growth.",
            buttonText: "Request Call Back",
            form: {
              name: "Your name",
              mobile: "Your number",
              buttonText: "Submit",
            },
          },
          intraLinks: [
            {
              title: "Why Odoo for your business?",
              url: "#odoo-business-case",
            },
            {
              title: "Odoo Implementation Process",
              url: "#odoo-implementation-process",
            },
            {
              title: "Odoo Customization Services",
              url: "#odoo-customization",
            },
            {
              title: "Odoo Support Packages",
              url: "#odoo-support",
            },
          ],
        },
      ],
      footer: {
        description:
          "Whether you need a complete Odoo implementation, specific module customization, or ongoing support, HADITA delivers cost-effective ERP solutions that grow with your business.",
        cta: {
          title: "Get a Free Odoo Consultation",
          form: {
            name: "Name",
            mobile: "Mobile#",
            buttonText: "Submit",
          },
        },
      },
    },
  ];
  console.log(services);
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
