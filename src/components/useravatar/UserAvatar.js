import './UserAvatar.scss';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import Ada from '../../assets/ada-lovelace.jpeg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '0em',
      minHeight: '10em',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      position: 'relative'
    },
  }),
);

function UserAvatar() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root} >
      <Avatar
        alt="Ada Lovelace"
        src={Ada}
        sx={{ width: 128, height: 128, boxShadow: 3 }}
      />
    </Container>

  );
}

export default UserAvatar;