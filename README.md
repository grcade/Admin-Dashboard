# Admin Dashboard


Initially, this was just a quick React UI with hardcoded data. Then I got curious about how **RTK Query** handles real-world data flow, so I threw together a small **Express + SQLite** backend to make it "real."

##  The "Why"
I wanted to stop using `useEffect` for every single API call and learn how to handle:
* **Pagination:** Fetching only what's needed (10 rows at a time).
* **Caching:** Making "Back" buttons feel instant.
* **Mutations:** Deleting a user and having the list "just update" without a page refresh.

##  The Stack
* **Frontend:** React + RTK Query (the star of the show) + Tailwind for styling.
* **Backend:** A tiny Express server.
* **Database:** `better-sqlite3` (super simple, no setup needed).


##  How to run it
1. `npm install` in both folders.
2. Spin up the API.
3. Spin up the Frontend.

---
