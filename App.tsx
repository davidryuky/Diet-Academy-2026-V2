
import React, { useEffect } from 'react';
// Fix: Import HashRouter, Routes, Route, useLocation, useNavigate from 'react-router'
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router';
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
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminCurriculumEditor } from './pages/admin/AdminCurriculumEditor';
import { useScrollToTop } from './hooks/useScrollToTop';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
}

// Componente de proteção de rota para Admin
// Fix: Make children optional to resolve "Property 'children' is missing in type '{}' but required" errors
const AdminGuard = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem('admin_auth') === 'true';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
};

// Componente de Layout principal
const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isMemberArea = location.pathname.startsWith('/member-area');
  const isAdminArea = location.pathname.startsWith('/admin') && location.pathname !== '/admin/login';
  // Atualizado: /login agora é /member
  const isLoginPage = location.pathname === '/member' || location.pathname === '/admin/login';

  // Se for página de login, não mostra Header/Footer padrão
  if (isLoginPage) return <main className="flex-grow">{children}</main>;

  return (
    <div className="flex flex-col min-h-screen relative">
      {isMemberArea ? <MemberHeader /> : !isAdminArea && <Header />}
      
      {/* Área Admin tem seu próprio estilo de Header interno para foco total no CMS */}
      <main className="flex-grow">
        {children}
      </main>

      {isMemberArea ? <MemberFooter /> : !isAdminArea && <Footer />}
      {!isAdminArea && <ScrollToTopButton />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          {/* Public Routes */}
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
          {/* Rota de login alterada para /member */}
          <Route path="/member" element={<Login />} />

          {/* Member Routes */}
          <Route path="/member-area" element={<MemberDashboard />} />
          <Route path="/member-area/course/:courseId" element={<CourseStudyView />} />

          {/* Admin Routes (Protegidas) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={
              <AdminGuard>
                <AdminDashboard />
              </AdminGuard>
            } 
          />
          <Route 
            path="/admin/course/:courseId" 
            element={
              <AdminGuard>
                <AdminCurriculumEditor />
              </AdminGuard>
            } 
          />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
