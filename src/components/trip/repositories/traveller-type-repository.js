const { AppDataSource } = require("../../../config/database");
const { TripTravellerType } = require("../entities/trip-traveller-type");

class TravellerTypeRepository {
  _repository = AppDataSource.getRepository(TripTravellerType);

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

module.exports = new TravellerTypeRepository();
