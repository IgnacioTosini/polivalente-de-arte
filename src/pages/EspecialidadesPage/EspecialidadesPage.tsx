import { SyllabusList } from '../../components/SyllabusList/SyllabusList'
import './_especialidadesPage.scss'

export const EspecialidadesPage = () => {
    return (
        <div className="especialidadesPage">
            <p className='description'>En la ESEA N° 1 – Polivalente de Arte ofrecemos una formación artística integral a través de tres especialidades principales. Cada una cuenta con un plan de estudios completo y docentes especializados que acompañarán tu desarrollo artístico.</p>
            <SyllabusList />
        </div>
    )
}
