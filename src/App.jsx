import { useQuery } from '@tanstack/react-query'

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ping'],
    queryFn: async () => {
      const res = await fetch('https://httpbin.org/get')
      if (!res.ok) throw new Error('Network response was not ok')
      return res.json()
    },
  })

  if (isLoading) {
    return <div className="p-6 text-center text-gray-600">Loading...</div>
  }
  if (error) {
    return <div className="p-6 text-center text-red-600">Error: {String(error)}</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold mb-4">React Query + Tailwind</h1>
        <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto">
{JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App
