import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SolutionsSection() {
  return (
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
  );
}
