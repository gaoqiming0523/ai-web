// 首页组件类型定义
export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  company: string;
  content: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
