import Permissions from 'src/security/permissions';
const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: "Dashboard",
    permissionRequired: null,
  },
  {
    path: '/project',
    permissionRequired: permissions.projectRead,
    icon: 'fas fa-chevron-right',
    label: "Project",
  },
  {
    path: '#',
    label: "Users",
    permissionRequired: permissions.userRead,
    icon: 'fas fa-user-plus',
  },

  {
    path: '#',
    icon: 'fas fa-history',
    label: "Audit Log",
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '#',
    permissionRequired: permissions.taskRead,
    icon: 'fas fa-chevron-right',
    label: "Task",
  },  
].filter(Boolean);
