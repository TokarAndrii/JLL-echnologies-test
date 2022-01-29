import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export type TenantItemData = {
  id: string;
  name: string;
  description: string;
  code: string;
  type: string;
  status: string;
};

const useStyles = makeStyles({
  root: {
    maxWidth: "30vw",
    margin: "20px",
    padding: "15px",
    cursor: "pointer"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  info: {
    padding: 5
  },
  description: {
    padding: 5,
    marginTop: 15
  }
});

const TenantItemCard = ({
  data,
  onClick
}: {
  data: TenantItemData;
  onClick: () => void;
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { name, description, code, type, status } = data;

  return (
    <Card className={classes.root} onClick={onClick}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {name}
      </Typography>
      <Divider />
      <Typography component="h2" className={classes.info}>
        {bull}code: {code}; {bull}type: {type}; {bull}status: {status}
      </Typography>
      <Divider />
      <Typography component="p" className={classes.description}>
        {description}
      </Typography>
    </Card>
  );
};

export default TenantItemCard;
