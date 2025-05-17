import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { IoFootstepsOutline } from "react-icons/io5";
import './_syllabu.scss'

type SyllabusProps = {
    speciality: string;
    description: string;
    coordinator: string;
    subjects: string[];
    image: string;
}

export const SyllabuItem = ({ speciality, description, coordinator, subjects, image }: SyllabusProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="syllabusItem">
            <div className="syllabusHeader">
                <picture className='syllabusImage'>
                    {image === 'music' && <FaMusic />}
                    {image === 'art' && <FaPaintBrush />}
                    {image === 'dance' && <IoFootstepsOutline />}
                </picture>
                <h3>{speciality}</h3>
            </div>
            <p className="syllabusDescription">{description}</p>
            <p className="coordinator"><strong>Coordinador/a:</strong> {coordinator}</p>
            <div className={`syllabusDropdown ${open ? 'open' : 'closed'}`}>
                <button className="syllabusDropdownBtn" onClick={() => setOpen(o => !o)}>
                    Plan de estudios
                    <span className="syllabusDropdownArrow">{open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                </button>
                <ul className="syllabusSubjects">
                    {subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
