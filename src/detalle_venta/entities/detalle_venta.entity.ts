import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetalleVenta {
  @PrimaryGeneratedColumn()
  ventas_id: number;

  @Column()
  producto_id: number;

  @Column()
  cantidad: number;
  
  @Column()
  subtotal: number;

}
