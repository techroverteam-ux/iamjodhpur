'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { fetchData, addData, updateData, deleteData } from '../../../lib/clientDataUtils'
import { uploadImage } from '../../../lib/uploadUtils'
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
    banners: {},
    contacts: []
  })
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteItem, setDeleteItem] = useState(null)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({ title: '', date: '', description: '', content: [], image: '', imageFile: null })
  const [currentPage, setCurrentPage] = useState({})
  const [itemsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)
  const [loadingTab, setLoadingTab] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('adminLoggedIn')) {
        router.push('/admin/login')
      }
      loadData()
    }
  }, [router])

  const loadData = async (forceRefresh = false) => {
    if (loading && !forceRefresh) return // Prevent multiple simultaneous calls
    
    setLoading(true)
    try {
      console.log('Loading fresh data from database...');
      const result = await fetchData()
      if (result) {
        // Clear any existing data first to prevent conflicts
        setData({
          users: [],
          courses: [],
          blogs: [],
          testimonials: [],
          achievements: [],
          facilities: [],
          events: [],
          banners: {},
          contacts: []
        })
        
        // Set fresh data after a small delay to ensure state is cleared
        setTimeout(() => {
          setData(result)
          console.log('Data updated successfully:', {
            users: result.users?.length || 0,
            courses: result.courses?.length || 0,
            blogs: result.blogs?.length || 0,
            contacts: result.contacts?.length || 0
          })
        }, 100)
      } else {
        toast.error('Failed to load data from database')
      }
    } catch (error) {
      console.error('Error loading data:', error)
      toast.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  const handleTabChange = async (tabName) => {
    if (loadingTab === tabName || loading) return // Prevent rapid clicks
    
    setLoadingTab(tabName)
    setActiveTab(tabName)
    
    // Reset pagination for new tab
    setCurrentPage({ ...currentPage, [tabName]: 1 })
    
    // Force refresh data when switching tabs to ensure fresh data
    await loadData(true)
    
    // Small delay to prevent UI conflicts
    setTimeout(() => {
      setLoadingTab('')
    }, 300)
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

  const handleDeleteClick = (item) => {
    setDeleteItem(item)
    setShowDeleteModal(true)
  }

  const confirmDelete = async () => {
    if (deleteItem) {
      let collection = activeTab;
      if (activeTab === 'inquiries') collection = 'users';
      if (activeTab === 'registrations') collection = 'courses';
      if (activeTab === 'contacts') collection = 'contacts';
      
      const result = await deleteData(collection, deleteItem.id)
      if (result.success) {
        toast.success('Item deleted successfully!')
        // Force refresh to get updated data from database
        await loadData(true)
      } else {
        toast.error('Failed to delete item. Please try again.')
      }
    }
    setShowDeleteModal(false)
    setDeleteItem(null)
  }

  const cancelDelete = () => {
    setShowDeleteModal(false)
    setDeleteItem(null)
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
    
    if (formData.imageFile) {
      try {
        const imageUrl = await uploadImage(formData.imageFile)
        submitData.image = imageUrl
      } catch (error) {
        toast.error(`Image upload failed: ${error.message}`)
        return
      }
    }
    
    delete submitData.imageFile
    
    let result
    if (editItem) {
      result = await updateData(activeTab, editItem.id, submitData)
    } else {
      result = await addData(activeTab, submitData)
    }
    
    if (result.success) {
      toast.success(`${editItem ? 'Updated' : 'Added'} successfully!`)
      // Force refresh to get updated data from database
      await loadData(true)
      setShowModal(false)
    } else {
      toast.error('Operation failed. Please try again.')
    }
  }

  const getPaginatedData = (dataArray) => {
    const page = currentPage[activeTab] || 1
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return dataArray.slice(startIndex, endIndex)
  }

  const getTotalPages = (dataArray) => {
    return Math.ceil(dataArray.length / itemsPerPage)
  }

  const handlePageChange = (page) => {
    setCurrentPage({ ...currentPage, [activeTab]: page })
  }

  const PaginationComponent = ({ dataArray }) => {
    const totalPages = getTotalPages(dataArray)
    const currentPageNum = currentPage[activeTab] || 1
    
    if (totalPages <= 1) return null
    
    return (
      <div className="flex justify-center items-center mt-4 gap-2">
        <button 
          onClick={() => handlePageChange(currentPageNum - 1)}
          disabled={currentPageNum === 1}
          className="px-3 py-1 rounded text-sm"
          style={{
            background: currentPageNum === 1 ? '#e9ecef' : '#1B5A96',
            color: currentPageNum === 1 ? '#6c757d' : 'white',
            cursor: currentPageNum === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>
        
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className="px-3 py-1 rounded text-sm"
              style={{
                background: currentPageNum === pageNum ? '#1B5A96' : '#f8f9fa',
                color: currentPageNum === pageNum ? 'white' : '#1B5A96',
                border: '1px solid #dee2e6'
              }}
            >
              {pageNum}
            </button>
          )
        })}
        
        <button 
          onClick={() => handlePageChange(currentPageNum + 1)}
          disabled={currentPageNum === totalPages}
          className="px-3 py-1 rounded text-sm"
          style={{
            background: currentPageNum === totalPages ? '#e9ecef' : '#1B5A96',
            color: currentPageNum === totalPages ? '#6c757d' : 'white',
            cursor: currentPageNum === totalPages ? 'not-allowed' : 'pointer'
          }}
        >
          Next
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{background: '#f5f5f5'}}>
      <style jsx global>{`
        .element-style {
          margin-left: 248px;
          padding-top: 0px;
        }
        body {
          overflow-x: hidden;
          width: 100%;
          padding-top: 60px;
        }
      `}</style>

      {/* Sidebar */}
      <div style={{width: '250px', background: '#1B5A96', minHeight: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 30}}>
        <div style={{padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
          <img src="/images/new_logo.png" width="100" height="40" alt="IMA Jodhpur" />
        </div>
        <div style={{padding: '20px 0'}}>
          <button 
            onClick={() => handleTabChange('inquiries')} 
            disabled={loading || loadingTab === 'inquiries'}
            style={{
              width: '100%', 
              padding: '15px 20px', 
              background: activeTab === 'inquiries' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: 'white', 
              border: 'none', 
              textAlign: 'left', 
              cursor: loading || loadingTab === 'inquiries' ? 'not-allowed' : 'pointer', 
              borderLeft: activeTab === 'inquiries' ? '4px solid white' : '4px solid transparent', 
              display: 'flex', 
              alignItems: 'center',
              opacity: loading || loadingTab === 'inquiries' ? 0.6 : 1
            }}
          >
            <TrophyIcon style={{marginRight: '10px'}} size={16} />STHE Inquiries
          </button>
          <button 
            onClick={() => handleTabChange('contacts')} 
            disabled={loading || loadingTab === 'contacts'}
            style={{
              width: '100%', 
              padding: '15px 20px', 
              background: activeTab === 'contacts' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: 'white', 
              border: 'none', 
              textAlign: 'left', 
              cursor: loading || loadingTab === 'contacts' ? 'not-allowed' : 'pointer', 
              borderLeft: activeTab === 'contacts' ? '4px solid white' : '4px solid transparent', 
              display: 'flex', 
              alignItems: 'center',
              opacity: loading || loadingTab === 'contacts' ? 0.6 : 1
            }}
          >
            <UserIcon style={{marginRight: '10px'}} size={16} />Contact Forms
          </button>
          <button 
            onClick={() => handleTabChange('registrations')} 
            disabled={loading || loadingTab === 'registrations'}
            style={{
              width: '100%', 
              padding: '15px 20px', 
              background: activeTab === 'registrations' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: 'white', 
              border: 'none', 
              textAlign: 'left', 
              cursor: loading || loadingTab === 'registrations' ? 'not-allowed' : 'pointer', 
              borderLeft: activeTab === 'registrations' ? '4px solid white' : '4px solid transparent', 
              display: 'flex', 
              alignItems: 'center',
              opacity: loading || loadingTab === 'registrations' ? 0.6 : 1
            }}
          >
            <UserIcon style={{marginRight: '10px'}} size={16} />Registrations
          </button>
          <button 
            onClick={() => handleTabChange('blogs')} 
            disabled={loading || loadingTab === 'blogs'}
            style={{
              width: '100%', 
              padding: '15px 20px', 
              background: activeTab === 'blogs' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: 'white', 
              border: 'none', 
              textAlign: 'left', 
              cursor: loading || loadingTab === 'blogs' ? 'not-allowed' : 'pointer', 
              borderLeft: activeTab === 'blogs' ? '4px solid white' : '4px solid transparent', 
              display: 'flex', 
              alignItems: 'center',
              opacity: loading || loadingTab === 'blogs' ? 0.6 : 1
            }}
          >
            <NewsIcon style={{marginRight: '10px'}} size={16} />Blogs
          </button>
          <button 
            onClick={() => handleTabChange('courses')} 
            disabled={loading || loadingTab === 'courses'}
            style={{
              width: '100%', 
              padding: '15px 20px', 
              background: activeTab === 'courses' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: 'white', 
              border: 'none', 
              textAlign: 'left', 
              cursor: loading || loadingTab === 'courses' ? 'not-allowed' : 'pointer', 
              borderLeft: activeTab === 'courses' ? '4px solid white' : '4px solid transparent', 
              display: 'flex', 
              alignItems: 'center',
              opacity: loading || loadingTab === 'courses' ? 0.6 : 1
            }}
          >
            <BookIcon style={{marginRight: '10px'}} size={16} />Courses
          </button>
        </div>
      </div>

      {/* Fixed Header */}
      <div style={{position: 'fixed', top: 0, left: '250px', right: 0, background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 40, height: '60px'}}>
        <div style={{padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
          <h1 className="text-xl font-bold" style={{color: '#1B5A96'}}>Admin Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 rounded text-white font-semibold flex items-center" style={{background: '#dc3545'}}>
            <LogoutIcon className="mr-2" size={16} />Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="element-style" style={{marginLeft: '248px', paddingTop: '0px'}}>
        <div style={{padding: '20px'}}>
          <div className="bg-white rounded-lg shadow-md p-4">
            {activeTab !== 'inquiries' && activeTab !== 'registrations' && activeTab !== 'contacts' && (
              <button onClick={handleAdd} className="mb-4 px-4 py-2 rounded text-white font-semibold flex items-center" style={{background: '#1B5A96'}}>
                <PlusIcon className="mr-2" size={16} />Add {activeTab === 'blogs' ? 'Blog' : 'Course'}
              </button>
            )}

            <div className="overflow-x-auto">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                    <p className="text-gray-600">Loading data...</p>
                  </div>
                </div>
              ) : activeTab === 'inquiries' ? (
                <div>
                  <h2 className="text-lg font-bold mb-3" style={{color: '#1B5A96'}}>STHE Inquiries</h2>
                  <table className="w-full border-collapse" style={{fontSize: '13px'}}>
                    <thead style={{background: '#f8f9fa'}}>
                      <tr>
                        <th className="px-2 py-2 text-left border-b">Date</th>
                        <th className="px-2 py-2 text-left border-b">Name</th>
                        <th className="px-2 py-2 text-left border-b">WhatsApp</th>
                        <th className="px-2 py-2 text-left border-b">Course</th>
                        <th className="px-2 py-2 text-left border-b">Message</th>
                        <th className="px-2 py-2 text-left border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getPaginatedData(data.users).map((inquiry) => (
                        <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                          <td className="px-2 py-2">{inquiry.date}</td>
                          <td className="px-2 py-2">{inquiry.name}</td>
                          <td className="px-2 py-2">
                            <a href={`https://wa.me/91${inquiry.phone}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                              {inquiry.phone}
                            </a>
                          </td>
                          <td className="px-2 py-2">{inquiry.course}</td>
                          <td className="px-2 py-2" style={{maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {inquiry.message || 'No message'}
                          </td>
                          <td className="px-2 py-2">
                            <button onClick={() => handleDeleteClick(inquiry)} className="px-2 py-1 rounded text-white text-xs" style={{background: '#dc3545'}}>
                              <DeleteIcon size={12} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <PaginationComponent dataArray={data.users} />
                </div>
              ) : activeTab === 'contacts' ? (
                <div>
                  <h2 className="text-lg font-bold mb-3" style={{color: '#1B5A96'}}>Contact Form Submissions</h2>
                  <table className="w-full border-collapse" style={{fontSize: '13px'}}>
                    <thead style={{background: '#f8f9fa'}}>
                      <tr>
                        <th className="px-2 py-2 text-left border-b">Date</th>
                        <th className="px-2 py-2 text-left border-b">Name</th>
                        <th className="px-2 py-2 text-left border-b">Email</th>
                        <th className="px-2 py-2 text-left border-b">Phone</th>
                        <th className="px-2 py-2 text-left border-b">Message</th>
                        <th className="px-2 py-2 text-left border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getPaginatedData(data.contacts).map((contact) => (
                        <tr key={contact.id} className="border-b hover:bg-gray-50">
                          <td className="px-2 py-2">{contact.date}</td>
                          <td className="px-2 py-2">{contact.name}</td>
                          <td className="px-2 py-2">
                            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                              {contact.email}
                            </a>
                          </td>
                          <td className="px-2 py-2">
                            <a href={`tel:${contact.phone}`} className="text-green-600 hover:underline">
                              {contact.phone}
                            </a>
                          </td>
                          <td className="px-2 py-2" style={{maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} title={contact.message}>
                            {contact.message.length > 50 ? contact.message.substring(0, 50) + '...' : contact.message}
                          </td>
                          <td className="px-2 py-2">
                            <button onClick={() => handleDeleteClick(contact)} className="px-2 py-1 rounded text-white text-xs" style={{background: '#dc3545'}}>
                              <DeleteIcon size={12} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <PaginationComponent dataArray={data.contacts} />
                </div>
              ) : activeTab === 'registrations' ? (
                <div>
                  <h2 className="text-lg font-bold mb-3" style={{color: '#1B5A96'}}>Course Registrations</h2>
                  <table className="w-full border-collapse" style={{fontSize: '13px'}}>
                    <thead style={{background: '#f8f9fa'}}>
                      <tr>
                        <th className="px-2 py-2 text-left border-b">Date</th>
                        <th className="px-2 py-2 text-left border-b">Name</th>
                        <th className="px-2 py-2 text-left border-b">WhatsApp</th>
                        <th className="px-2 py-2 text-left border-b">Course</th>
                        <th className="px-2 py-2 text-left border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getPaginatedData(data.courses).map((reg) => (
                        <tr key={reg.id} className="border-b hover:bg-gray-50">
                          <td className="px-2 py-2">{reg.date}</td>
                          <td className="px-2 py-2">{reg.name}</td>
                          <td className="px-2 py-2">{reg.phone}</td>
                          <td className="px-2 py-2">{reg.course}</td>
                          <td className="px-2 py-2">
                            <button onClick={() => handleDeleteClick(reg)} className="px-2 py-1 rounded text-white text-xs" style={{background: '#dc3545'}}>
                              <DeleteIcon size={12} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <PaginationComponent dataArray={data.courses} />
                </div>
              ) : (
                <div>
                  <h2 className="text-lg font-bold mb-3" style={{color: '#1B5A96'}}>{activeTab === 'blogs' ? 'Blogs' : 'Courses'}</h2>
                  <table className="w-full border-collapse" style={{fontSize: '13px'}}>
                    <thead style={{background: '#f8f9fa'}}>
                      <tr>
                        <th className="px-2 py-2 text-left border-b">Image</th>
                        <th className="px-2 py-2 text-left border-b">Title</th>
                        <th className="px-2 py-2 text-left border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getPaginatedData(activeTab === 'blogs' ? data.blogs : data.courses).map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                          <td className="px-2 py-2">
                            <img src={item.image} alt={item.title} className="w-10 h-10 object-contain rounded" />
                          </td>
                          <td className="px-2 py-2" style={{maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {item.title}
                          </td>
                          <td className="px-2 py-2">
                            <div className="flex gap-1">
                              <button onClick={() => handleEdit(item)} className="px-2 py-1 rounded text-white text-xs" style={{background: '#28a745'}}>
                                <EditIcon size={12} />
                              </button>
                              <button onClick={() => handleDeleteClick(item)} className="px-2 py-1 rounded text-white text-xs" style={{background: '#dc3545'}}>
                                <DeleteIcon size={12} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <PaginationComponent dataArray={activeTab === 'blogs' ? data.blogs : data.courses} />
                </div>
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <DeleteIcon size={24} style={{color: '#dc3545'}} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Are you sure you want to delete this item?
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {deleteItem && (
                  <span>
                    {deleteItem.name || deleteItem.title || 'This item'} will be permanently removed. This action cannot be undone.
                  </span>
                )}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}