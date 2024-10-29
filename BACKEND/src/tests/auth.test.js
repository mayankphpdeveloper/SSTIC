// import request from 'supertest';
import app from '../src/app'; // Adjust the path if necessary
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Auth API', () => {
    let userEmail = 'testuser@example.com';
    let userPassword = 'securepassword';

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'Test User',
                email: userEmail,
                password: userPassword,
                tc: true // Assuming this is a required field
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User registered successfully');
    });

    it('should log in the user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: userEmail,
                password: userPassword
            });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined(); // Check if the token is returned
    });

    it('should not log in with wrong credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: userEmail,
                password: 'wrongpassword'
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid credentials');
    });
});
