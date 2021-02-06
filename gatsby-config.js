module.exports = {
  pathPrefix: "/black-wings-git-tutorial",
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        contentPath: ".",
        basePath: '/'
      },
    },
    {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
            modules: ['mdx-deck', 'gatsby-theme-mdx-deck', '@mdx-deck/themes', '@mdx-deck/gatsby-plugin']
        }
    }
  ],
};
