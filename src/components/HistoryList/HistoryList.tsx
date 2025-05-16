import { history } from '../../utils/history'
import './_historyList.scss'

export const HistoryList = () => {
    return (
        <section className='historyContentTextContainer'>
            {history.map((item) => (
                <article key={item.id}>
                    <span className='historyYear'>{item.year}</span>
                    <section className='historyContentText'>
                        <h3 className='historyTitle'>{item.title}</h3>
                        <p className='historyDescription'>{item.description}</p>
                    </section>
                </article>
            ))}
        </section>
    )
}
