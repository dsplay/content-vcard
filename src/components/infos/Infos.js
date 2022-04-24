import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import Divider from '@mui/material/Divider';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import QRCode from '../../assets/qr.png';

import './Infos.scss';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Infos() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 'sm', marginTop: '-4em', boxShadow: 3, borderRadius: 6 }}>
      <CardHeader sx={{ marginTop: '3em' }}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title="Ada Lovelace"
        subheader="Primeira programadora"
      />
      <CardContent>
        <Container maxWidth="sm">
          <Typography variant="subtitle2" color="text.secondary">
            Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.
          </Typography>
        </Container>
      </CardContent>

      <Divider light />

      <CardContent>
        <Container >
          <IconButton aria-label="Enviar e-mail" size="large">
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="Ligar" size="large" sx={{ margin: '0 1em' }}>
            <CallIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="Watsapp" size="large">
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </Container>
      </CardContent>

      <Divider light />

      <CardActions disableSpacing>
        <Typography ml={3}>QRCode</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <IconButton aria-label="QRCode" size="large">
            <QrCode2Icon fontSize="inherit" />
          </IconButton>
        </ExpandMore>
      </CardActions>

      <Divider light />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Salve o contato na sua agenda lendo este código com a câmera do celular.
          </Typography>
          <ImageList sx={{ width: 'auto', height: 'auto' }} cols={1} rowHeight={'auto'}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={QRCode}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const itemData = [
  {
    img: '../../assets/qr.png',
    title: 'QR Code',
    user: 'Ada Lovelace',
  },
];

export default Infos;
