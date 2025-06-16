import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/types/home';

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
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
  );
}
