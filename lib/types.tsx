declare global {
  interface posts {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  }
}

declare global {
  interface projectData {
    Title: string;
    key: number;
    Description: string;
    Stack: string[];
    Image: string;
    Link: string;
    Demo: string;
  }
}

export {};
