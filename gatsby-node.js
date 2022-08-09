exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  }),
  createRedirect({
    fromPath: `/page-3/`,
    toPath: `https://collarcitycode.com/`,
    statusCode: 200,
  })
}
