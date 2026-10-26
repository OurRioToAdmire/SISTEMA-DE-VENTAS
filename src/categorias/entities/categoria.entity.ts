import { Producto } from '../../productos/entities/producto.entity.js';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
  id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos: Producto[];
}