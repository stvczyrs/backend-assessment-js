
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