import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/posts/$id')({
  params: z.object({
    id: z.coerce.number().min(1).max(10),
  }),
  validateSearch: z.object({
    sort: z
      .enum(['asc', 'desc'], {
        message: 'Sort must be either asc or desc',
      })
      .default('asc'),
  }),
  errorComponent: ({ error }) => (
    <div className="text-red-600 text-xl">{error.message}</div>
  ),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { sort } = Route.useSearch()

  return (
    <div className="flex flex-col gap-4 items-center">
      <Link
        to="/"
        className="bg-slate-300 rounded-lg text-slate-800 p-2 font-medium"
      >
        Go Back
      </Link>
      Hello post ID: {id} sort: {sort}
    </div>
  )
}
