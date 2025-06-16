import { useNavigate } from 'react-router-dom';
import { ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ClientLogos from '@/components/home/ClientLogos';
import FeaturesSection from '@/components/home/FeaturesSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import BlogSection from '@/components/home/BlogSection';
import Footer from '@/components/home/Footer';
import { Feature, Testimonial, BlogPost } from '@/types/home';

function Index() {
  const navigate = useNavigate();

  // 处理免费试用按钮点击
  const handleTrialClick = () => {
    navigate('/voice-interaction');
  };

  const features: Feature[] = [
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: '智能能源分析',
      description: '实时监控能源消耗，识别节能机会'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: '优化建议',
      description: '基于AI算法提供个性化节能方案'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: '团队协作',
      description: '多用户协同管理能源使用'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: '张经理',
      company: '某制造企业',
      content: '通过这个平台，我们成功降低了15%的能源成本，投资回报率超出预期。'
    },
    {
      name: '李总监',
      company: '连锁酒店集团',
      content: '智能预测功能帮助我们精准规划能源采购，避免了资源浪费。'
    },
    {
      name: '王工程师',
      company: '数据中心',
      content: '实时监控系统让我们能快速响应异常情况，保障了设备稳定运行。'
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      title: '能源管理的新趋势',
      excerpt: '探索AI如何改变传统能源管理方式',
      date: '2023-10-15',
      image: 'https://nocode.meituan.com/photo/search?keyword=energy,technology,trend&width=400&height=200'
    },
    {
      title: '碳中和实践指南',
      excerpt: '企业实现碳中和的五大关键步骤',
      date: '2023-09-28',
      image: 'https://nocode.meituan.com/photo/search?keyword=carbon,neutral,industry&width=400&height=200'
    },
    {
      title: '智能电网的未来',
      excerpt: '分布式能源如何重塑电力网络',
      date: '2023-09-12',
      image: 'https://nocode.meituan.com/photo/search?keyword=smart,grid,power&width=400&height=200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header handleTrialClick={handleTrialClick} />
      <HeroSection handleTrialClick={handleTrialClick} />
      <ClientLogos />
      <FeaturesSection features={features} />
      <SolutionsSection />
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection handleTrialClick={handleTrialClick} />
      <BlogSection blogPosts={blogPosts} />
      <Footer />
    </div>
  );
}

export default Index;
