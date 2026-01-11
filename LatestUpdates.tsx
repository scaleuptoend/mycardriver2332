
import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const LatestUpdates: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section className="py-12 bg-[#f0f9ff] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-px flex-grow bg-blue-200"></div>
           <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 whitespace-nowrap">Service Updates</h2>
           <div className="h-px flex-grow bg-blue-200"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
               <span className="text-[10px] font-bold text-gray-400 block mb-2">
                 {new Date(post.created_at).toLocaleDateString()}
               </span>
               <h3 className="font-black text-[#003b5c] mb-2">{post.title}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
