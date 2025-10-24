const { AppDataSource } = require("../../../config/database");
const { Trip } = require("../entities/trip");

class TripRepository {
  _repository = AppDataSource.getRepository(Trip);

  async create(payload) {
    const trip = this._repository.create(payload);
    const saved = await this._repository.save(trip);
    return await this.findById(saved.id);
  }

  async findById(id) {
    const trip = await this._repository.findOne({
      where: { id },
      relations: [
        "user",
        "travelStyle",
        "location",
        "location.city",
        "location.country",
        "tripFrequency",
        "travellerType",
        "tripStatus",
        "transportationMode",
        "accommodationPreference",
        "interests",
        "itineraries",
        "activities",
      ],
    });
    return trip;
  }

  async findAll(filters = {}) {
    const queryBuilder = this._repository.createQueryBuilder("trip");

    queryBuilder.leftJoinAndSelect("trip.user", "user");
    queryBuilder.leftJoinAndSelect("trip.travelStyle", "travelStyle");
    queryBuilder.leftJoinAndSelect("trip.location", "location");
    queryBuilder.leftJoinAndSelect("location.city", "city");
    queryBuilder.leftJoinAndSelect("location.country", "country");
    queryBuilder.leftJoinAndSelect("trip.tripFrequency", "tripFrequency");
    queryBuilder.leftJoinAndSelect("trip.travellerType", "travellerType");
    queryBuilder.leftJoinAndSelect("trip.tripStatus", "tripStatus");
    queryBuilder.leftJoinAndSelect(
      "trip.transportationMode",
      "transportationMode"
    );
    queryBuilder.leftJoinAndSelect(
      "trip.accommodationPreference",
      "accommodationPreference"
    );
    queryBuilder.leftJoinAndSelect("trip.interests", "interests");

    if (filters.user_id) {
      queryBuilder.andWhere("trip.user_id = :user_id", {
        user_id: filters.user_id,
      });
    }

    if (filters.location_id) {
      queryBuilder.andWhere("trip.location_id = :location_id", {
        location_id: filters.location_id,
      });
    }

    if (filters.status_id) {
      queryBuilder.andWhere("trip.trip_status_id = :status_id", {
        status_id: filters.status_id,
      });
    }

    queryBuilder.orderBy("trip.created_at", "DESC");

    return await queryBuilder.getMany();
  }

  async findByUserId(user_id) {
    return await this._repository.find({
      where: { user: { user_id } },
      relations: [
        "travelStyle",
        "location",
        "location.city",
        "location.country",
        "tripFrequency",
        "travellerType",
        "tripStatus",
        "transportationMode",
        "accommodationPreference",
        "interests",
      ],
      order: { created_at: "DESC" },
    });
  }

  async findByLocationId(location_id) {
    return await this._repository.find({
      where: { location: { id: location_id } },
      relations: [
        "user",
        "travelStyle",
        "location",
        "tripFrequency",
        "travellerType",
        "tripStatus",
        "transportationMode",
        "accommodationPreference",
        "interests",
      ],
      order: { created_at: "DESC" },
    });
  }

  async updateById(id, payload) {
    const trip = await this._repository.findOneBy({ id });
    if (!trip) return null;
    Object.assign(trip, payload);
    return await this._repository.save(trip);
  }

  async deleteById(id) {
    const trip = await this._repository.findOneBy({ id });
    if (!trip) return null;
    await this._repository.remove(trip);
    return trip;
  }
}

module.exports = new TripRepository();
