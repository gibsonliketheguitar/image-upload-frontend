## Getting Started

First, add environment variables to the root folder.

```env
#template located in .env.local.example
#save file as .env.local

SIGNED_URL_API=<replace>
BUCKET_URL=<replace>

```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Live Link

https://image-upload-frontend.vercel.app/https://image-upload-frontend.vercel.app/

## Requirements for take home

- User can upload a picture
- User can view all pictures
- User can search all pictures

## Approach

1. Reading and Confirming the scope of the assignment
2. Using Excalidraw to decompose UI components, user flow, data model, etc
3. Group implementation steps. EG Setup and installation, creating core elements, and components, adding state, implementing
4. Create time estimation and then implement

### V1: Full Stack Approach

https://github.com/gibsonliketheguitar/image-upload-search-tagging-fullstack

#### Frontend

- NextJS, Radix Primitive Components, Tailwind React Hook Form

#### Backend

- NodeJs, Imgga, Postgres

#### Time Sink

- Added my feature: when users upload photos, tags are generated to
- Trying to create core components with tailwind and building off what I have built before
- Using radix component for accessibility
- Learning to use AWS lambda function to create signedURL to upload to S3
- Figuring out how to write POSTSQL queries to save URL to DB
- Docker to build the container for frontend, backend, and DB
- [excalidraw plan](https://excalidraw.com/#json=NMkm9cedysxMcQWXxnpkB,dWp5a4oSPkSRukxVPJUVyQ)

### V2: Frontend-only Approach

- NextJs, Material UI, Jest
- [excalidraw plan](https://excalidraw.com/#json=HvsfEnfBoW6vug2chWbYC,EaFqaliCxcE7rYMVxumIrg)

#### Time Sink

- Creating API to return the search data
- fixing some minor bugs

## Challenges

### V1

- setting up AWS lambda function to generate signed URL to upload pictures to S3 (only PNG)
- integration of IMGGA tagging service
- writing raw POSTSQL queries
- setting up docker and using docker compose to create and build containers for frontend, backend

### V2

- integrating AWS lambda/signedURL with NextJS API and also accept all types of picture
- initial setup of JESt

## Improvement for next time

- The problem decomposition for frontend and backend is good. It's a good idea to have a high-level road map, but when implementing a specific module, it will be worth pseudo coding possible input states, edge cases, and thinking about the core features on paper before implementation. Coding off the cuff is a waste of the time 80% of the time. Solve on paper first then code.
- Should have decompose the backend system a bit more. Waste a lot of time figuring out queries to Postgres. Should have taken the leetcode approach and solved it with pseudo code, and then implement it. I also got bogged down by thinking about querying content based on tags. Wh
- I was overcomplicating the V1 implementation, I thought about implementing a message queue to handle compression on the backend, but that was not asked in the requirements. It's best to clarify requirements to save engineering time.

## Things I am excited to use for the next project

- Docker compose up (I want to create a full CI/CD pipeline with all the tests)
- Radix primitive components
- debounce, SWR to deal with image caching, etc
- implement what I have learned from "refactoring UI"

## Interesting Thoughts

- Leetcode is good practice for understanding problems, decomposing them into smaller units, and writing pseudo code before coding
- Seems learning how to do things takes a while, and may not be a good thing during take-home assignments
- Things take time, like writing this read me and bring the projects to a close
- Decompose the problems, Group plan of action together to encourage goal gradient idea, and continue to use the tomato timer to create a good pace.
- The biggest danger is when you code without a plan.

## If I had more Time

- I look into creating a design system to style UI
- Maybe implement a trie tree on the backend to save words and tags. The current algo on the server side uses brute force O(n^3) algo.
- Look into Machine Learning to search images with a text rather than querying a database

## Time Estimation is located in excalidraw

- V1 -> 20+ hrs?
- V2 -> 11+ hrs?

## Summary on how to approach next time

- Decompose the problem, along a high level road map to implementation.
- When implementing a specific modal, think about implementation details like leet code, input state, and edge cases, and write the test first before writing the actual code
- Ask yourself if this is the core feature or if this overkill.
- Have template starter files for material UI and tailwind. Should be able to spin everything up with the docker
