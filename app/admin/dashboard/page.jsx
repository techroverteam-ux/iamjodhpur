'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('inquiries')
  const [registrations, setRegistrations] = useState([])
  const [courseRegistrations, setCourseRegistrations] = useState([])
  const [blogs, setBlogs] = useState([])
  const [courses, setCourses] = useState([
    { id: 42147, title: 'Pre Foundation Course', price: 'Free', validity: '354 Days', description: 'Foundation course for early preparation', content: 'Complete foundation course details...', image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png' },
    { id: 42161, title: 'NEET Preparation', price: 'Free', validity: '365 Days', description: 'Complete NEET preparation course', content: 'NEET course includes all subjects...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42286, title: 'JEE (Mains+Advance)', price: 'Free', validity: '365 Days', description: 'JEE Mains and Advanced preparation', content: 'Complete JEE preparation package...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42385, title: 'All India Test Series (AITS)', price: 'Free', validity: '365 Days', description: 'All India Test Series for practice', content: 'Regular test series for assessment...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [enquiries, setEnquiries] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({ title: '', date: '', category: '', price: '', discountedPrice: '', validity: '', description: '', content: [], image: '', imageFile: null })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('adminLoggedIn')) {
        router.push('/admin/login')
      }
      const savedBlogs = localStorage.getItem('blogs')
      const savedCourses = localStorage.getItem('courses')
      const savedEnquiries = localStorage.getItem('enquiries')
      const savedRegistrations = localStorage.getItem('registrations')
      const savedCourseRegistrations = localStorage.getItem('courseRegistrations')
      if (savedBlogs) setBlogs(JSON.parse(savedBlogs))
      if (savedCourses) setCourses(JSON.parse(savedCourses))
      if (savedEnquiries) setEnquiries(JSON.parse(savedEnquiries))
      if (savedRegistrations) setRegistrations(JSON.parse(savedRegistrations))
      if (savedCourseRegistrations) setCourseRegistrations(JSON.parse(savedCourseRegistrations))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  const handleAdd = () => {
    setEditItem(null)
    setFormData({ title: '', date: '', category: '', validity: '', description: '', content: [], image: '', imageFile: null })
    setShowModal(true)
  }

  const handleEdit = (item) => {
    setEditItem(item)
    const editContent = Array.isArray(item.content) ? item.content : (item.sections ? [] : [])
    setFormData({...item, content: editContent, imageFile: null})
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete?')) {
      if (activeTab === 'blogs') {
        const updatedBlogs = blogs.filter(b => b.id !== id)
        setBlogs(updatedBlogs)
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
      } else {
        const updatedCourses = courses.filter(c => c.id !== id)
        setCourses(updatedCourses)
        localStorage.setItem('courses', JSON.stringify(updatedCourses))
      }
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({...formData, image: reader.result, imageFile: file})
      }
      reader.readAsDataURL(file)
    }
  }

  const addContentItem = (type) => {
    setFormData({...formData, content: [...formData.content, { type, value: '' }]})
  }

  const updateContentItem = (index, value) => {
    const newContent = [...formData.content]
    newContent[index].value = value
    setFormData({...formData, content: newContent})
  }

  const removeContentItem = (index) => {
    setFormData({...formData, content: formData.content.filter((_, i) => i !== index)})
  }

  const getCurrentData = () => {
    if (activeTab === 'blogs') return blogs
    if (activeTab === 'courses') return courses
    return enquiries
  }
  
  const getCurrentItems = () => {
    const data = getCurrentData()
    const startIndex = (currentPage - 1) * itemsPerPage
    return data.slice(startIndex, startIndex + itemsPerPage)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitData = {...formData}
    
    // Preserve original content if no new content added during edit
    if (editItem && (!submitData.content || submitData.content.length === 0)) {
      if (editItem.content && editItem.content.length > 0) {
        submitData.content = editItem.content
      }
      if (editItem.sections && editItem.sections.length > 0) {
        submitData.sections = editItem.sections
      }
    }
    
    if (activeTab === 'blogs') {
      const updatedBlogs = editItem ? blogs.map(b => b.id === editItem.id ? { ...submitData, id: editItem.id } : b) : [...blogs, { ...submitData, id: Date.now() }]
      setBlogs(updatedBlogs)
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
    } else {
      const updatedCourses = editItem ? courses.map(c => c.id === editItem.id ? { ...submitData, id: editItem.id } : c) : [...courses, { ...submitData, id: Date.now() }]
      setCourses(updatedCourses)
      localStorage.setItem('courses', JSON.stringify(updatedCourses))
    }
    setShowModal(false)
    setCurrentPage(1)
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="min-h-screen" style={{background: '#f5f5f5'}}>
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="/images/new_logo.png" width={100} height={40} alt="IMA Jodhpur" />
              <h1 className="text-xl font-bold" style={{color: '#0B4F8A'}}>Admin Dashboard</h1>
            </div>
            <button onClick={handleLogout} className="px-4 py-2 rounded text-white font-semibold" style={{background: '#dc3545'}}>
              <i className="fa fa-sign-out mr-2"></i>Logout
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-800">
              <strong>Admin Login:</strong> URL: /admin/login | Email: admin@imajodhpur.com | Password: admin123
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex gap-4 mb-6 border-b">
              <button onClick={() => setActiveTab('inquiries')} className={`px-6 py-3 font-semibold ${activeTab === 'inquiries' ? 'border-b-2' : ''}`} style={activeTab === 'inquiries' ? {borderColor: '#0B4F8A', color: '#0B4F8A'} : {color: '#666'}}>
                <i className="fa fa-users mr-2"></i>Inquiries
              </button>
              <button onClick={() => setActiveTab('registrations')} className={`px-6 py-3 font-semibold ${activeTab === 'registrations' ? 'border-b-2' : ''}`} style={activeTab === 'registrations' ? {borderColor: '#0B4F8A', color: '#0B4F8A'} : {color: '#666'}}>
                <i className="fa fa-user-plus mr-2"></i>Registrations
              </button>
              <button onClick={() => setActiveTab('blogs')} className={`px-6 py-3 font-semibold ${activeTab === 'blogs' ? 'border-b-2' : ''}`} style={activeTab === 'blogs' ? {borderColor: '#0B4F8A', color: '#0B4F8A'} : {color: '#666'}}>
                <i className="fa fa-newspaper-o mr-2"></i>Blogs
              </button>
              <button onClick={() => setActiveTab('courses')} className={`px-6 py-3 font-semibold ${activeTab === 'courses' ? 'border-b-2' : ''}`} style={activeTab === 'courses' ? {borderColor: '#0B4F8A', color: '#0B4F8A'} : {color: '#666'}}>
                <i className="fa fa-book mr-2"></i>Courses
              </button>
              <button onClick={() => setActiveTab('enquiries')} className={`px-6 py-3 font-semibold ${activeTab === 'enquiries' ? 'border-b-2' : ''}`} style={activeTab === 'enquiries' ? {borderColor: '#0B4F8A', color: '#0B4F8A'} : {color: '#666'}}>
                <i className="fa fa-envelope mr-2"></i>Enquiries
              </button>
            </div>

            {activeTab !== 'inquiries' && activeTab !== 'registrations' && activeTab !== 'enquiries' && (
              <button onClick={handleAdd} className="mb-6 px-6 py-2 rounded text-white font-semibold" style={{background: '#0B4F8A'}}>
                <i className="fa fa-plus mr-2"></i>Add {activeTab === 'blogs' ? 'Blog' : 'Course'}
              </button>
            )}

            <div className="overflow-x-auto">
              {activeTab === 'inquiries' ? (
                <table className="w-full">
                  <thead style={{background: '#f8f9fa'}}>
                    <tr>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Phone</th>
                      <th className="px-4 py-3 text-left">Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b">
                        <td className="px-4 py-3">{reg.date}</td>
                        <td className="px-4 py-3">{reg.name}</td>
                        <td className="px-4 py-3">{reg.email}</td>
                        <td className="px-4 py-3">{reg.phone}</td>
                        <td className="px-4 py-3">{reg.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : activeTab === 'registrations' ? (
                <table className="w-full">
                  <thead style={{background: '#f8f9fa'}}>
                    <tr>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Phone</th>
                      <th className="px-4 py-3 text-left">Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseRegistrations.map((reg) => (
                      <tr key={reg.id} className="border-b">
                        <td className="px-4 py-3">{reg.date}</td>
                        <td className="px-4 py-3">{reg.name}</td>
                        <td className="px-4 py-3">{reg.email}</td>
                        <td className="px-4 py-3">{reg.phone}</td>
                        <td className="px-4 py-3">{reg.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : activeTab === 'enquiries' ? (
                <table className="w-full text-sm">
                  <thead style={{background: '#f8f9fa'}}>
                    <tr>
                      <th className="px-2 py-2 text-left text-xs">Name</th>
                      <th className="px-2 py-2 text-left text-xs">Email</th>
                      <th className="px-2 py-2 text-left text-xs">Phone</th>
                      <th className="px-2 py-2 text-left text-xs">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCurrentItems().map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="px-2 py-2 text-xs">{item.name}</td>
                        <td className="px-2 py-2 text-xs">{item.email}</td>
                        <td className="px-2 py-2 text-xs">{item.phone}</td>
                        <td className="px-2 py-2 text-xs">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full">
                  <thead style={{background: '#f8f9fa'}}>
                    <tr>
                      <th className="px-4 py-3 text-left">Image</th>
                      <th className="px-4 py-3 text-left">Title</th>
                      {activeTab === 'blogs' ? (
                        <>
                          <th className="px-4 py-3 text-left">Date</th>
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
                          <td className="px-4 py-3">{item.date}</td>
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
              )}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-600">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, getCurrentData().length)} of {getCurrentData().length} entries
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded text-xs"
                  style={{background: currentPage === 1 ? '#e9ecef' : '#0B4F8A', color: currentPage === 1 ? '#6c757d' : 'white'}}
                >
                  Prev
                </button>
                {Array.from({length: Math.ceil(getCurrentData().length / itemsPerPage)}, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className="px-3 py-1 rounded text-xs"
                    style={{background: currentPage === i + 1 ? '#0B4F8A' : '#e9ecef', color: currentPage === i + 1 ? 'white' : '#6c757d'}}
                  >
                    {i + 1}
                  </button>
                ))}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(getCurrentData().length / itemsPerPage)))}
                  disabled={currentPage === Math.ceil(getCurrentData().length / itemsPerPage)}
                  className="px-3 py-1 rounded text-xs"
                  style={{background: currentPage === Math.ceil(getCurrentData().length / itemsPerPage) ? '#e9ecef' : '#0B4F8A', color: currentPage === Math.ceil(getCurrentData().length / itemsPerPage) ? '#6c757d' : 'white'}}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)} style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-lg w-full max-w-xl p-6 max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-bold mb-3" style={{color: '#0B4F8A'}}>
              {editItem ? 'Edit' : 'Add'} {activeTab === 'blogs' ? 'Blog' : 'Course'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-xs">Title</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} required />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-xs">Description (Optional)</label>
                <input type="text" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} />
              </div>
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-semibold text-xs">Content</label>
                  <div className="flex gap-1">
                    <button type="button" onClick={() => addContentItem('heading')} className="px-2 py-1 rounded text-white text-xs" style={{background: '#0B4F8A'}}>
                      +Heading
                    </button>
                    <button type="button" onClick={() => addContentItem('description')} className="px-2 py-1 rounded text-white text-xs" style={{background: '#28a745'}}>
                      +Desc
                    </button>
                    <button type="button" onClick={() => addContentItem('bullet')} className="px-2 py-1 rounded text-white text-xs" style={{background: '#ff6b9d'}}>
                      +Bullet
                    </button>
                  </div>
                </div>
                {Array.isArray(formData.content) && formData.content.map((item, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{background: item.type === 'heading' ? '#0B4F8A' : item.type === 'description' ? '#28a745' : '#ff6b9d', color: 'white', minWidth: '70px', textAlign: 'center'}}>
                      {item.type}
                    </span>
                    <input type="text" placeholder={item.type === 'heading' ? 'Heading text' : item.type === 'description' ? 'Description text' : 'Bullet point'} value={item.value} onChange={(e) => updateContentItem(index, e.target.value)} className="flex-1 outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '12px'}} />
                    <button type="button" onClick={() => removeContentItem(index)} className="text-red-600 text-xs px-2">
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
              {activeTab === 'blogs' ? (
                <div className="mb-3">
                  <label className="block mb-1 font-semibold text-xs">Date</label>
                  <input type="text" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} required />
                </div>
              ) : (
                <div className="mb-3">
                  <label className="block mb-1 font-semibold text-xs">Validity</label>
                  <input type="text" value={formData.validity} onChange={(e) => setFormData({...formData, validity: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} required />
                </div>
              )}
              <div className="mb-3">
                <label className="block mb-1 font-semibold text-xs">Upload Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '12px'}} />
                {formData.image && (
                  <div className="mt-1">
                    <img src={formData.image} alt="Preview" className="w-20 h-20 object-contain" style={{border: '1px solid #e0e0e0'}} />
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 py-2 rounded text-white font-semibold" style={{background: '#0B4F8A'}}>Save</button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 rounded text-white font-semibold" style={{background: '#6c757d'}}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
