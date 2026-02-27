'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      setBlogId(id);
      
      if (!id) return;
      
      const savedBlogs = localStorage.getItem('blogs');
      if (savedBlogs) {
        const blogs = JSON.parse(savedBlogs);
        const foundBlog = blogs.find(b => b.id == id);
        if (foundBlog) {
          setBlog(foundBlog);
        }
      }
    }
  }, []);

  if (!blog) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
        <Footer />
      </>
    );
  }

  // All blogs use the same clean design
  return (
    <>
      <Navbar />
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {blog.title}
              </h1>
              
              <div className="mb-8">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-lg"
                  style={{maxHeight: '250px', objectFit: 'contain'}}
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {typeof blog.content === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                ) : Array.isArray(blog.content) ? (
                  blog.content.map((item, index) => (
                    <div key={index}>
                      {item.type === 'heading' && <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">{item.value}</h3>}
                      {item.type === 'description' && <p className="mb-4 text-gray-700 leading-relaxed">{item.value}</p>}
                      {item.type === 'bullet' && (
                        <ul className="list-disc ml-6 mb-4">
                          <li className="text-gray-700">{item.value}</li>
                        </ul>
                      )}
                    </div>
                  ))
                ) : null}
              </div>

              <a href="/blog" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                ← Back to Blogs
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
