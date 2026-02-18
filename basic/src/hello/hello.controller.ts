import { Controller, Get, Param } from '@nestjs/common';

@Controller('hello')
export class HelloController {

    @Get()
    get(){
        return 'Hello World';
    }

    @Get('greet')
    greetAll(){
        return `Hello Nest`;
    }
    

    @Get('greet/:name')
    greet(@Param('name') name: string){
        return `Hello ${name ?? 'Nest'}`;
    }
}
