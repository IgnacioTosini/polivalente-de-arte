import { useRef, useState } from 'react'
import { AuthorityContent } from '../../components/AuthorityContent/AuthorityContent'
import { HistoryContent } from '../../components/HistoryContent/HistoryContent'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp'
import { useGsapTabTransition } from '../../hooks/useGsapTabTransition'
import './_institutionalPage.scss'

export const InstitutionalPage = () => {
    const [activeTab, setActiveTab] = useState<'autoridades' | 'historia'>('autoridades')
    const contentRef = useRef<HTMLDivElement>(null);
    const tabRef = useRef<HTMLDivElement>(null);
    const tabContentRef = useRef<HTMLDivElement>(null);

    useGsapFadeInUp(contentRef, 0.5)
    useGsapFadeInUp(tabRef, 0.5)

    const handleTabChange = useGsapTabTransition(tabContentRef as React.RefObject<HTMLDivElement>, setActiveTab);

    return (
        <div className='institutionalPage' ref={contentRef}>
            <section className='institutionalPageContainer'>
                <div className='tabContainer' ref={tabRef}>
                    <button
                        className={activeTab === 'autoridades' ? 'active' : ''}
                        onClick={() => handleTabChange('autoridades')}
                    >
                        Autoridades
                    </button>
                    <button
                        className={activeTab === 'historia' ? 'active' : ''}
                        onClick={() => handleTabChange('historia')}
                    >
                        Historia
                    </button>
                </div>
                <div ref={tabContentRef}>
                    {activeTab === 'autoridades' && (
                        <AuthorityContent />
                    )}
                    {activeTab === 'historia' && (
                        <HistoryContent />
                    )}
                </div>
            </section>
        </div>
    )
}
