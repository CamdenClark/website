import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyWikilinks from "@photogabble/eleventy-plugin-interlinker";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyWikilinks, {});
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/posts/feed.xml",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "camden's blog",
      subtitle: "A blog about programming and other stuff",
      base: "https://camden.codes/",
      author: {
        name: "camden",
        email: "admin@hermiod.com",
      },
    },
  });
  eleventyConfig.addPlugin(syntaxHighlight);
}
