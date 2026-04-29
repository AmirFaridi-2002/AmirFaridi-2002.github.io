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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-tom-bombadil",
          title: "tom bombadil",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tom-bombadil/";
          },
        },{id: "books-for-the-win",
          title: 'For the Win',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/For_The_Win/";
            },},{id: "books-momma-amp-the-meaning-of-life",
          title: 'Momma &amp;amp; the Meaning of Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Momma_And_The_Meaning_Of_Lfe/";
            },},{id: "books-the-midnight-library",
          title: 'The Midnight Library',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Midnight_Library/";
            },},{id: "books-regarding-the-pain-of-others",
          title: 'Regarding the Pain of Others',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Regarding_The_Pain_Of_Others/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/amirfaridi_2002", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%69%72%66%61%72%69%64%69%32%30%30%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AmirFaridi-2002", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amirfaridi2002", "_blank");
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
