import fs from "fs";

export default function includeHtml() {
  return {
    name: "vite-plugin-include",
    async transformIndexHtml(html) {
      const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;
      const replacedHtml = await Promise.all(
        Array.from(html.matchAll(includeTagRegex), async ([match, src]) => {
          try {
            const content = await fs.promises.readFile(src, "utf-8");
            return { match, content };
          } catch (error) {
            console.error(`Error reading ${src}: ${error}`);
            return { match, content: match }; // Return the original tag in case of an error
          }
        })
      );

      return replacedHtml.reduce((acc, { match, content }) => {
        return acc.replace(match, content);
      }, html);
    },
  };
}
