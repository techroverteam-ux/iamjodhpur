'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('blogs')
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'NEET Counseling 2024: Complete Guide', date: '15 Dec 2024', category: 'NEET', description: 'Complete guide for NEET counseling process', content: 'Detailed content about NEET counseling...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 2, title: 'Why Choose IMA Jodhpur for Your Preparation', date: '10 Dec 2024', category: 'General', description: 'Discover why IMA Jodhpur is the best choice', content: 'IMA Jodhpur offers excellent coaching...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 3, title: 'JEE Counseling Process 2024', date: '8 Dec 2024', category: 'JEE', description: 'Step by step JEE counseling guide', content: 'JEE counseling process explained...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 4, title: 'JEE Main 2024: Everything You Need to Know', date: '5 Dec 2024', category: 'JEE', description: 'Complete JEE Main preparation guide', content: 'JEE Main exam pattern and preparation tips...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 5, title: 'NEET 2024: Exam Pattern and Syllabus', date: '1 Dec 2024', category: 'NEET', description: 'NEET exam pattern and syllabus details', content: 'NEET syllabus and exam pattern explained...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [courses, setCourses] = useState([
    { id: 42147, title: 'Pre Foundation Course', price: 'Free', validity: '354 Days', description: 'Foundation course for early preparation', content: 'Complete foundation course details...', image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png' },
    { id: 42161, title: 'NEET Preparation', price: 'Free', validity: '365 Days', description: 'Complete NEET preparation course', content: 'NEET course includes all subjects...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42286, title: 'JEE (Mains+Advance)', price: 'Free', validity: '365 Days', description: 'JEE Mains and Advanced preparation', content: 'Complete JEE preparation package...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42385, title: 'All India Test Series (AITS)', price: 'Free', validity: '365 Days', description: 'All India Test Series for practice', content: 'Regular test series for assessment...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({ title: '', date: '', category: '', price: '', validity: '', description: '', content: '', image: '' })

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('adminLoggedIn')) {
      router.push('/admin/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  const handleAdd = () => {
    setEditItem(null)
    setFormData({ title: '', date: '', category: '', price: '', validity: '', description: '', content: '', image: '' })
    setShowModal(true)
  }

  const handleEdit = (item) => {
    setEditItem(item)
    setFormData(item)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete?')) {
      if (activeTab === 'blogs') {
        setBlogs(blogs.filter(b => b.id !== id))
      } else {
        setCourses(courses.filter(c => c.id !== id))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeTab === 'blogs') {
      if (editItem) {
        setBlogs(blogs.map(b => b.id === editItem.id ? { ...formData, id: editItem.id } : b))
      } else {
        setBlogs([...blogs, { ...formData, id: Date.now() }])
      }
    } else {
      if (editItem) {
        setCourses(courses.map(c => c.id === editItem.id ? { ...formData, id: editItem.id } : c))
      } else {
        setCourses([...courses, { ...formData, id: Date.now() }])
      }
    }
    setShowModal(false)
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="min-h-screen" style={{background: '#f5f5f5'}}>
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png" width={100} height={40} alt="IMA Jodhpur" />
              <h1 className="text-xl font-bold" style={{color: '#1977f3'}}>Admin Dashboard</h1>
            </div>
            <button onClick={handleLogout} className="px-4 py-2 rounded text-white font-semibold" style={{background: '#dc3545'}}>
              <i className="fa fa-sign-out mr-2"></i>Logout
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex gap-4 mb-6 border-b">
              <button onClick={() => setActiveTab('blogs')} className={`px-6 py-3 font-semibold ${activeTab === 'blogs' ? 'border-b-2' : ''}`} style={activeTab === 'blogs' ? {borderColor: '#1977f3', color: '#1977f3'} : {color: '#666'}}>
                <i className="fa fa-newspaper-o mr-2"></i>Blogs
              </button>
              <button onClick={() => setActiveTab('courses')} className={`px-6 py-3 font-semibold ${activeTab === 'courses' ? 'border-b-2' : ''}`} style={activeTab === 'courses' ? {borderColor: '#1977f3', color: '#1977f3'} : {color: '#666'}}>
                <i className="fa fa-book mr-2"></i>Courses
              </button>
            </div>

            <button onClick={handleAdd} className="mb-6 px-6 py-2 rounded text-white font-semibold" style={{background: '#1977f3'}}>
              <i className="fa fa-plus mr-2"></i>Add {activeTab === 'blogs' ? 'Blog' : 'Course'}
            </button>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{background: '#f8f9fa'}}>
                  <tr>
                    <th className="px-4 py-3 text-left">Image</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    {activeTab === 'blogs' ? (
                      <>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Category</th>
                      </>
                    ) : (
                      <>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-left">Validity</th>
                      </>
                    )}
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === 'blogs' ? blogs : courses).map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-4 py-3">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                      </td>
                      <td className="px-4 py-3">{item.title}</td>
                      {activeTab === 'blogs' ? (
                        <>
                          <td className="px-4 py-3">{item.date}</td>
                          <td className="px-4 py-3">{item.category}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-4 py-3">{item.price}</td>
                          <td className="px-4 py-3">{item.validity}</td>
                        </>
                      )}
                      <td className="px-4 py-3">
                        <button onClick={() => handleEdit(item)} className="px-3 py-1 rounded text-white mr-2" style={{background: '#28a745'}}>
                          <i className="fa fa-edit"></i>
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="px-3 py-1 rounded text-white" style={{background: '#dc3545'}}>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)} style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-3" style={{color: '#1977f3'}}>
              {editItem ? 'Edit' : 'Add'} {activeTab === 'blogs' ? 'Blog' : 'Course'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-sm">Title</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-sm">Description</label>
                <input type="text" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-sm">Content</label>
                <textarea value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} rows="3" className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required></textarea>
              </div>
              {activeTab === 'blogs' ? (
                <>
                  <div className="mb-3">
                    <label className="block mb-1 font-semibold text-sm">Date</label>
                    <input type="text" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
                  </div>
                  <div className="mb-3">
                    <label className="block mb-1 font-semibold text-sm">Category</label>
                    <input type="text" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="block mb-1 font-semibold text-sm">Price</label>
                    <input type="text" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
                  </div>
                  <div className="mb-3">
                    <label className="block mb-1 font-semibold text-sm">Validity</label>
                    <input type="text" value={formData.validity} onChange={(e) => setFormData({...formData, validity: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
                  </div>
                </>
              )}
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-sm">Image URL</label>
                <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '8px', fontSize: '14px'}} required />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 py-2 rounded text-white font-semibold" style={{background: '#1977f3'}}>Save</button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 rounded text-white font-semibold" style={{background: '#6c757d'}}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
