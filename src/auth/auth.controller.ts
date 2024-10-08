import { Controller, Get, Post, Body, } from '@nestjs/common';
import { AuthService } from './auth.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateUserDto, LoginDto, RegisterUserDto, UpdateUserDto } from './dto';
//import { UpdateUserDto } from './dto/update-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
   // console.log(createAuthDto);
    return this.authService.create(createAuthDto);
  }

@Post('login')
login( @Body () loginDto: LoginDto){
  return this.authService.login( loginDto );
}

@Post('register')
register( @Body () registerDto: RegisterUserDto ){
  return this.authService.register( registerDto );
}


  @Get()
  findAll() {
    return this.authService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.authService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
