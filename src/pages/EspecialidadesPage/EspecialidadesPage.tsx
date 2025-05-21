import { useRef } from 'react';
import { SyllabusList } from '../../components/SyllabusList/SyllabusList'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_especialidadesPage.scss'

export const EspecialidadesPage = () => {
    const descriptionRef = useRef<HTMLDivElement>(null);
    useGsapFadeInUp(descriptionRef, 0.5);

    return (
        <div className="especialidadesPage">
            <p className='description' ref={descriptionRef}>En la ESEA N° 1 – Polivalente de Arte ofrecemos una formación artística integral a través de tres especialidades principales. Cada una cuenta con un plan de estudios completo y docentes especializados que acompañarán tu desarrollo artístico.</p>
            <SyllabusList />
        </div>
    )
}
