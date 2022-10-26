const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'James', role: ROLE.ADMIN },
    { id: 2, name: 'Kyle', role: ROLE.BASIC },
    { id: 3, name: 'Mary', role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "James's Project", userId: 1 },
    { id: 2, name: "Kyle's Project", userId: 2 },
    { id: 3, name: "Mary's Project", userId: 3 },
  ],
};
