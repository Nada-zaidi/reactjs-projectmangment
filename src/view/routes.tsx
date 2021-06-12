import Permissions from 'src/security/permissions';


const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/project',
    loader: () =>
      import('src/view/project/list/ProjectListPage'),
    permissionRequired: permissions.projectRead,
    exact: true,
  },
  {
    path: '/project/new',
    loader: () =>
      import('src/view/project/form/ProjectFormPage'),
    permissionRequired: permissions.projectCreate,
    exact: true,
  },
  {
    path: '/project/:id/edit',
    loader: () =>
      import('src/view/project/form/ProjectFormPage'),
    permissionRequired: permissions.projectEdit,
    exact: true,
  },
  {
    path: '/project/:id',
    loader: () =>
      import('src/view/project/view/ProjectViewPage'),
    permissionRequired: permissions.projectRead,
    exact: true,
  },
  {
    path: '/task/new',
    loader: () =>
      import('src/view/task/form/TaskFormPage'),
    permissionRequired: permissions.taskCreate,
    exact: true,
  },
  {
    path: '/task/:id/edit',
    loader: () =>
      import('src/view/task/form/TaskFormPage'),
    permissionRequired: permissions.taskEdit,
    exact: true,
  },
  {
    path: '/task/:id',
    loader: () =>
      import('src/view/task/view/TaskViewPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
].filter(Boolean);



const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);


const simpleRoutes = [
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  simpleRoutes,
};
