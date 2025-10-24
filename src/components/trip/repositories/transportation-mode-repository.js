const { AppDataSource } = require("../../../config/database");
const { TripTransportationMode } = require("../entities/trip-transportation-mode");

class TransportationModeRepository {
  _repository = AppDataSource.getRepository(TripTransportationMode);

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

module.exports = new TransportationModeRepository();
