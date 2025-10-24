const { AppDataSource } = require("../../../config/database");
const { AccommodationPreference } = require("../entities/accommodation-preference");

class AccommodationPreferenceRepository {
  _repository = AppDataSource.getRepository(AccommodationPreference);

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

module.exports = new AccommodationPreferenceRepository();
