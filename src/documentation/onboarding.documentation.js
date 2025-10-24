/**
 * @swagger
 * tags:
 *   name: Onboarding
 *   description: User onboarding and profile management endpoints
 */

/**
 * @swagger
 * /api/onboarding/user-types:
 *   get:
 *     summary: Get all available user types
 *     tags: [Onboarding]
 *     responses:
 *       200:
 *         description: User types retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: User types fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserType'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/onboarding/interests:
 *   get:
 *     summary: Get all available interests
 *     tags: [Onboarding]
 *     responses:
 *       200:
 *         description: Interests retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Interests retrieved successfully.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Interest'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/onboarding/user-type:
 *   patch:
 *     summary: Update user type
 *     tags: [Onboarding]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - user_type_id
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               user_type_id:
 *                 type: string
 *                 format: uuid
 *                 example: 550e8400-e29b-41d4-a716-446655440000
 *     responses:
 *       200:
 *         description: User type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: User type added successfully.
 *       400:
 *         description: User not found
 *       404:
 *         description: User type not found
 *       500:
 *         description: Failed to assign user type
 */

/**
 * @swagger
 * /api/onboarding/trip-purpose:
 *   patch:
 *     summary: Update user trip purpose
 *     tags: [Onboarding]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT authentication token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - trip_purpose
 *             properties:
 *               trip_purpose:
 *                 type: string
 *                 example: Leisure
 *     responses:
 *       200:
 *         description: Trip purpose updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: An unexpected error occurred
 */

/**
 * @swagger
 * /api/onboarding/planner:
 *   patch:
 *     summary: Update planner profile details
 *     tags: [Onboarding]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT authentication token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - planning_experience_years
 *               - planning_rate
 *               - destination_specialties
 *             properties:
 *               planning_experience_years:
 *                 type: number
 *                 example: 5
 *               planning_rate:
 *                 type: number
 *                 example: 150
 *               planner_currency:
 *                 type: string
 *                 example: USD
 *               destination_specialties:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Europe", "Asia", "Adventure Travel"]
 *     responses:
 *       200:
 *         description: Planner profile updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to update planner details
 */

/**
 * @swagger
 * /api/onboarding/user/{user_id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Onboarding]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID (UUID)
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       400:
 *         description: User not found
 *       500:
 *         description: Failed to retrieve user
 */

/**
 * @swagger
 * /api/onboarding/user:
 *   get:
 *     summary: Get authenticated user profile
 *     tags: [Onboarding]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT authentication token
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       400:
 *         description: User not found
 *       500:
 *         description: Failed to retrieve user
 *   patch:
 *     summary: Update user details
 *     tags: [Onboarding]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - first_name
 *               - last_name
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               first_name:
 *                 type: string
 *                 example: John
 *               last_name:
 *                 type: string
 *                 example: Doe
 *               password:
 *                 type: string
 *                 example: SecurePass123!
 *               phone_number:
 *                 type: string
 *                 example: +1234567890
 *     responses:
 *       200:
 *         description: Details updated successfully
 *       401:
 *         description: User Not Found / Account Not Verified
 *       500:
 *         description: Something went wrong
 */

/**
 * @swagger
 * /api/onboarding/interests:
 *   patch:
 *     summary: Update user interests and travel preferences
 *     tags: [Onboarding]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT authentication token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - interest_ids
 *               - travel_frequency
 *               - budget_min
 *               - budget_max
 *             properties:
 *               interest_ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *                 example: ["550e8400-e29b-41d4-a716-446655440000"]
 *               travel_frequency:
 *                 type: string
 *                 enum: ["Weekly", "Monthly", "Once a year", "2 - 3 times per year"]
 *                 example: Monthly
 *               budget_currency:
 *                 type: string
 *                 example: USD
 *               budget_min:
 *                 type: number
 *                 example: 1000
 *               budget_max:
 *                 type: number
 *                 example: 5000
 *     responses:
 *       200:
 *         description: User interests updated successfully
 *       500:
 *         description: Failed to retrieve interests
 */
