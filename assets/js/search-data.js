// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-datasets",
          title: "Datasets",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-consensual-archonto-representation-of-13-portuguese-historical-archival-records-based-on-their-digital-representations",
          title: 'Consensual ArchOnto representation of 13 Portuguese Historical Archival Records based on their Digital...',
          description: "Authors: Mariana Dias and Carla Teixeira Lopes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/episa_dataset1/";
            },},{id: "projects-manual-transcriptions-of-typewritten-digital-representations-of-portuguese-cultural-heritage-documents-from-the-20th-century",
          title: 'Manual Transcriptions of Typewritten Digital Representations of Portuguese Cultural Heritage Documents from the...',
          description: "Authors: Margarida Falcão, Mariana Dias and Carla Teixeira Lopes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/episa_dataset2/";
            },},{id: "projects-typewritten-digital-representations-of-portuguese-cultural-heritage-documents-from-the-20th-century",
          title: 'Typewritten Digital Representations of Portuguese Cultural Heritage Documents from the 20th century',
          description: "Authors: Mariana Dias and Carla Teixeira Lopes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/episa_dataset3/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%70%32%30%31%36%30%36%34%38%36@%75%70.%70%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MarianaFerrDias", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mariana-ferreira-dias", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6329-2184", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=G3YA7s4AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/marianaferrdias", "_blank");
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
