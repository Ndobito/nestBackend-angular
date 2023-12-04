import { IsEmail, IsString, MinLength } from "class-validator";
import { roleUser } from "../interfaces/roleUser.interface";

export class registerUserDto{
    @IsString()
    name:       string;

    @IsEmail()
    email:      string;

    @MinLength(6)
    password:   string;

}