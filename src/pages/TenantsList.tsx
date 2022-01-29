import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TenantItemCard, { TenantItemData } from "../components/TenantItemCard";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const TenantsList = () => {
  let navigate = useNavigate();
  const [pageLimit] = useState(20);
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data } = useQuery(TenantsQuery, {
    variables: { subPath: `/tenants?_page=${pageNumber}&_limit=${pageLimit}` },
    fetchPolicy: "network-only"
  });

  const classes = useStyles();

  if (loading) return <CircularProgress />;

  return (
    <>
      {!error && (
        <Box>
          <Typography variant="h6" component="h2">
            List of Tenants
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {data.tenants.map((tenant: TenantItemData) => (
              <TenantItemCard
                data={tenant}
                key={tenant.id}
                onClick={() => navigate(`./${tenant.id}`)}
              />
            ))}
          </Grid>
          {pageNumber > 1 && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              Prev page
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Next page
          </Button>
        </Box>
      )}
    </>
  );
};

export default TenantsList;

const TenantsQuery = gql`
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
