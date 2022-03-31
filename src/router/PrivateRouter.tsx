import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import { privateRoutes as routes } from '@router/routes';
import Sidebar from '@components/Sidebar';
import UserProfile from '@pages/admin/user/userProfile/UserProfile';
import ConsultationRoom from '@pages/admin/consultation/constultationRoom/ConsultationRoom';
import AddUser from '@pages/admin/user/addUser/AddUser';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { requestSelfUser } from '@redux/actions/selfUserActions';
import CreateArticle from '@pages/admin/article/createArticle/CreateArticle';
import ArticleShow from '@pages/admin/article/articleShow/ArticleShow';

const routeName = '/admin';
const sideBarWidth = 250;

const useStyle = makeStyles((theme: Theme) => ({
  content: {
    height: '100vh',
    marginLeft: sideBarWidth,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
    ...theme.mixins.toolbar,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
}));

const Admin = () => {
  const classes = useStyle();
  const { session, selfUser } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selfUser.payload.id === 0 && session.isLoggedIn) {
      dispatch(requestSelfUser());
    }
  }, []);

  return (
    <Route>
      {session.isLoggedIn ? (
        <>
          <Sidebar routes={routes} prefixPath={routeName} width={sideBarWidth} />
          <main className={classes.content}>
            {!selfUser.isLoading ? (
              <Switch>
                {routes
                  .filter((route) => !route.collapsible)
                  .map((route, key) => (
                    <Route
                      exact
                      path={routeName + route.path}
                      component={route.component}
                      key={key}
                    />
                  ))}
                {routes
                  .filter((route) => !!route.subRoutes)
                  .map(({ subRoutes }) =>
                    subRoutes?.map((route, key) => (
                      <Route
                        exact
                        path={routeName + route.path}
                        component={route.component}
                        key={key}
                      />
                    )),
                  )}
                <Route path={`${routeName}/user/add`} component={AddUser} />
                <Route path={`${routeName}/user/:id`} component={UserProfile} />
                <Route path={`${routeName}/consultation/:id`} component={ConsultationRoom} />
                <Route path={`${routeName}/article/add`} component={CreateArticle} />
                <Route path={`${routeName}/article/edit/:id`} component={CreateArticle} />
                <Route path={`${routeName}/article/show/:id`} component={ArticleShow} />
                <Redirect from={`${routeName}/article`} to={`${routeName}/article/list`} />
                <Redirect from={routeName} to={`${routeName}/user`} />
              </Switch>
            ) : (
              <div className={classes.loading}>
                <CircularProgress />
              </div>
            )}
          </main>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
};

export default Admin;
