import React, { useContext } from "react";
import AuthContext from '../../context/auth/authContext';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SimpleTabs from "./Tabs";

const drawerWidth = 220;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    grow: {
        flexGrow: 1
    }
});

const AdminSideNavInbox = (props) => {
    const authContext = useContext(AuthContext);
    const { logout } = authContext;
    const onLogout = () => {
        logout();
    };
    const { classes, theme } = props;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}

            >
                <Toolbar>

                    <Typography
                        variant="h5"
                        color="inherit"
                        className={classes.grow}
                    >
                        Admin Dashboard
            </Typography>
                    <div>
                        <IconButton

                            onClick={onLogout}
                            color="inherit"
                        >

                            LogOut</IconButton>

                    </div>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <SimpleTabs />
            </main>
        </div>
    );
}


AdminSideNavInbox.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AdminSideNavInbox);





