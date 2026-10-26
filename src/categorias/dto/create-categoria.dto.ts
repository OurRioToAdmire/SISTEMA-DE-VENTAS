import { IsNumber} from "class-validator";


export class CreateCategoriaDto {
    @IsNumber()
    nombre : string
}
