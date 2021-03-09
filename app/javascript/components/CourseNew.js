import React from 'react';

const CourseNew = ({ course }) => {
  const { name, errors } = course
  const defaultName = name ? name : ""
  return(
    <>
      <h1>Add Course</h1>
      {errors && errors }
      <form action="/courses" method="post">
        <input placeholder="Name" type="text" defaultValue={defaultName} name="course[name]">
        </input>
        <button type="submit"> Submit</button>
      </form>
    </>
  )
}

export default CourseNew;