class Roles {
  static get values() {
    return {
      admin: 'admin',
      custom: 'custom',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return `${roleId}`;
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return `${roleId}`;
  }
}

export default Roles;
