export const projectsDataForTranslation = [
    {
        id: 6,
        title: "Automated Job Application Robot",
        description: "AI-powered system for automated job scraping, filtering, and applications with personalized cover letters.",
        fullDescription: "An intelligent and automated job search system that uses AI to scrape job listings, filter them according to your criteria, generate personalized cover letters, and send applications automatically. Features machine learning for job matching and a Streamlit dashboard for application tracking.",
        category: "fullstack",
        tags: ["Python", "Playwright", "OpenAI GPT", "Streamlit", "PostgreSQL", "ML"],
        features: [
            "Intelligent scraping from LinkedIn and other job platforms",
            "AI-powered job filtering based on criteria",
            "Personalized cover letter generation using GPT",
            "Automated email sending with attachments",
            "Application tracking with status updates",
            "Duplicate detection to avoid repeated applications",
            "Interactive Streamlit dashboard with analytics",
            "Market analysis and hiring trend detection",
            "Machine learning model for job matching accuracy"
        ],
        architecture: "Python-based backend with Playwright for web scraping, OpenAI GPT for content generation, and Streamlit web interface. Stores data in PostgreSQL with async job processing via task scheduler."
    },
    {
        id: 7,
        title: "Horse Racing Prediction",
        description: "AI-powered system for horse race outcome prediction and analysis using machine learning models.",
        fullDescription: "An intelligent system designed to analyze horse racing data and predict race outcomes using advanced ML algorithms. The project combines historical race data analysis, horse performance metrics, and predictive modeling to generate accurate race predictions.",
        category: "fullstack",
        tags: ["Python", "JavaScript", "Machine Learning", "PostgreSQL"],
        features: [
            "Historical race data analysis and scraping",
            "Horse performance metrics calculation",
            "Predictive ML models for race outcomes",
            "Interactive web dashboard for predictions",
            "Real-time odds tracking and comparison",
            "User prediction comparison and statistics",
            "Betting strategy recommendations"
        ],
        architecture: "Python backend for data processing and ML models, JavaScript/React frontend for interactive dashboard. PostgreSQL for race history and horse performance data."
    },
    {
        id: 8,
        title: "BPMN Workflow Engine",
        description: "Modern microservices-based BPMN workflow engine with AI-powered process creation and real-time execution monitoring.",
        fullDescription: "A comprehensive Business Process Model and Notation (BPMN) workflow engine built to democratize process modeling and automate business workflows. The platform offers an intuitive interface for business users to design workflows without advanced technical skills, while providing enterprise-grade execution, traceability, and performance monitoring. Features AI-powered process generation and real-time analytics to optimize workflow efficiency.",
        category: "backend",
        tags: ["Quarkus", "PostgreSQL", "Kogito", "Kafka"],
        features: [
            "Intuitive BPMN workflow modeling interface",
            "Reliable and traceable workflow execution engine",
            "AI-powered automated process creation",
            "Real-time task assignment and collaboration tools",
            "Comprehensive audit trail for regulatory compliance",
            "Performance monitoring and bottleneck analysis",
            "Microservices architecture for scalability",
            "Sub-2 second response time guarantee"
        ],
        architecture: "Modern microservices architecture built with Quarkus framework. Uses Kogito for BPMN workflow execution, Kafka for event streaming, and PostgreSQL for persistent storage. REST APIs with comprehensive documentation for extensibility."
    },
    {
        id: 9,
        title: "BPMN Workflow Modeler",
        description: "Angular-based BPMN workflow modeling platform with drag-and-drop editor, task assignment, and seamless Kogito integration.",
        fullDescription: "An advanced Angular application for creating, modeling, and managing BPMN processes with full Kogito integration. Provides an intuitive BPMN.js-based drag-and-drop modeler that enables business users to design workflows without technical expertise. Features automatic transformation to Kogito format, AI-powered process generation, real-time task assignment to groups/users, and comprehensive process instance management. Built with Angular 21 and the Orange Design System (Boosted) for a modern, accessible user experience.",
        category: "frontend",
        tags: ["Angular", "TypeScript", "BPMN.js", "RxJS"],
        features: [
            "Visual BPMN 2.0 modeler with drag-and-drop interface",
            "Task assignment to groups with automatic PotentialOwner creation",
            "Automatic transformation from BPMN.js to Kogito format (13 steps)",
            "AI-powered process generation from text descriptions",
            "Gateway configuration with conditional routing",
            "Real-time process instance and task management",
            "Custom properties panel for workflow configuration",
            "Multi-language support (FR/EN) with i18n",
            "One-click deployment to Kogito backend"
        ],
        architecture: "Angular 21 standalone components architecture with BPMN.js for visual modeling. RxJS for reactive state management and HTTP communication with Kogito backend. Orange Design System (Boosted) for UI components. Automatic XML transformation pipeline ensures Kogito compatibility."
    },
    {
        id: 10,
        title: "Sprint Framework",
        description: "Custom Java MVC framework with annotation-based routing, dependency injection, and Maven multi-module architecture.",
        fullDescription: "Sprint is a lightweight Java MVC framework built from scratch to demonstrate advanced Java concepts and framework design patterns. Inspired by Spring Framework's architecture, it provides annotation-based routing, automatic controller scanning, singleton pattern for controller instances, and a clean ModelView pattern for view rendering. The project showcases multi-module Maven architecture with a core framework module and a demo application module. Designed for educational purposes and as a foundation for building custom web applications with minimal boilerplate.",
        category: "backend",
        tags: ["Java", "Maven", "Tomcat", "MVC"],
        features: [
            "Custom annotation-based routing system (@GET, @url)",
            "Automatic controller scanning and registration",
            "Singleton pattern for controller instances (caching)",
            "ModelView pattern for view rendering",
            "Multi-module Maven architecture (framework + demo)",
            "WAR deployment support for Tomcat",
            "Type conversion and parameter binding",
            "Clean separation of framework and application code",
            "Automated deployment script"
        ],
        architecture: "Multi-module Maven project with clean separation between framework core and demo application. The framework module provides the MVC infrastructure as a JAR library, while the demo module consumes it to build web applications deployed as WAR files to Tomcat. Uses Java reflection for controller scanning and annotation processing."
    }
];
