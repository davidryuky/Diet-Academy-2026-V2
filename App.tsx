import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MemberHeader } from './components/layout/MemberHeader';
import { MemberFooter } from './components/layout/MemberFooter';
import { Home } from './pages/Home';
import { Seekers } from './pages/Seekers';
import { Instructors } from './pages/Instructors';
import { Courses } from './pages/Courses';
import { ProfessionalCourse } from './pages/ProfessionalCourse';
import { Pricing } from './pages/Pricing';
import { Methods } from './pages/Methods';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { CertificateDemo } from './pages/CertificateDemo';
import { Login } from './pages/Login';
import { MemberDashboard } from './pages/member/MemberDashboard';
import { CourseStudyView } from './pages/member/CourseStudyView';
import { useScrollToTop } from './hooks/useScrollToTop';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
}

// Fixed: Make children optional in AppLayout props to avoid 'Property children is missing' error at call site
// This handles cases where TypeScript compiler might not correctly infer children presence in the JSX tree
const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isMemberArea = location.pathname.startsWith('/member-area');

  return (
    <div className="flex flex-col min-h-screen relative">
      {isMemberArea ? <MemberHeader /> : <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {isMemberArea ? <MemberFooter /> : <Footer />}
      <ScrollToTopButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seekers" element={<Seekers />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/professional" element={<ProfessionalCourse />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/demo" element={<div className="certificate-demo-page"><CertificateDemo /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/member-area" element={<MemberDashboard />} />
          <Route path="/member-area/course/:courseId" element={<CourseStudyView />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
