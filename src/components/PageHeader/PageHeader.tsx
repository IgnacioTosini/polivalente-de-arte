import { useRef } from 'react';
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_pageHeader.scss'

type PageHeaderProps = {
    title: string;
    subtitle: string;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);

    useGsapFadeInUp(titleRef, 0.5);
    useGsapFadeInUp(subtitleRef, 0.5);
    return (
        <div className="pageHeader">
            <h1 ref={titleRef}>{title}</h1>
            <h2 ref={subtitleRef}>{subtitle}</h2>
        </div>
    )
}
