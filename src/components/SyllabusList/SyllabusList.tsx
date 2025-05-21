import { useRef } from 'react'
import { syllabus } from '../../utils/syllabus'
import { SyllabuItem } from '../Syllabu/Syllabu'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp'
import './_syllabusList.scss'

export const SyllabusList = () => {
    const listRef = useRef<HTMLDivElement>(null);

    useGsapFadeInUp(listRef, 0.5);
    return (
        <div className="syllabusList" ref={listRef}>
            {syllabus.map((specialty, index) => (
                <SyllabuItem
                    key={index}
                    speciality={specialty.especiality}
                    description={specialty.description}
                    coordinator={specialty.coordinator}
                    subjects={specialty.subjects}
                    image={specialty.image}
                />
            ))}
        </div>
    )
}
