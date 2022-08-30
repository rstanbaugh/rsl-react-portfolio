import { useSearchParams } from "react-router-dom"

const TeamPage = (props) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); // 'name'
  return (
    <div>
      <h1>This is the Team page</h1>
      <h2>{ name }</h2>
    </div>
  )
}

export default TeamPage