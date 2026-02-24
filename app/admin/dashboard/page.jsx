'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('blogs')
  const [blogs, setBlogs] = useState([])
  const [courses, setCourses] = useState([
    { id: 42147, title: 'Pre Foundation Course', price: 'Free', validity: '354 Days', description: 'Foundation course for early preparation', content: 'Complete foundation course details...', image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png' },
    { id: 42161, title: 'NEET Preparation', price: 'Free', validity: '365 Days', description: 'Complete NEET preparation course', content: 'NEET course includes all subjects...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42286, title: 'JEE (Mains+Advance)', price: 'Free', validity: '365 Days', description: 'JEE Mains and Advanced preparation', content: 'Complete JEE preparation package...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42385, title: 'All India Test Series (AITS)', price: 'Free', validity: '365 Days', description: 'All India Test Series for practice', content: 'Regular test series for assessment...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({ title: '', date: '', category: '', price: '', discountedPrice: '', validity: '', description: '', content: [], image: '', imageFile: null })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('adminLoggedIn')) {
        router.push('/admin/login')
      }
      const savedBlogs = localStorage.getItem('blogs')
      const savedCourses = localStorage.getItem('courses')
      if (savedBlogs) setBlogs(JSON.parse(savedBlogs))
      if (savedCourses) setCourses(JSON.parse(savedCourses))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  const handleAdd = () => {
    setEditItem(null)
    setFormData({ title: '', date: '', category: '', price: '', discountedPrice: '', validity: '', description: '', content: [], image: '', imageFile: null })
    setShowModal(true)
  }

  const handleEdit = (item) => {
    setEditItem(item)
    const editContent = Array.isArray(item.content) ? item.content : []
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeTab === 'blogs') {
      const updatedBlogs = editItem ? blogs.map(b => b.id === editItem.id ? { ...formData, id: editItem.id } : b) : [...blogs, { ...formData, id: Date.now() }]
      setBlogs(updatedBlogs)
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
    } else {
      const updatedCourses = editItem ? courses.map(c => c.id === editItem.id ? { ...formData, id: editItem.id } : c) : [...courses, { ...formData, id: Date.now() }]
      setCourses(updatedCourses)
      localStorage.setItem('courses', JSON.stringify(updatedCourses))
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
          <div className="bg-white rounded-lg w-full max-w-xl p-6 max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-bold mb-3" style={{color: '#1977f3'}}>
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
                    <button type="button" onClick={() => addContentItem('heading')} className="px-2 py-1 rounded text-white text-xs" style={{background: '#1977f3'}}>
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
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{background: item.type === 'heading' ? '#1977f3' : item.type === 'description' ? '#28a745' : '#ff6b9d', color: 'white', minWidth: '70px', textAlign: 'center'}}>
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
                <>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <label className="block mb-1 font-semibold text-xs">Price</label>
                      <input type="text" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} required />
                    </div>
                    <div>
                      <label className="block mb-1 font-semibold text-xs">Discounted Price</label>
                      <input type="text" value={formData.discountedPrice} onChange={(e) => setFormData({...formData, discountedPrice: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block mb-1 font-semibold text-xs">Validity</label>
                    <input type="text" value={formData.validity} onChange={(e) => setFormData({...formData, validity: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} required />
                  </div>
                </>
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
