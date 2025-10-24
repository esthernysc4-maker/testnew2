/**
 * @swagger
 * tags:
 *   name: Trips
 *   description: Trip management endpoints
 */

/**
 * @swagger
 * /api/trips/traveller-types:
 *   get:
 *     summary: Get all traveller types
 *     description: Retrieve list of all available traveller types (Solo, Couple, Family, Group, Business)
 *     tags: [Trips]
 *     responses:
 *       200:
 *         description: Traveller types retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Traveller types retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                       name:
 *                         type: string
 *                         example: Solo
 *                       description:
 *                         type: string
 *                         example: Just me
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/trips:
 *   post:
 *     summary: Create a new trip
 *     description: Create a new trip for the authenticated user
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trip_name:
 *                 type: string
 *                 example: Weekend in Paris
 *               trip_destination:
 *                 type: string
 *                 example: Paris, France
 *               trip_start_date:
 *                 type: string
 *                 format: date
 *                 example: 2025-08-17
 *               trip_end_date:
 *                 type: string
 *                 format: date
 *                 example: 2025-08-19
 *               trip_amount:
 *                 type: number
 *                 example: 1500
 *               travel_style_id:
 *                 type: string
 *                 format: uuid
 *               location_id:
 *                 type: string
 *                 format: uuid
 *               trip_frequency_id:
 *                 type: string
 *                 format: uuid
 *               traveller_type_id:
 *                 type: string
 *                 format: uuid
 *               trip_status_id:
 *                 type: string
 *                 format: uuid
 *               trip_transportation_mode_id:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Trip created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Trip created successfully
 *                 data:
 *                   type: object
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/trips:
 *   get:
 *     summary: Get all trips
 *     description: Retrieve all trips with optional filters
 *     tags: [Trips]
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter by user ID
 *       - in: query
 *         name: location_id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter by location ID
 *       - in: query
 *         name: status_id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter by trip status ID
 *     responses:
 *       200:
 *         description: Trips retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Trips retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/trips/{id}:
 *   get:
 *     summary: Get trip by ID
 *     description: Retrieve detailed information about a specific trip
 *     tags: [Trips]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Trip ID
 *     responses:
 *       200:
 *         description: Trip retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Trip retrieved successfully
 *                 data:
 *                   type: object
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/trips/{id}:
 *   patch:
 *     summary: Update a trip
 *     description: Update an existing trip (only the trip owner can update)
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Trip ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trip_name:
 *                 type: string
 *               trip_destination:
 *                 type: string
 *               trip_start_date:
 *                 type: string
 *                 format: date
 *               trip_end_date:
 *                 type: string
 *                 format: date
 *               trip_amount:
 *                 type: number
 *               trip_review_text:
 *                 type: string
 *               trip_review_star_number:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               travel_style_id:
 *                 type: string
 *                 format: uuid
 *               location_id:
 *                 type: string
 *                 format: uuid
 *               trip_frequency_id:
 *                 type: string
 *                 format: uuid
 *               traveller_type_id:
 *                 type: string
 *                 format: uuid
 *               trip_status_id:
 *                 type: string
 *                 format: uuid
 *               trip_transportation_mode_id:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       200:
 *         description: Trip updated successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - not the trip owner
 *       404:
 *         description: Trip not found
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/trips/{id}:
 *   delete:
 *     summary: Delete a trip
 *     description: Delete a trip (only the trip owner can delete)
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Trip ID
 *     responses:
 *       200:
 *         description: Trip deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - not the trip owner
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/users/{id}/trips:
 *   get:
 *     summary: Get trips by user ID
 *     description: Retrieve all trips created by a specific user
 *     tags: [Trips]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID
 *     responses:
 *       200:
 *         description: User trips retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: User trips retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/locations/{id}/trips:
 *   get:
 *     summary: Get trips by location ID
 *     description: Retrieve all trips for a specific location
 *     tags: [Trips]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Location ID
 *     responses:
 *       200:
 *         description: Location trips retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Location trips retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Server error
 */

module.exports = {};
