export const uploadImage = async (file) => {
  try {
    const filename = `${Date.now()}-${file.name}`;
    
    const response = await fetch(`/api/upload?filename=${filename}`, {
      method: 'POST',
      body: file,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Upload error:', error);
    return null;
  }
};