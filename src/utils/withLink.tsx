import * as React from 'react';
import { Link } from 'react-router-dom';

interface WithLinkProps {
  to: string;
}

const withLink = <P extends object>(Component: React.ComponentType<P>) => {
  const WithLink: React.FC<P & WithLinkProps> = (props: WithLinkProps) => {
    const { to, ...rest } = props;
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <Component {...(rest as P)} />
      </Link>
    );
  };
  return WithLink;
};

export default withLink;
