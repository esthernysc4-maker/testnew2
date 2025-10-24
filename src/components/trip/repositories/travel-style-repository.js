const { AppDataSource } = require("../../../config/database");
const { TravelStyle } = require("../entities/travel-style");

class TravelStyleRepository {
  _repository = AppDataSource.getRepository(TravelStyle);

  async findAll() {
    return await this._repository.find({
      order: { created_at: "ASC" },
    });
  }

  async findById(id) {
    return await this._repository.findOneBy({ id });
  }

  async findByName(name) {
    return await this._repository.findOneBy({ name });
  }
}

module.exports = new TravelStyleRepository();
