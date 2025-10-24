/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and account management endpoints
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 maxLength: 255
 *                 example: john.doe@example.com
 *                 description: User's email address
 *     responses:
 *       201:
 *         description: Registration successful. Verification code sent to email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Registration successful. Please check your email for verification code.
 *                 data:
 *                   type: object
 *       401:
 *         description: User with this email already exists
 *       429:
 *         description: Too many requests. Rate limit exceeded.
 */

/**
 * @swagger
 * /api/auth/verify-email:
 *   post:
 *     summary: Verify user email with 6-digit code
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 maxLength: 255
 *                 example: john.doe@example.com
 *                 description: User's email address
 *               code:
 *                 type: string
 *                 pattern: '^[0-9]{6}$'
 *                 example: "123456"
 *                 description: 6-digit verification code received via email
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: Email already verified, invalid code, or code expired
 *       404:
 *         description: User not found
 *       500:
 *         description: Email verification failed
 */

/**
 * @swagger
 * /api/auth/resend-verification:
 *   post:
 *     summary: Resend verification code to email
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *                 description: Email address to resend verification code
 *     responses:
 *       200:
 *         description: New verification code sent successfully
 *       400:
 *         description: Email already verified
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to resend verification code
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 128
 *                 example: SecurePass123!
 *                 description: User's password
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid Email or Password / Invalid credentials
 *       403:
 *         description: Please verify your email before logging in
 *       500:
 *         description: Login failed
 */

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Request password reset code
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *                 description: Email address for password reset
 *     responses:
 *       200:
 *         description: Password reset code sent to inbox
 *       400:
 *         description: User Not Found
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Password Reset Request Failed
 */

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset password with verification code
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - new_password
 *             properties:
 *               token:
 *                 type: string
 *                 example: "123456"
 *                 description: Password reset code received via email
 *               new_password:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 128
 *                 pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'
 *                 example: NewSecurePass123!
 *                 description: New password (must include uppercase, lowercase, number, special character)
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       401:
 *         description: Invalid or expired password reset code
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Password Reset Failed
 */

/**
 * @swagger
 * /api/auth/update-password:
 *   patch:
 *     summary: Change password (authenticated users)
 *     tags: [Authentication]
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT authentication token used for verifying authenticated users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - current_password
 *               - new_password
 *             properties:
 *               current_password:
 *                 type: string
 *                 example: OldSecurePass123!
 *                 description: Current password
 *               new_password:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 128
 *                 pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'
 *                 example: NewSecurePass123!
 *                 description: New password (must include uppercase, lowercase, number, special character)
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       401:
 *         description: Your current password is invalid / Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Password Update Failed
 */
