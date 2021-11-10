export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618c358a631f4638239eaae5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ntdyi21e",
                  apiId: "0b3fd05f-9b66-4d3d-8490-c008f8c40141",
                },
                {
                  buildHookId: "618c358ac85a0c375a317032",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-y5vkwpum",
                  apiId: "22614272-8a2d-41ab-83ac-5ed7af5cdd3b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rpcalderon/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-y5vkwpum.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
