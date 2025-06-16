import { useState } from 'react';
import { ChevronRight, BarChart, Lightbulb, Users, BookOpen, Check, ArrowRight, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom'; // 添加路由导航功能

function Index() {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // 获取导航函数

  // 处理免费试用按钮点击 - 直接跳转到语音交互页面
  const handleTrialClick = () => {
    navigate('/voice-interaction'); // 跳转到语音交互页面
  };

  const features = [
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

  const testimonials = [
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

  const blogPosts = [
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

  const clientLogoImages = [
    'https://nocode.meituan.com/photo/search?keyword=business,office&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=technology,chip&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=energy,wind&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=building,modern&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=factory,industry&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=solar,panel&width=100&height=60'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 w-8 h-8 rounded-lg"></div>
            <span className="text-xl font-bold text-blue-800">xx</span>
          </div>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              功能
            </ScrollLink>
            <ScrollLink
              to="solutions"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              解决方案
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              客户案例
            </ScrollLink>
            <ScrollLink
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              博客
            </ScrollLink>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hidden sm:inline-flex">登录</Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 hidden sm:inline-flex"
              onClick={handleTrialClick}
            >
              免费试用
            </Button>
            
            {/* 移动端菜单按钮 */}
            <Button 
              variant="ghost" 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* 移动端导航菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <ScrollLink
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                功能
              </ScrollLink>
              <ScrollLink
                to="solutions"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                解决方案
              </ScrollLink>
              <ScrollLink
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                客户案例
              </ScrollLink>
              <ScrollLink
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                博客
              </ScrollLink>
              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" className="text-gray-600 flex-1">登录</Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                  onClick={() => {
                    handleTrialClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  免费试用
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 英雄区域 */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              智能能源管理<br />
              <span className="text-blue-600">驱动可持续发展</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg">
              利用人工智能优化能源使用，降低碳排放，实现企业可持续发展目标
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 h-12 px-6 text-base md:text-lg"
                onClick={handleTrialClick}
              >
                开始免费试用 <ChevronRight className="ml-2" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base md:text-lg border-blue-600 text-blue-600">
                查看演示
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 order-1 md:order-2">
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden">
                <img 
                  src="https://nocode.meituan.com/photo/search?keyword=energy,technology,dashboard&width=800&height=800" 
                  alt="能源管理仪表盘" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 w-56">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">能耗降低</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-blue-600">15-30%</div>
                <p className="text-gray-500 text-xs md:text-sm mt-1">平均节能效果</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 客户LOGO */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-6">受到行业领先企业的信任</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {clientLogoImages.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`合作伙伴 ${i+1}`} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特性 */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">强大的能源管理功能</h2>
            <p className="text-base md:text-lg text-gray-600">
              从实时监控到预测分析，全方位优化您的能源使用
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-50 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                  <Button variant="link" className="pl-0 mt-3 text-blue-600 text-sm md:text-base">
                    了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section id="solutions" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">行业解决方案</h2>
            <p className="text-base md:text-lg text-gray-600">
              针对不同行业的定制化能源管理方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">制造业</h3>
                  <p className="text-gray-600 text-sm">优化生产流程，降低能源成本</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {['生产设备能耗优化', '厂区能源系统集成', '碳排放追踪与报告', '能效对标分析'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="border-blue-600 text-blue-600 text-sm md:text-base">
                查看案例研究
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">商业地产</h3>
                  <p className="text-gray-600 text-sm">智能楼宇管理，提升能效表现</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {['楼宇能源管理系统', '租户能耗分摊', '智能照明控制', '暖通空调优化'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="border-blue-600 text-blue-600 text-sm md:text-base">
                查看案例研究
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">客户评价</h2>
            <p className="text-base md:text-lg text-gray-600">
              听听我们的客户怎么说
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-3" />
                  <div>
                    <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="text-yellow-400 flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm md:text-base">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">准备好优化您的能源管理了吗？</h2>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            立即开始免费试用，体验智能能源管理带来的变革
          </p>
          
          <div className="max-w-md mx-auto flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="输入您的邮箱"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 text-sm md:text-base"
            />
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-6 text-sm md:text-base"
              onClick={handleTrialClick}
            >
              开始免费试用
            </Button>
          </div>
          <p className="mt-3 text-blue-200 text-xs md:text-sm">14天免费试用 · 无需信用卡</p>
        </div>
      </section>

      {/* 博客 */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">最新博客</h2>
              <p className="text-base md:text-lg text-gray-600">了解能源管理的最新趋势和见解</p>
            </div>
            <Button variant="link" className="text-blue-600 text-base md:text-lg pl-0 sm:pl-4">
              查看全部 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <span className="text-xs md:text-sm text-gray-500">{post.date}</span>
                  <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">{post.excerpt}</p>
                  <Button variant="link" className="pl-0 text-blue-600 text-sm md:text-base">
                    阅读更多
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg"></div>
                <span className="text-lg font-bold">xx</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                领先的AI能源管理平台，帮助企业实现可持续发展目标
              </p>
              <div className="flex space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded-full p-2">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['功能', '解决方案', '定价', '集成', 'API'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">资源</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['博客', '文档', '案例研究', '帮助中心', '社区'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>北京市海淀区科技园区88号</li>
                <li>电话: 400-123-4567</li>
                <li>邮箱: contact@example.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs md:text-sm">
            <p>© 2023 xxx科技有限公司. 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
