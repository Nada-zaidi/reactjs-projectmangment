import Roles from 'src/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      projectCreate: {
        id: 'projectCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [

        ],
      },
      projectEdit: {
        id: 'projectEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [

        ],
      },
      projectDestroy: {
        id: 'projectDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [

        ],
      },
      projectRead: {
        id: 'projectRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      projectAutocomplete: {
        id: 'projectAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },
      taskCreate: {
        id: 'taskCreate',
        allowedRoles: [roles.admin, roles.custom],
        allowedStorage: [

        ],
      },
      taskEdit: {
        id: 'taskEdit',
        allowedRoles: [roles.admin, roles.custom],
        allowedStorage: [

        ],
      },
      taskDestroy: {
        id: 'taskDestroy',
        allowedRoles: [roles.admin, roles.custom],
        allowedStorage: [

        ],
      },
      taskRead: {
        id: 'taskRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      taskAutocomplete: {
        id: 'taskAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
