import Sequelize from 'sequelize';

// Exemplo importar Model
// import Nome from '../app/models/Nome';

import databaseConfig from '../config/database';

// Utilizar
// const models = [Nome];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // Percorrer os models
    // models.map(model => model.init(this.connection));
  }
}

export default new DataBase();
