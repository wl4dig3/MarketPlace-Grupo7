import { getUserById, createUser, deleteUserById } from '../model/userModel.js';

const createUserController = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await createUser(user);
        res.status(201).json({
            success: {
                status: 201,
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                phone_number: newUser.phone_number
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        if (user) {
            res.status(200).json({
                success: {
                    status: 200,
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    phone_number: user.phone_number,
                    date_of_birth: user.date_of_birth
                }
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await deleteUserById(id);
        if (user) {
            res.status(200).json({
                success: {
                    status: 200,
                    message: 'User deleted successfully'
                }
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export { createUserController, getUserController, deleteUserController };
