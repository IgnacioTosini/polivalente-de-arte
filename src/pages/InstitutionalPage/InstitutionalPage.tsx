import { useState } from 'react'
import { AuthorityContent } from '../../components/AuthorityContent/AuthorityContent'
import { HistoryContent } from '../../components/HistoryContent/HistoryContent'
import './_institutionalPage.scss'

export const InstitutionalPage = () => {
    const [activeTab, setActiveTab] = useState<'autoridades' | 'historia'>('autoridades')
    return (
        <div className='institutionalPage'>
            <section className='institutionalPageContainer'>
                <div className='tabContainer'>
                    <button
                        className={activeTab === 'autoridades' ? 'active' : ''}
                        onClick={() => setActiveTab('autoridades')}
                    >
                        Autoridades
                    </button>
                    <button
                        className={activeTab === 'historia' ? 'active' : ''}
                        onClick={() => setActiveTab('historia')}
                    >
                        Historia
                    </button>
                </div>
                {activeTab === 'autoridades' && (
                    <AuthorityContent />
                )}
                {activeTab === 'historia' && (
                    <HistoryContent />
                )}
            </section>
        </div>
    )
}
