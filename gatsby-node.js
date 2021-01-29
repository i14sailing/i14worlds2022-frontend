exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.length < 2) {
        page.context.layout = 'landing';
        createPage(page);
    } else if (page.path.includes('event')) {
        page.context.layout = 'event';
        createPage(page);
    } else if (page.path.includes('presentation')) {
        page.context.layout = 'presentation';
        createPage(page);
    }
};
