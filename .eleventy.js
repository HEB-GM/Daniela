module.exports = function(eleventyConfig) {
    // Assets (Bilder, Fonts, CSS) unverändert durchreichen
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    eleventyConfig.addPassthroughCopy("src/styles.css");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        passthroughFileCopy: true,
        templateFormats: ["md", "njk", "html"]
    };
};
