
## Installation

1. Clone the repository

`git clone <repository-url>`
`cd <project-directory>`

1. Install dependencies

`npm install`

3. Set up environment variables

Temporary db connection string is in `.dev.vars.example`.

`cp .dev.vars.example .dev.vars`

1. Database setup
   
`npm run db:generate`
`npm run db:migrate`

5. Run the development server

`npm run dev`

### Technical Decisions and Challenges

I started late with the assessment as I still have a day job, so I chose to use Hono and Drizzle ORM for this project because I have a bit of experience with them and to save time.

The assessment is very interesting as it forced to me implement non standard implementations that kinda caught me off guard. Some of the instructions were not clear to me and I had to make assumptions.

For the architecture, I have a bit of laravel background so I kinda went the `Models` route for the database schema. The `api` folder in here almost acts like the `Controllers` from laravel. The `services` folder houses the database queries because I wanted separation of concerns and a reuseability as well as to keep the `api` folder clean.

I also added a bit of validation by using the `zod` library.

For the sql dump, I had trouble dumping my database schema from Neon. I had to install postgres client on my local machine to run pg_dump but I had a couple of issues with the version. I ended up with those files in the database folder, one is a dump file, the other is the sql file, which does not contain the data unfortunately, and lastly a products.json file which I exported directly from my neon table as a desperate attempt to show I had data inserted in the database lmao.

I also had an API collection added in here as well. I used bruno as my API client to test the endpoints. Not only is it free (as opposed to postman/insomnia), it's also quite nice to use for documenting the endpoints.

Thank you for the opportunity, hope to hear from you soon.