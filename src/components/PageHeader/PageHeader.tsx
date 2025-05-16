import './_pageHeader.scss'

type PageHeaderProps = {
    title: string;
    subtitle: string;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
        <div className="pageHeader">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
