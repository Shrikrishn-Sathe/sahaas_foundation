import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [gallery, setGallery] = useState(() => {
    // Load from localStorage if exists
    const saved = localStorage.getItem("gallery");
    return saved ? JSON.parse(saved) : [];
  });
  const [websiteContent, setWebsiteContent] = useState(() => {
    const saved = localStorage.getItem("websiteContent");
    return saved || "Welcome to the website!";
  });
  const [newContent, setNewContent] = useState(websiteContent);
  const [newImage, setNewImage] = useState(null);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem("gallery", JSON.stringify(gallery));
    localStorage.setItem("websiteContent", websiteContent);
  }, [gallery, websiteContent]);

  const handleAddImage = () => {
    if (!newImage) return;
    const reader = new FileReader();
    reader.onload = () => {
      setGallery([...gallery, reader.result]);
      setNewImage(null);
    };
    reader.readAsDataURL(newImage);
  };

  const handleContentUpdate = () => {
    setWebsiteContent(newContent);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Admin Panel</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Update Website Content</h3>
        <textarea
          rows={4}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          style={{ width: "100%" }}
        />
        <button onClick={handleContentUpdate}>Save Content</button>
      </div>

      <div>
        <h3>Gallery</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <button onClick={handleAddImage}>Add Image</button>

        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
          {gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Gallery"
              style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "10px", marginBottom: "10px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
