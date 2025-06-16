import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  handleTrialClick: () => void;
}

export default function HeroSection({ handleTrialClick }: HeroSectionProps) {
  return (
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
  );
}
