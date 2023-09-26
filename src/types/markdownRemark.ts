export type markdownRemark = {
    frontmatter: {
        path: string;
        image: string;
        date: string;
        tags: string[];
        title: string;
    };
};

export type allMarkdownRemark = {
    nodes: markdownRemark[];
};
