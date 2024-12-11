import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/posts/feed.xml",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "hermiod's blog",
      subtitle: "A blog about programming and other stuff",
      base: "https://hermiod.com/",
      author: {
        name: "hermiod",
        email: "admin@hermiod.com",
      },
    },
  });
}
