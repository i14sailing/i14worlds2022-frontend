exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.length < 2) {
      page.context.layout = "landing"
      createPage(page)
    }
}