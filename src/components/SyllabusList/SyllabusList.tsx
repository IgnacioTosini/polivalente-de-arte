import { useRef } from 'react'
import { syllabus } from '../../utils/syllabus'
import { SyllabuItem } from '../Syllabu/Syllabu'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp'
import { useGsapStaggeredFadeIn } from '../../hooks/useGsapStaggeredFadeIn'
import './_syllabusList.scss'

export const SyllabusList = () => {
    const listRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGsapFadeInUp(listRef, 0.5);
    useGsapStaggeredFadeIn(itemRefs, [syllabus], {
        y: 24,
        stagger: 0.16,
        duration: 0.7,
        ease: 'power1.out',
    });

    return (
        <div className="syllabusList" ref={listRef}>
            {syllabus.map((specialty, index) => (
                <div
                    key={index}
                    ref={el => { itemRefs.current[index] = el; }}
                >
                    <SyllabuItem
                        speciality={specialty.especiality}
                        description={specialty.description}
                        coordinator={specialty.coordinator}
                        subjects={specialty.subjects}
                        image={specialty.image}
                    />
                </div>
            ))}
        </div>
    )
}
