// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "List of my publications can be found below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Overview of my teaching experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Research experience, education and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-started-a-research-internship-at-whirl-university-of-oxford-with-shimon-whiteson-working-on-the-imitation-gap",
          title: 'Started a research internship at WhiRL, University of Oxford, with Shimon Whiteson, working...',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-at-isir-sorbonne-université-supervised-by-olivier-sigaud-and-mohamed-chetouani",
          title: 'Started my Ph.D. at ISIR, Sorbonne Université, supervised by Olivier Sigaud and Mohamed...',
          description: "",
          section: "News",},{id: "news-our-paper-igdrivsim-a-benchmark-for-the-imitation-gap-in-autonomous-driving-was-accepted-at-iros-2025",
          title: 'Our paper IGDrivSim: A Benchmark for the Imitation Gap in Autonomous Driving was...',
          description: "",
          section: "News",},{id: "news-controlling-intent-expressiveness-in-robot-motion-with-diffusion-models-was-accepted-at-the-iros-2025-workshop-on-human-aware-embodied-ai",
          title: 'Controlling Intent Expressiveness in Robot Motion with Diffusion Models was accepted at the...',
          description: "",
          section: "News",},{id: "news-attended-iros-2025-in-hangzhou-china",
          title: '📍 Attended IROS 2025 in Hangzhou, China!',
          description: "",
          section: "News",},{id: "news-our-paper-i-failsense-towards-general-robotic-failure-detection-with-vision-language-models-was-accepted-at-icra-2026",
          title: 'Our paper I-FailSense: Towards General Robotic Failure Detection with Vision-Language Models was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-prism-perception-reasoning-interleaved-for-sequential-decision-making-was-accepted-at-icml-2026",
          title: 'Our paper PRISM: Perception Reasoning Interleaved for Sequential Decision Making was accepted at...',
          description: "",
          section: "News",},{id: "news-attended-icra-2026-in-vienna-austria",
          title: '📍 Attended ICRA 2026 in Vienna, Austria!',
          description: "",
          section: "News",},{id: "news-online-self-training-for-co-adaptation-in-hierarchical-diffusion-policies-was-accepted-at-the-icml-2026-demo-workshop",
          title: 'Online Self-Training for Co-Adaptation in Hierarchical Diffusion Policies was accepted at the ICML...',
          description: "",
          section: "News",},{id: "news-attended-the-peyresq-summer-school-on-generative-modelling-and-optimal-transport",
          title: '📚 Attended the Peyresq Summer School on Generative Modelling and Optimal Transport.',
          description: "",
          section: "News",},{id: "news-intentvlm-was-accepted-at-icmi-2026",
          title: 'IntentVLM was accepted at ICMI 2026! 🎉',
          description: "",
          section: "News",},{id: "news-a-sim-to-real-integration-pipeline-for-training-and-deployment-of-chunk-based-vla-manipulation-policies-was-accepted-at-the-iros-2026-workshop-on-sim2real-and-classical-control",
          title: 'A Sim-to-Real Integration Pipeline for Training and Deployment of Chunk-Based VLA Manipulation Policies...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%72%69%73%6C%61%69%6E@%69%73%69%72.%75%70%6D%63.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/clemgris", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/clemence-grislain", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=a_ae4l0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
