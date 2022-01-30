import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { gql, useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { TenantItemData } from "../components/TenantItemCard";

const useStyles = makeStyles({
  header: {
    marginTop: 24
  },
  cardRoot: {
    maxWidth: "90vw",
    height: 300,
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

const Tenant = () => {
  const classes = useStyles();
  let { id } = useParams();

  const { loading, error, data } = useQuery(TenantByIdQuery, {
    variables: { subPath: `/tenants/${id}` },
    fetchPolicy: "network-only"
  });

  const bull = <span className={classes.bullet}>•</span>;

  if (loading) return <CircularProgress />;

  const {
    name,
    status,
    type,
    code,
    description,
    id: tenantId
  }: TenantItemData = data.tenants;

  return (
    <>
      <Link to="../list">Back to Tetant list</Link>
      {data && !error && (
        <Box>
          <Typography variant="h6" component="h2" className={classes.header}>
            Tenant ID: {tenantId}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Card className={classes.cardRoot}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
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
            </Box>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Tenant;

const TenantByIdQuery = gql`
  query TenantsQuery($subPath: String) {
    tenants @rest(type: "Tenant", path: $subPath) {
      id
      name
      description
      code
      type
      status
    }
  }
`;
