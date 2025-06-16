import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  handleTrialClick: () => void;
}

export default function Header({ handleTrialClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
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
  );
}
