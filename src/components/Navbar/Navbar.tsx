import { LinkList } from '../LinkList/LinkList';
import { SocialLinkList } from '../SocialLinkList/SocialLinkList';
import './_navbar.scss'

export const Navbar = () => {
    return (
        <div className="navbar">
            <LinkList />
            <SocialLinkList />
        </div>
    )
}