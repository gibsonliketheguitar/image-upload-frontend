## Getting Started

First, environment variables to root folder.

```env
#template located in .env.local.example

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

- User can upload picture
- User can view all picture
- User can search all pictures

## Approach

1. Reading and Confirming scope of assignment
2. Using Excalidraw to decompose UI components, user flow, data model, and etc
3. Group together implementation steps. EG Setup and installation, creating core elements, components, adding state, implementing
4. Create time estimation and then implement

### V1: Full Stack Approach

#### Frontend

- NextJS, Radix Primitive Components, Tailwind React Hook Form

#### Backend

- NodeJs, Imgga, Postgres

#### Time Sink

- Added my own feature: when user upload photos, tags are generate to
- Trying to create core components with tailwind and building off what I have built before
- Using radix component for accessibility
- Learning to use AWS lambda function to create signedURL to upload to S3
- Figuring out how to write POSTSQL queries to save URL to DB
- Docker to build container for frontend, backend, and DB
- [excalidraw plan](https://excalidraw.com/#json=NMkm9cedysxMcQWXxnpkB,dWp5a4oSPkSRukxVPJUVyQ)

### V2: Frontend only Approach

- NextJs, Material UI, Jest
- [excalidraw plan](https://excalidraw.com/#json=HvsfEnfBoW6vug2chWbYC,EaFqaliCxcE7rYMVxumIrg)

#### TIme Sink

- Creating API to return the search data
- fixing some minor bugs

## Challenges

### V1

- setting up AWS lambda function to generated signed URL to upload pictures to S3 (only PNG)
- integration of IMGGA tagging service
- writing raw POSTSQL queries
- setting up docker and using docker compose to create and build containers for frontend, back, end

### V2

- integrating AWS lambda/signedURL with NextJS API and also accept all type of picture
- inital setup of JESt

## Improvement for next time

- The problem decomposition for frontend and backend is good. Its a good idea to to have a high level road map, but when implementing a specific module, it will be worth pseudo coding possible input states, edge cases, and thinking about the core features on paper before implementation. Coding off the cuff is a waste of the time 80% of the time. Solve on paper first then code.
- Should have decompose the backend system a bit more. Waste a lot of time figuring out queries to postgres. Should have took the leetcode approach and solve with pseudo code, and then implement. I also got bogged down by thinking querying content based on tags. Wh
- I was over complicating the V1 implementation, I thought about implementing a message queue to handle compression on the backend, but that was not asked in requirements. It's best to clarify requirements to save engineering time.

## Things I am excited to use for next project

- Docker compose up (I really want to create a full CI/CD pipeline with all the test)
- Radix primitive components
- debounce, SWR to deal with image caching and etc
- implement what I have learned from "refactoring UI"

## Interesting Thoughts

- Leetcode is good practice to understanding problem, decomposing into smaller units, and writing pseudo code before coding
- Seems learning how to do things takes a while, and may not be a good thing during take home assignments
- Things take time, like writing this read me and bring the projects to a close
- Decompose the problems, Group plan of action together to encourage goal gradient idea, and continue to use the tomato timer to create a good pace.
- Biggest danger is when you coding without a plan.

## If I had more Time

- I look into creating a design system to style UI
- Maybe implement a trie tree on the backend to save words and tags. Current algo on the server side uses brute force O(n^3) algo.
- Look into Machine Learning to search images base search. Rather than search images?

## Time Estimation are located in excalidraw

- V1 -> 20+ hrs?
- V2 -> 11+ hrs?

## Summary on how to approach next time

- Decompose the problem, along high level road map to implementation.
- When implementing specific modal, think about implementation details like leet code, input state, edge cases, and write test first before writing actual code
- Ask yourself if this is the core feature or is this over kill.
- Have template starter files for material UI and tailwind. Should be able to spin everything up with docker
