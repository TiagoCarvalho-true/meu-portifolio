This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Glitch

To deploy your Next.js app on Glitch, follow these steps:

1. **Create a Glitch Account**:
   - Go to [Glitch](https://glitch.com/) and create an account.

2. **Create a New Project**:
   - Click on "New Project" and choose "Clone from Git Repo".

3. **Clone Your Repository**:
   - Enter the URL of your GitHub repository or upload your project files.

4. **Configure the Project**:
   - Ensure all necessary files are present, including `package.json`, `lib/db.js`, and `pages/api/certificados.js`.

5. **Start the Project**:
   - Glitch will automatically install dependencies and start the project. You can view your project at the URL provided by Glitch.

## Important Notes

- Ensure that your `certificados.db` file is not listed in your `.gitignore` so that it is included in the repository and deployed correctly.
- If you encounter any issues, check the Glitch logs for more information.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

Here is an overview of the project structure:

```
/meu-portifolio
├── /components
│   ├── About.js
│   ├── Navbar.js
│   └── Skills.js
├── /lib
│   └── db.js
├── /pages
│   ├── api
│   │   └── certificados.js
│   ├── _app.js
│   ├── index.js
│   └── certificados.js
├── /public
│   └── uploads
├── .gitignore
├── package.json
├── README.md
└── certificados.db
```

## API Endpoints

### GET /api/certificados

Fetches all certificates from the database.

### POST /api/certificados

Uploads a new certificate. The request should include a `name` field and a `file` field.

## Environment Variables

Ensure you have the following environment variables set up:



## License

This project is licensed under the MIT License.