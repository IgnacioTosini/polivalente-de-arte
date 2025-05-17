import { Gallery } from '../../components/Gallery/Gallery'
import { imageGallery } from '../../utils/imageGallery'
import './_galeriaPage.scss'

export const GaleriaPage = () => {
  return (
    <div className="galeriaPage">
      <div className="galeriaPageImages">
        <Gallery images={imageGallery} />
      </div>
    </div>
  )
}
