Catalog.render({
    title: 'Suffolk County Community College Brand Guidelines',
    theme: {
        // Colors
        background: '#F9F9F9',
        textColor: '#333333',
        codeColor: '#00263E',
        linkColor: '#001489',
        // NavigationBar background color, but also sometimes used as a foreground
        // or border color.
        lightColor: '#D6D6D6',
        // Used in PageHeader
        pageHeadingBackground: '#001489',
        pageHeadingTextColor: '#fff',
        // Used in Menu and PageHeader to make sure the top parts have
        // the same height.
        pageHeadingHeight: 180,
        // Used for navigation bar
        navBarBackground: '#F2F2F2',
        navBarTextColor: '#0176a0',
        // Used in ResponsiveTabs (tab text), Download specimen (title text).
        // Typography: headings.
        brandColor: '#333',
        sidebarColor: '#FFFFFF',
        sidebarColorActive: '#D1312E',
        sidebarColorText: '#777777',
        sidebarColorTextActive: '#001489',
        sidebarColorLine: '#EBEBEB',
        sidebarColorHeading: '#001489',
        // Used in the html, react, and image specimens.
        bgLight: '#F2F2F2',
        bgDark: '#333333',
        // Keys appear to be PrismJS token types.
        codeStyles: {
            tag: {
                color: '#FF5555'
            },
            punctuation: {
                color: '#535353'
            },
            script: {
                color: '#3F7397'
            },
            function: {
                color: '#FF5555'
            },
            keyword: {
                color: '#3F7397'
            },
            string: {
                color: '#00263E'
            }
        },
        // Patterns
        checkerboardPatternLight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=',
        checkerboardPatternDark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==',
        // Fonts
        fontFamily: "'Roboto', sans-serif",
        fontHeading: "'Roboto', sans-serif",
        fontMono: "'Roboto Mono', monospace",
        // Base font size in pixels.
        baseFontSize: 16,
        // Modular scale ratio that is used to figure out all the different font sizes
        msRatio: 1.2
    },
    pages: [
    	{
            path: "/",
            title: "Welcome",
            src: "./md/WELCOME.md"
        }, 
        {
            title: "Official Logos",
            pages: [
                {
                    path: "/logos/sccc",
                    title: "College Logo",
                    src: "./md/LOGOS.md"
                }, {
                    path: "/logos/athletics",
                    title: "SCCC Athletics",
                    src: "./md/LOGOS-athletics.md"
                }, {
                    path: "/logos/radio",
                    title: "SCCC Radio",
                    src: "./md/LOGOS-radio.md"
                }, {
                    path: "/logos/suny",
                    title: "SUNY Logo",
                    src: "./md/LOGOS-suny.md"
                }
            ]
        }, 
        {
            title: "Design Assets",
            pages: [
                {
                    path: "/design/colors",
                    title: "Colors",
                    src: "./md/DESIGN-colors.md"
                }, {
                    path: "/design/icons",
                    title: "Icons",
                    src: "./md/DESIGN-icons.md"
                }, {
                    path: "/design/images",
                    title: "Images",
                    src: "./md/DESIGN-images.md"
                }, {
                    path: "/design/typography",
                    title: "Typography",
                    src: "./md/DESIGN-typography.md"
                }
            ]
        },
        // Other pages
    ]
}, document.getElementById('catalog'));