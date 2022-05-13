declare global {
  interface posts {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  }
}

export {};
