import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import AllPosts from "../routes/AllPosts";
import PostsByCategory from "../routes/PostsByCategory";
import NewPost from "../routes/NewPost";
import PostDetailPage from "../routes/PostDetailPage";
import EditPost from "../routes/EditPost";
import NotFound from "../routes/NotFound";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    color: "#FFFFFF",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Home(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar style={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" style={{ color: "white" }}>
              Discussion Board
            </Link>
          </Typography>

          <Link to="/">
            <Button style={{ color: "white" }}>All Posts</Button>
          </Link>
          <Link to="/react">
            <Button style={{ color: "white", marginLeft: "50px" }}>
              React
            </Button>
          </Link>
          <Link to="/redux">
            <Button style={{ color: "white", marginLeft: "50px" }}>
              Redux
            </Button>
          </Link>
          <Link to="/miscellaneous">
            <Button
              style={{
                color: "white",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            >
              Miscellaneous
            </Button>
          </Link>
          <Link to="/new">
            <Button
              raised
              style={{
                color: "white",
                backgroundColor: "#f50057",
              }}
            >
              Create Post
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box>
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route exact path="/new" component={NewPost} />
            <Route exact path="/:category" component={PostsByCategory} />
            <Route exact path="/:category/:postId" component={PostDetailPage} />
            <Route exact path="/:category/:postId/edit" component={EditPost} />
            <Route exact path="/error/:errMsg" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Home;
