import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MemberHeader } from './components/layout/MemberHeader';
import { MemberFooter } from './components/layout/MemberFooter';
import { Home } from './pages/Home';
import { Seekers } from './pages/Seekers';
import { Instructors } from './pages/Instructors';
import { Courses } from './pages/Courses';
import { RegularCourse } from './pages/RegularCourse';
import { SeniorCourse } from './pages/SeniorCourse';
import { ProfessionalCourse } from './pages/ProfessionalCourse';
import { ProfessionalChapterDetail } from './pages/ProfessionalChapterDetail';
import { Pricing } from './pages/Pricing';
import { Methods } from './pages/Methods';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { CertificateDemo } from './pages/CertificateDemo';
import { Login } from './pages/Login';
import { CalculatorPage } from './pages/Calculator';
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

// Proteção para Área Admin
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

// Proteção para Área de Membros
const MemberGuard = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate();
  // Simulação de auth para o demo (pode ser expandido conforme necessário)
  const isMemberAuthenticated = sessionStorage.getItem('member_auth') === 'true' || localStorage.getItem('member_auth') === 'true';

  useEffect(() => {
    if (!isMemberAuthenticated) {
      navigate('/member');
    }
  }, [isMemberAuthenticated, navigate]);

  if (!isMemberAuthenticated) return null;
  return <>{children}</>;
};

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isMemberArea = location.pathname.startsWith('/member-area');
  const isAdminArea = location.pathname.startsWith('/admin') && location.pathname !== '/admin/login';
  const isLoginPage = location.pathname === '/member' || location.pathname === '/admin/login';

  if (isLoginPage) return <main className="flex-grow">{children}</main>;

  return (
    <div className="flex flex-col min-h-screen relative">
      {isMemberArea ? <MemberHeader /> : !isAdminArea && <Header />}
      
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
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/seekers" element={<Seekers />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/regular" element={<RegularCourse />} />
          <Route path="/courses/senior" element={<SeniorCourse />} />
          <Route path="/courses/professional" element={<ProfessionalCourse />} />
          <Route path="/courses/professional/chapter/:id" element={<ProfessionalChapterDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/demo" element={<div className="certificate-demo-page"><CertificateDemo /></div>} />
          <Route path="/member" element={<Login />} />

          {/* Member Routes (Protected) */}
          <Route 
            path="/member-area" 
            element={
              <MemberGuard>
                <MemberDashboard />
              </MemberGuard>
            } 
          />
          <Route 
            path="/member-area/course/:courseId" 
            element={
              <MemberGuard>
                <CourseStudyView />
              </MemberGuard>
            } 
          />

          {/* Admin Routes (Protected) */}
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