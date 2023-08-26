import { useRouteError } from 'react-router-dom'

const FileNotFound = () => {
  const error = useRouteError()

  return (
    <>
      <h1>Error 404 - FileNotFound</h1>
      {import.meta.env.MODE !== 'production' && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}

export default FileNotFound
