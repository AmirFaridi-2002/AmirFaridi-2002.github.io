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
        },{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Atomic_Habits/";
            },},{id: "books-beren-and-lúthien",
          title: 'Beren and Lúthien',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Beren_And_Luthien/";
            },},{id: "books-for-the-win",
          title: 'For the Win',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/For_The_Win/";
            },},{id: "books-hour-of-the-heart",
          title: 'Hour of the Heart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Hour_Of_The_Heart/";
            },},{id: "books-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Mans_Search_For_Meaning/";
            },},{id: "books-momma-amp-the-meaning-of-life",
          title: 'Momma &amp;amp; the Meaning of Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Momma_And_The_Meaning_Of_Lfe/";
            },},{id: "books-regarding-the-pain-of-others",
          title: 'Regarding the Pain of Others',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Regarding_The_Pain_Of_Others/";
            },},{id: "books-staring-at-the-sun",
          title: 'Staring at the Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Staring_At_The_Sun/";
            },},{id: "books-the-art-of-loving",
          title: 'The Art of Loving',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Art_Of_Loving/";
            },},{id: "books-the-birth-of-tragedy",
          title: 'The Birth of Tragedy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Birth_Of_Tragedy/";
            },},{id: "books-the-children-of-húrin",
          title: 'The Children of Húrin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Children_Of_Hurin/";
            },},{id: "books-the-complete-history-of-middle-earth",
          title: 'The Complete History of Middle-earth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Complete_History_Of_Middle_Earth/";
            },},{id: "books-the-death-of-ivan-ilyich",
          title: 'The Death of Ivan Ilyich',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Death_Of_Ivan_Ilyich/";
            },},{id: "books-the-fall-of-gondolin",
          title: 'The Fall of Gondolin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Fall_Of_Gondolin/";
            },},{id: "books-the-fellowship-of-the-ring",
          title: 'The Fellowship of the Ring',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Fellowship_Of_The_Ring/";
            },},{id: "books-the-gift-of-therapy",
          title: 'The Gift of Therapy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Gift_Of_Therapy/";
            },},{id: "books-the-hobbit",
          title: 'The Hobbit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Hobbit/";
            },},{id: "books-the-midnight-library",
          title: 'The Midnight Library',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Midnight_Library/";
            },},{id: "books-the-power-of-habit",
          title: 'The Power of Habit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Power_Of_Habit/";
            },},{id: "books-the-return-of-the-king",
          title: 'The Return of the King',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Return_Of_The_King/";
            },},{id: "books-the-schopenhauer-cure",
          title: 'The Schopenhauer Cure',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Schopenhauer_Cure/";
            },},{id: "books-the-silmarillion",
          title: 'The Silmarillion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Silmarillion/";
            },},{id: "books-the-story-of-civilization",
          title: 'The Story of Civilization',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Story_Of_Civilization/";
            },},{id: "books-the-two-towers",
          title: 'The Two Towers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Two_Towers/";
            },},{id: "books-when-nietzsche-wept",
          title: 'When Nietzsche Wept',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/When_Nietzsche_Wept/";
            },},{id: "books-thus-spoke-zarathustra",
          title: 'Thus Spoke Zarathustra',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Thus_Spoke_Zarathustra/";
            },},{id: "books-unfinished-tales-of-númenor-and-middle-earth",
          title: 'Unfinished Tales of Númenor and Middle-earth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Unfinished_Tales_Of_Numenor_And_Middle_Earth/";
            },},{id: "books-walking-with-plato",
          title: 'Walking with Plato',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Walking_With_Plato/";
            },},{id: "projects-correctness-and-incorrectness-reasoning-for-quantum-programs",
          title: 'Correctness and Incorrectness Reasoning for Quantum Programs',
          description: "BSC Thesis Report (University of Tehran)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BSc-Thesis-Report/";
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
