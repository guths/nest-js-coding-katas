import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users : User[] = [
        {
            id: 1,
            username: 'jonathan',
            password: 'jonathan'
        },
        {
            id: 2,
            username: 'cassie',
            password: 'cassie'
        },
        {
            id: 3,
            username: 'valmyr',
            password: 'valmyr'
        }
    ];


    getUsers() {
        return this.users.map((user) => plainToClass(SerializedUser, user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user: User) => user.username === username);
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }


}
