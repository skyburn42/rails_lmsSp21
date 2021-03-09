import React from 'react'

const Courses = ({ courses }) => {
  return (
    <>
  <h1>All Courses</h1>
      <a href="/courses/new">Add Course</a>
      <br></br>
      <h2>{ courses.length <= 0 ? "No courses" : "" }</h2>
      { courses.map ( (course) => (
        <div>
          <a href={'/courses/${courses.id}'}>{courses.name}</a>
        </div>
      ))}
    </>
  )
}

export default Courses;