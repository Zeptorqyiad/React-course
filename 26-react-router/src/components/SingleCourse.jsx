import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import NotFound from './NotFound'

const SingleCourse = () => {
   const params = useParams()
   useNavigate()
   const course = courses.find((course) => course.slug === params.courseSlug)
   if (!course) {
      return (
         <>
            <NotFound />
            <Link to=".." relative="path">
               All courses
            </Link>
         </>
      )
   }

   return (
      <>
         <h1>{course.title}</h1>
         <h2>{course.slug}</h2>
         <h3>{course.id}</h3>
         <Link to=".." relative="path">
            All courses
         </Link>
      </>
   )
}

export default SingleCourse