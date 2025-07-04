import { HistoryList } from '../HistoryList/HistoryList'
import './_historyContent.scss'

export const HistoryContent = () => {
    return (
        <div className='institutionalPageHistory'>
            <h1>Nuestra Historia</h1>
            <section className='historyContentContainer'>
                <picture>
                    <img src="/logoPolivalenteDeArteSinFondo.webp" alt="Logo Polivalente de Arte" loading='lazy' />
                </picture>
                <HistoryList />
                <section className='historyMissionVision'>
                    <section className='historyMission'>
                        <h2>Misión</h2>
                        <p>Formar artistas integrales con sólidos conocimientos técnicos y teóricos, capaces de expresarse creativamente y contribuir al desarrollo cultural de la sociedad.</p>
                    </section>
                    <section className='historyVision'>
                        <h2>Visión</h2>
                        <p>Ser una institución educativa de referencia en la formación artística, reconocida por la excelencia de sus egresados y su contribución a la cultura y las artes.</p>
                    </section>
                </section>
            </section>
        </div>
    )
}
