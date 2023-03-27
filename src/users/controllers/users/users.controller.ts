import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/User';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    
    @Get('')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get('/:username')
    @UseInterceptors(ClassSerializerInterceptor)
    getUserByUsername(@Param('username') username: string) {
        const user = this.usersService.getUserByUsername(username);

        if (user) {
            return new SerializedUser(user);
        } else {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

    @Get('id/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.usersService.getUserById(id);

        if (user) {
            return new SerializedUser(user);
        } else {
            throw new UserNotFoundException('User not found (override)');
        }
    }

    
        


}
