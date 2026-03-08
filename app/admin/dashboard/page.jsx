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
  const [achievements, setAchievements] = useState([])
  const [banners, setBanners] = useState({
    aboutUs: '/images/1.png',
    courses: '/images/2.png',
    facilities: '/images/3.png',
    blogs: '/images/4.png',
    whyIma: '/images/5.png',
    contactUs: '/images/1.png'
  })
  const [courses, setCourses] = useState([
    { id: 42147, title: 'Pre Foundation Course', price: 'Free', description: 'Foundation course for early preparation', content: 'Complete foundation course details...', image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png' },
    { id: 42161, title: 'NEET Preparation', price: 'Free',  description: 'Complete NEET preparation course', content: 'NEET course includes all subjects...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42286, title: 'JEE (Mains+Advance)', price: 'Free', description: 'JEE Mains and Advanced preparation', content: 'Complete JEE preparation package...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42385, title: 'All India Test Series (AITS)', price: 'Free',  description: 'All India Test Series for practice', content: 'Regular test series for assessment...', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({ title: '', date: '',  description: '', content: [], image: '', imageFile: null })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('adminLoggedIn')) {
        router.push('/admin/login')
      }
      const savedBlogs = localStorage.getItem('blogs')
      const savedCourses = localStorage.getItem('courses')
      const savedRegistrations = localStorage.getItem('registrations')
      const savedCourseRegistrations = localStorage.getItem('courseRegistrations')
      const savedAchievements = localStorage.getItem('achievements')
      const savedBanners = localStorage.getItem('banners')
      if (savedBlogs) setBlogs(JSON.parse(savedBlogs))
      if (savedCourses) setCourses(JSON.parse(savedCourses))
      if (savedRegistrations) setRegistrations(JSON.parse(savedRegistrations))
      if (savedCourseRegistrations) setCourseRegistrations(JSON.parse(savedCourseRegistrations))
      if (savedAchievements) setAchievements(JSON.parse(savedAchievements))
      if (savedBanners) setBanners(JSON.parse(savedBanners))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  const handleAdd = () => {
    setEditItem(null)
    setFormData({ title: '', date: '', description: '', content: [], image: '', imageFile: null })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitData = {...formData}
    
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
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="min-h-screen" style={{background: '#f5f5f5', display: 'flex'}}>
        <div style={{width: '250px', background: '#1B5A96', minHeight: '100vh', position: 'fixed', left: 0, top: 0}}>
          <div style={{padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
            <img src="/images/new_logo.png" width="100" height="40" alt="IMA Jodhpur" />
          </div>
          <div style={{padding: '20px 0'}}>
            <button onClick={() => setActiveTab('inquiries')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'inquiries' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'inquiries' ? '4px solid white' : '4px solid transparent'}}>
              <i className="fa fa-trophy" style={{marginRight: '10px'}}></i>STHE
            </button>
            <button onClick={() => setActiveTab('registrations')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'registrations' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'registrations' ? '4px solid white' : '4px solid transparent'}}>
              <i className="fa fa-user-plus" style={{marginRight: '10px'}}></i>Registrations
            </button>
            <button onClick={() => setActiveTab('blogs')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'blogs' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'blogs' ? '4px solid white' : '4px solid transparent'}}>
              <i className="fa fa-newspaper-o" style={{marginRight: '10px'}}></i>Blogs
            </button>
            <button onClick={() => setActiveTab('courses')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'courses' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'courses' ? '4px solid white' : '4px solid transparent'}}>
              <i className="fa fa-book" style={{marginRight: '10px'}}></i>Courses
            </button>
            <button onClick={() => setActiveTab('achievements')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'achievements' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'achievements' ? '4px solid white' : '4px solid transparent'}}>
              <i className="fa fa-trophy" style={{marginRight: '10px'}}></i>Achievements
            </button>
            <button onClick={() => setActiveTab('banners')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'banners' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'banners' ? '4px solid white' : '4px solid transparent'}}>
              <i className="fa fa-image" style={{marginRight: '10px'}}></i>Banners
            </button>
          </div>
        </div>

        <div style={{marginLeft: '250px', flex: 1}}>
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold" style={{color: '#1B5A96'}}>Admin Dashboard</h1>
            <button onClick={handleLogout} className="px-4 py-2 rounded text-white font-semibold" style={{background: '#dc3545'}}>
              <i className="fa fa-sign-out mr-2"></i>Logout
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab !== 'inquiries' && activeTab !== 'registrations' && activeTab !== 'achievements' && activeTab !== 'banners' && (
              <button onClick={handleAdd} className="mb-6 px-6 py-2 rounded text-white font-semibold" style={{background: '#1B5A96'}}>
                <i className="fa fa-plus mr-2"></i>Add {activeTab === 'blogs' ? 'Blog' : 'Course'}
              </button>
            )}

            <div className="overflow-x-auto">
              {activeTab === 'achievements' ? (
                <div>
                  <h2 className="text-xl font-bold mb-4" style={{color: '#1B5A96'}}>Manage Achievements</h2>
                  <button onClick={() => {
                    const heading = prompt('Enter achievement heading:')
                    if (heading) {
                      const newAchievement = { id: Date.now(), heading, image: '' }
                      const updated = [...achievements, newAchievement]
                      setAchievements(updated)
                      localStorage.setItem('achievements', JSON.stringify(updated))
                    }
                  }} className="mb-4 px-4 py-2 rounded text-white font-semibold" style={{background: '#1B5A96'}}>
                    <i className="fa fa-plus mr-2"></i>Add Achievement
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} style={{border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px'}}>
                        <h3 className="font-bold mb-2">{achievement.heading}</h3>
                        {achievement.image && <img src={achievement.image} alt={achievement.heading} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px'}} />}
                        <input type="file" accept="image/*" onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            if (confirm('Are you sure you want to upload this image?')) {
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                const updated = achievements.map(a => a.id === achievement.id ? {...a, image: reader.result} : a)
                                setAchievements(updated)
                                localStorage.setItem('achievements', JSON.stringify(updated))
                                alert('Image uploaded successfully!')
                              }
                              reader.readAsDataURL(file)
                            } else {
                              e.target.value = ''
                            }
                          }
                        }} style={{width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', marginBottom: '8px'}} />
                        <div className="flex gap-2">
                          {achievement.image && (
                            <button onClick={() => {
                              if (confirm('Are you sure you want to remove this image?')) {
                                const updated = achievements.map(a => a.id === achievement.id ? {...a, image: ''} : a)
                                setAchievements(updated)
                                localStorage.setItem('achievements', JSON.stringify(updated))
                                alert('Image removed successfully!')
                              }
                            }} style={{flex: 1, padding: '8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer'}}>Remove Image</button>
                          )}
                          <button onClick={() => {
                            if (confirm('Are you sure you want to delete this achievement?')) {
                              const updated = achievements.filter(a => a.id !== achievement.id)
                              setAchievements(updated)
                              localStorage.setItem('achievements', JSON.stringify(updated))
                            }
                          }} style={{flex: 1, padding: '8px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer'}}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeTab === 'banners' ? (
                <div>
                  <h2 className="text-xl font-bold mb-4" style={{color: '#1B5A96'}}>Manage Page Banners</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.keys(banners).map((page) => (
                      <div key={page} style={{border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px'}}>
                        <h3 className="font-bold mb-2" style={{textTransform: 'capitalize'}}>{page.replace(/([A-Z])/g, ' $1').trim()}</h3>
                        {banners[page] && <img src={banners[page]} alt={page} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px'}} />}
                        <input type="file" accept="image/*" onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            if (confirm('Are you sure you want to upload this banner image?')) {
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                const newBanners = {...banners, [page]: reader.result}
                                setBanners(newBanners)
                                localStorage.setItem('banners', JSON.stringify(newBanners))
                                alert('Banner updated successfully!')
                              }
                              reader.readAsDataURL(file)
                            } else {
                              e.target.value = ''
                            }
                          }
                        }} style={{width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', marginBottom: '8px'}} />
                        {banners[page] && (
                          <button onClick={() => {
                            if (confirm('Are you sure you want to remove this banner image?')) {
                              const newBanners = {...banners, [page]: ''}
                              setBanners(newBanners)
                              localStorage.setItem('banners', JSON.stringify(newBanners))
                              alert('Banner removed successfully!')
                            }
                          }} style={{width: '100%', padding: '8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer'}}>Remove Image</button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeTab === 'inquiries' ? (
                <table className="w-full">
                  <thead style={{background: '#f8f9fa'}}>
                    <tr>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">WhatsApp Number </th>
                      <th className="px-4 py-3 text-left">Course</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b">
                        <td className="px-4 py-3">{reg.date}</td>
                        <td className="px-4 py-3">{reg.name}</td>
                        <td className="px-4 py-3">{reg.phone}</td>
                        <td className="px-4 py-3">{reg.course}</td>
                        <td className="px-4 py-3">
                          <button onClick={() => {
                            if (confirm('Are you sure you want to delete this registration?')) {
                              const updated = registrations.filter(r => r.id !== reg.id)
                              setRegistrations(updated)
                              localStorage.setItem('registrations', JSON.stringify(updated))
                            }
                          }} className="px-3 py-1 rounded text-white" style={{background: '#dc3545'}}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
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
                      <th className="px-4 py-3 text-left">WhatsApp Number</th>
                      <th className="px-4 py-3 text-left">Course</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseRegistrations.map((reg) => (
                      <tr key={reg.id} className="border-b">
                        <td className="px-4 py-3">{reg.date}</td>
                        <td className="px-4 py-3">{reg.name}</td>
                        <td className="px-4 py-3">{reg.phone}</td>
                        <td className="px-4 py-3">{reg.course}</td>
                        <td className="px-4 py-3">
                          <button onClick={() => {
                            if (confirm('Are you sure you want to delete this registration?')) {
                              const updated = courseRegistrations.filter(r => r.id !== reg.id)
                              setCourseRegistrations(updated)
                              localStorage.setItem('courseRegistrations', JSON.stringify(updated))
                            }
                          }} className="px-3 py-1 rounded text-white" style={{background: '#dc3545'}}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
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
          </div>
        </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)} style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-lg w-full max-w-xl p-6 max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-bold mb-3" style={{color: '#1B5A96'}}>
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
                    <button type="button" onClick={() => addContentItem('heading')} className="px-2 py-1 rounded text-white text-xs" style={{background: '#1B5A96'}}>
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
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{background: item.type === 'heading' ? '#1B5A96' : item.type === 'description' ? '#28a745' : '#ff6b9d', color: 'white', minWidth: '70px', textAlign: 'center'}}>
                      {item.type}
                    </span>
                    <input type="text" placeholder={item.type === 'heading' ? 'Heading text' : item.type === 'description' ? 'Description text' : 'Bullet point'} value={item.value} onChange={(e) => updateContentItem(index, e.target.value)} className="flex-1 outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '12px'}} />
                    <button type="button" onClick={() => removeContentItem(index)} className="text-red-600 text-xs px-2">
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
              {activeTab === 'blogs' && (
                <div className="mb-3">
                  <label className="block mb-1 font-semibold text-xs">Date</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full outline-none" style={{border: '1px solid #cfcccc', borderRadius: '4px', padding: '5px', fontSize: '13px'}} required />
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
                <button type="submit" className="flex-1 py-2 rounded text-white font-semibold" style={{background: '#1B5A96'}}>Save</button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 rounded text-white font-semibold" style={{background: '#6c757d'}}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}