import { syllabus } from '../../utils/syllabus'
import { SyllabuItem } from '../Syllabu/Syllabu'
import './_syllabusList.scss'

export const SyllabusList = () => {
    return (
        <div className="syllabusList">
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
