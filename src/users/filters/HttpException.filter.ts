import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";

export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception.getResponse());
        console.log(host);

        const context = host.switchToHttp();

        const response = context.getResponse();

        response.send({
            'lol': 'lol'
        })
    }
}