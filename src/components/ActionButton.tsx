import LinkButton from '@components/LinkButton';
import { Button } from '@material-ui/core';

interface ActionButtonProps {
  to?: string;
  label: string;
  noLink?: boolean;
  onClick?: () => any;
}

const ActionButton = (props: ActionButtonProps) => {
  const { to, label, noLink = false, onClick } = props;
  return !noLink && to ? (
    <LinkButton to={to} variant="contained" color="secondary" size="small" disableElevation>
      {label}
    </LinkButton>
  ) : (
    <div>
      <Button variant="contained" color="secondary" size="small" disableElevation onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};

export default ActionButton;
