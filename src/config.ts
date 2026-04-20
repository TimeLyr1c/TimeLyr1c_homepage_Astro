import type {
    SiteConfig,
    ProfileConfig
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "TimeLyr1c",
    subTitle: "新的心跳",

    backgroundImage: {
        enabled: false, // If backgroundImage is not enabled, this will be used as the background color
        url: "assets/background.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    },

    mirrorSite: {
        enabled: false, // If mirrorSite is enabled, this will alart the user to visit the mirror site if user is in region below
        url: "https://www.timelyr1c.com",
        region: "CN" // Region of the mirror site, 
    },

    favicon: "/favicon/favicon.ico" // Path of the favicon, relative to the /public directory
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/Avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "TimeLyr1c",
    description: "I'm Alive",
    introPage: "https://www.timelyr1c.com",
    links: [
        /* -------------------------------- Icon -------------------------------- */
        // Visit https://icones.js.org/ for icon codes
        // You will need to install the corresponding icon set if it's not already included
        // `pnpm add @iconify-json/<icon-set-name>`
        // Then add icon to defineConfig.integrationsin.icon in astro.config.mjs
        // You can also use local svg icons end with .svg, relative to the src directory
        // eg. `icon: "assets/icons/github.svg"`
        /* -------------------------------- Color -------------------------------- */
        // The colors a best to be clearly visible in both light and dark environments 
        // If color is not set, it will use the icon's default color
        {
          name: "Blog",
          url: "https://blog.timelyr1c.com",
          icon: "fa6-solid:inbox", 
          color: "#0dbc79",
        },
        {
            name: "Douyin",
            url: "https://www.douyin.com/user/MS4wLjABAAAAgR--pWt7v5h6TWV6qYbWE8-gLzthvFt4Aw3vj0HA0x4",
            icon: "simple-icons:tiktok",
            color: "#777777",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/timelyr1c_hao/",
            icon: "simple-icons:instagram",
            color: "#f074c2",
        },
        {
            name: "GitHub",
            url: "https://github.com/TimeLyr1c",
            icon: "fa6-brands:github",
            color: "#636363",
        },
        {
            name: "Discord",
            url: "https://discord.com/users/1280430332658843648",
            icon: "simple-icons:discord",
            color: "#ca60ff",
        },
        {
            name: "Mail",
            url: "mailto:williamhaoruibo@gmail.com",
            icon: "fa6-solid:envelope",
            color: "#43a4d1ff"
        },
        {
            name: "Bilibili",
            url: "https://space.bilibili.com/1978773038",
            icon: "simple-icons:bilibili",
            color: "#f590e2",
        },
    ]
}
