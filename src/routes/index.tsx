import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p>Min ID is 1, Max ID is 10</p>
      <p>Sort must be either asc or desc</p>
      <p>
        Refresh the page on invalid params/error route to see the issue of
        validators
      </p>
      <Link
        to="/posts/$id"
        params={{ id: 5 }}
        search={{ sort: 'asc' }}
        className="bg-slate-300 rounded-lg text-slate-800 p-2 font-medium"
      >
        Navigate to POST ID: 5 SORT: "asc" (valid)
      </Link>
      <Link
        to="/posts/$id"
        params={{ id: 5 }}
        search={{ sort: 'wrong' }}
        className="bg-slate-300 rounded-lg text-slate-800 p-2 font-medium"
      >
        Navigate to POST ID: 5 SORT: "wrong" (invalid)
      </Link>
      <Link
        to="/posts/$id"
        params={{ id: 20 }}
        search={{ sort: 'asc' }}
        className="bg-slate-300 rounded-lg text-slate-800 p-2 font-medium"
      >
        Navigate to POST ID: 20 SORT: "desc" (invalid)
      </Link>
    </div>
  )
}
