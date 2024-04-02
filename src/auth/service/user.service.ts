import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(user: User): User {
    // Logic to create a new user
    this.users.push(user);
    return user;
  }

  getUsers(): User[] {
    // Logic to get all users
    return this.users;
  }

  getUserById(id: string): User {
    // Logic to get a user by ID
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: string, updatedUser: User): User {
    // Logic to update a user
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    return null;
  }

  deleteUser(id: string): boolean {
    // Logic to delete a user
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
