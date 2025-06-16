import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CallToActionSectionProps {
  handleTrialClick: () => void;
}

export default function CallToActionSection({ handleTrialClick }: CallToActionSectionProps) {
  const [email, setEmail] = useState('');

  return (
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
  );
}
