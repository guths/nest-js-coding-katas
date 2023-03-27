import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomer } from './middleware/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomer).forRoutes(
      {
        path: 'customers/search/:id',
        method: RequestMethod.GET
      }
    )
  }
}
