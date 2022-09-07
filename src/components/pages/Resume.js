// import { useParams } from "react-router-dom"
import retirementResume from '../../assets/images/retirement-resume.jpeg'

const UserPage = (props) => {
  // let { id } = useParams(); // destructure id from the :id in route
  return (
    <div>
      <h1>Resume</h1>
      {/* <p>The user id from the route is:  { id }</p> */}
      <img src={ retirementResume } alt="Resume"/>
    </div>
  )
}

export default UserPage