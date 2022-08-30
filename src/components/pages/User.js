import { useParams } from "react-router-dom"

const UserPage = (props) => {
  let { id } = useParams(); // destructure id from the :id in route
  return (
    <div>
      <h1>This is the User page</h1>
      <p>The user id from the route is:  { id }</p>
    </div>
  )
}

export default UserPage