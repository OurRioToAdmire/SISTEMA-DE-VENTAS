import { DetalleVenta } from '../../detalle_venta/entities/detalle_venta.entity.js';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    venta_id: number;
  
    @Column()
    cliente: string;
  
    @Column()
    fecha: number;

    @Column()
    total: number;
    
    @ManyToOne(DetalleVenta(detalleventa) => DetalleVenta.ventas_id)
    detalleventa:DetalleVenta;
   
}

