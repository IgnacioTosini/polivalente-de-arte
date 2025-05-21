import { useRef } from 'react';
import { Gallery } from '../../components/Gallery/Gallery'
import { imageGallery } from '../../utils/imageGallery'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_galeriaPage.scss'

export const GaleriaPage = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGsapFadeInUp(galleryRef, 0.5);
  return (
    <div className="galeriaPage">
      <div className="galeriaPageImages" ref={galleryRef}>
        <Gallery images={imageGallery} />
      </div>
    </div>
  )
}
