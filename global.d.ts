// Global CSS module declarations for Next.js app
// This lets TypeScript understand imports like `import "./globals.css";`

declare module "*.css" {
  const content: string;
  export default content;
}
