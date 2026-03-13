'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { fetchData, addData, updateData, deleteData } from '../../../lib/clientDataUtils'
import { TrophyIcon, UserIcon, BookIcon, PlusIcon, EditIcon, DeleteIcon, LogoutIcon, ImageIcon, NewsIcon, CloseIcon } from '../../../lib/icons'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('inquiries')
  const [data, setData] = useState({
    users: [],
    courses: [],
    blogs: [],
    testimonials: [],
    achievements: [],
    facilities: [],
    events: [],
    banners: {}
  })
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({ title: '', date: '', description: '', content: [], image: '', imageFile: null })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('adminLoggedIn')) {
        router.push('/admin/login')
      }
      loadData()
    }
  }, [router])

  const loadData = async () => {
    const result = await fetchData()
    if (result) {
      setData(result)
    }
  }

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
    const editContent = Array.isArray(item.content) ? item.content : []
    setFormData({...item, content: editContent, imageFile: null})
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete?')) {
      const result = await deleteData(activeTab, id)
      if (result.success) {
        loadData()
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submitData = {...formData}
    
    let result
    if (editItem) {
      result = await updateData(activeTab, editItem.id, submitData)
    } else {
      result = await addData(activeTab, submitData)
    }
    
    if (result.success) {
      loadData()
      setShowModal(false)
    }
  }

  const handleAchievementAdd = async () => {
    const heading = prompt('Enter achievement heading:')
    if (heading) {
      const result = await addData('achievements', { heading, image: '' })
      if (result.success) {
        loadData()
      }
    }
  }

  const handleAchievementImageUpload = async (achievement, file) => {
    if (confirm('Are you sure you want to upload this image?')) {
      const reader = new FileReader()
      reader.onloadend = async () => {
        const result = await updateData('achievements', achievement.id, {...achievement, image: reader.result})
        if (result.success) {
          loadData()
          alert('Image uploaded successfully!')
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAchievementImageRemove = async (achievement) => {
    if (confirm('Are you sure you want to remove this image?')) {
      const result = await updateData('achievements', achievement.id, {...achievement, image: ''})
      if (result.success) {
        loadData()
        alert('Image removed successfully!')
      }
    }
  }

  const handleBannerUpload = async (page, file) => {
    if (confirm('Are you sure you want to upload this banner image?')) {
      const reader = new FileReader()
      reader.onloadend = async () => {
        const newBanners = {...(data.banners || {}), [page]: reader.result}
        const result = await updateData('banners', 'main', newBanners)
        if (result.success) {
          loadData()
          alert('Banner updated successfully!')
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBannerRemove = async (page) => {
    if (confirm('Are you sure you want to remove this banner image?')) {
      const newBanners = {...(data.banners || {}), [page]: ''}
      const result = await updateData('banners', 'main', newBanners)
      if (result.success) {
        loadData()
        alert('Banner removed successfully!')
      }
    }
  }

  const banners = data.banners || {
    aboutUs: '/images/1.png',
    courses: '/images/2.png',
    facilities: '/images/3.png',
    blogs: '/images/4.png',
    whyIma: '/images/5.png',
    contactUs: '/images/1.png'
  }

  return (
    <div className="min-h-screen" style={{background: '#f5f5f5', display: 'flex'}}>
      <div style={{width: '250px', background: '#1B5A96', minHeight: '100vh', position: 'fixed', left: 0, top: 0}}>
        <div style={{padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
          <img src="/images/new_logo.png" width="100" height="40" alt="IMA Jodhpur" />
        </div>
        <div style={{padding: '20px 0'}}>
          <button onClick={() => setActiveTab('inquiries')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'inquiries' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'inquiries' ? '4px solid white' : '4px solid transparent', display: 'flex', alignItems: 'center'}}>
            <TrophyIcon style={{marginRight: '10px'}} size={16} />STHE
          </button>
          <button onClick={() => setActiveTab('registrations')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'registrations' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'registrations' ? '4px solid white' : '4px solid transparent', display: 'flex', alignItems: 'center'}}>
            <UserIcon style={{marginRight: '10px'}} size={16} />Registrations
          </button>
          <button onClick={() => setActiveTab('blogs')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'blogs' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'blogs' ? '4px solid white' : '4px solid transparent', display: 'flex', alignItems: 'center'}}>
            <NewsIcon style={{marginRight: '10px'}} size={16} />Blogs
          </button>
          <button onClick={() => setActiveTab('courses')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'courses' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'courses' ? '4px solid white' : '4px solid transparent', display: 'flex', alignItems: 'center'}}>
            <BookIcon style={{marginRight: '10px'}} size={16} />Courses
          </button>
          <button onClick={() => setActiveTab('achievements')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'achievements' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'achievements' ? '4px solid white' : '4px solid transparent', display: 'flex', alignItems: 'center'}}>
            <TrophyIcon style={{marginRight: '10px'}} size={16} />Achievements
          </button>
          <button onClick={() => setActiveTab('banners')} style={{width: '100%', padding: '15px 20px', background: activeTab === 'banners' ? 'rgba(255,255,255,0.1)' : 'transparent', color: 'white', border: 'none', textAlign: 'left', cursor: 'pointer', borderLeft: activeTab === 'banners' ? '4px solid white' : '4px solid transparent', display: 'flex', alignItems: 'center'}}>
            <ImageIcon style={{marginRight: '10px'}} size={16} />Banners
          </button>
        </div>
      </div>

      <div style={{marginLeft: '250px', flex: 1}}>
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold" style={{color: '#1B5A96'}}>Admin Dashboard</h1>
            <button onClick={handleLogout} className="px-4 py-2 rounded text-white font-semibold flex items-center" style={{background: '#dc3545'}}>
              <LogoutIcon className="mr-2" size={16} />Logout
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab !== 'inquiries' && activeTab !== 'registrations' && activeTab !== 'achievements' && activeTab !== 'banners' && (
              <button onClick={handleAdd} className="mb-6 px-6 py-2 rounded text-white font-semibold flex items-center" style={{background: '#1B5A96'}}>
                <PlusIcon className="mr-2" size={16} />Add {activeTab === 'blogs' ? 'Blog' : 'Course'}
              </button>
            )}

            <div className="overflow-x-auto">
              {activeTab === 'achievements' ? (
                <div>
                  <h2 className="text-xl font-bold mb-4" style={{color: '#1B5A96'}}>Manage Achievements</h2>
                  <button onClick={handleAchievementAdd} className="mb-4 px-4 py-2 rounded text-white font-semibold flex items-center" style={{background: '#1B5A96'}}>
                    <PlusIcon className="mr-2" size={16} />Add Achievement
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.achievements.map((achievement) => (
                      <div key={achievement.id} style={{border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px'}}>
                        <h3 className="font-bold mb-2">{achievement.heading}</h3>
                        {achievement.image && <img src={achievement.image} alt={achievement.heading} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px'}} />}
                        <input type="file" accept="image/*" onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            handleAchievementImageUpload(achievement, file)
                          }
                        }} style={{width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', marginBottom: '8px'}} />
                        <div className="flex gap-2">
                          {achievement.image && (
                            <button onClick={() => handleAchievementImageRemove(achievement)} style={{flex: 1, padding: '8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer'}}>Remove Image</button>
                          )}
                          <button onClick={() => handleDelete(achievement.id)} style={{flex: 1, padding: '8px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer'}}>Delete</button>
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
                            handleBannerUpload(page, file)
                          }
                        }} style={{width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', marginBottom: '8px'}} />
                        {banners[page] && (
                          <button onClick={() => handleBannerRemove(page)} style={{width: '100%', padding: '8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer'}}>Remove Image</button>
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
                      <th className="px-4 py-3 text-left">WhatsApp Number</th>
                      <th className="px-4 py-3 text-left">Course</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.users.map((reg) => (
                      <tr key={reg.id} className="border-b">
                        <td className="px-4 py-3">{reg.date}</td>
                        <td className="px-4 py-3">{reg.name}</td>
                        <td className="px-4 py-3">{reg.phone}</td>
                        <td className="px-4 py-3">{reg.course}</td>
                        <td className="px-4 py-3">
                          <button onClick={() => handleDelete(reg.id)} className="px-3 py-1 rounded text-white" style={{background: '#dc3545'}}>
                            <DeleteIcon size={16} />
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
                    {data.courses.map((reg) => (
                      <tr key={reg.id} className="border-b">
                        <td className="px-4 py-3">{reg.date}</td>
                        <td className="px-4 py-3">{reg.name}</td>
                        <td className="px-4 py-3">{reg.phone}</td>
                        <td className="px-4 py-3">{reg.course}</td>
                        <td className="px-4 py-3">
                          <button onClick={() => handleDelete(reg.id)} className="px-3 py-1 rounded text-white" style={{background: '#dc3545'}}>
                            <DeleteIcon size={16} />
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
                    {(activeTab === 'blogs' ? data.blogs : data.courses).map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="px-4 py-3">
                          <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                        </td>
                        <td className="px-4 py-3">{item.title}</td>
                        <td className="px-4 py-3">
                          <button onClick={() => handleEdit(item)} className="px-3 py-1 rounded text-white mr-2" style={{background: '#28a745'}}>
                            <EditIcon size={16} />
                          </button>
                          <button onClick={() => handleDelete(item.id)} className="px-3 py-1 rounded text-white" style={{background: '#dc3545'}}>
                            <DeleteIcon size={16} />
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
                      <CloseIcon size={12} />
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
    </div>
  )
}