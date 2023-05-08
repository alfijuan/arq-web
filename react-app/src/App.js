import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserList, UserABM } from './views/users';
import { CategoriesList, CategoriesABM } from './views/categories';
import { CoursesList, CoursesABM } from './views/courses';
import { LessonsList, LessonsABM } from './views/lessons';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courses/:id/lessons/:lessonId" element={<LessonsABM />} />
        <Route path="/courses/:id/lessons" element={<LessonsList />} />

        <Route path="/courses/:id" element={<CoursesABM />} />
        <Route path="/courses" element={<CoursesList />} />

        <Route path="/categories/:id" element={<CategoriesABM />} />
        <Route path="/categories" element={<CategoriesList />} />

        <Route path="/users/:id" element={<UserABM />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  )
}


export default App;