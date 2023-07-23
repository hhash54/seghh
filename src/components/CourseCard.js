// src/components/CourseCard.js
import React from 'react';

function CourseCard({ course }) {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      // Add more details about the course here
    </div>
  );
}

export default CourseCard;
