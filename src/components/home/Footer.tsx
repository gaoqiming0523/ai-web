export default function Footer() {
  return (
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
          <p>© 2023 xx科技有限公司. 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
}
