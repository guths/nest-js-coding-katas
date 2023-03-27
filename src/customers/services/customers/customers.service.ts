import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/create-customer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    customers : Customer[] = [
        {
            id: 1,
            email: 'jonathanguths@gmail.com',
            name: 'jonathan',
        },
        {
            id: 2,
            email: 'valmyr@gmail.com',
            name: 'valmyr',
        },
        {
            id: 3,
            email: 'cassie@gmail.com',
            name: 'cassie',
        },
    ]

    findCustomer(id : number) {
        return this.customers.find((user) => {
            return user.id == id
        })
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }

    getAllCustomers() {
        return this.customers;
    }
}
