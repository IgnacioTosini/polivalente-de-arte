import { Banner } from '../../components/Banner/Banner'
import { Featured } from '../../components/Featured/Featured'
import { GalleryPreview } from '../../components/GalleryPreview/GalleryPreview'
import './_homePage.scss'

export const HomePage = () => {
    return (
        <div className='homePage'>
            <Banner />
            <Featured />
            <GalleryPreview />
        </div>
    )
}
