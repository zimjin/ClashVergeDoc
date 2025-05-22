import React, { useState } from 'react';
import Image from 'next/image';

interface LightboxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const LightboxImage: React.FC<LightboxImageProps> = ({ src, alt, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        onClick={toggleLightbox}
        style={{ 
          cursor: 'pointer',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease',
          position: 'relative',
          width: 'fit-content',
          margin: '0 auto'
        }}
        className="lightbox-image-container"
      >
        <Image 
          src={src} 
          alt={alt} 
          width={width} 
          height={height}
          style={{
            borderRadius: '12px',
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            transition: 'transform 0.3s ease',
          }}
          className="lightbox-image"
        />
        {/* <div 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '12px'
          }}
        >
          点击查看大图
        </div> */}
      </div>

      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
            padding: '20px'
          }}
          onClick={toggleLightbox}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          >
            <Image 
              src={src} 
              alt={alt} 
              width={width * 1.5} 
              height={height * 1.5}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <button
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer'
              }}
              onClick={toggleLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxImage; 