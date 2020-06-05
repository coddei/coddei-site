import { withRouter } from 'next/router';
import Link from 'next/link';

const NavLink = ({ router, children, ...props }) => {
    let className = props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.className;
    delete props.activeClassName;

    return <Link {...props}><a className={className}>{children}</a></Link>;
};

export default withRouter(NavLink);