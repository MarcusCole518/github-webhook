exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createRedirect({
    fromPath: `/404/*`,
    toPath: `/404/`,
    statusCode: 404
  });
}
