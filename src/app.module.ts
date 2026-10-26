import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductosModule } from './productos/productos.module.js';
import { CategoriasModule } from './categorias/categorias.module.js';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Producto } from './productos/entities/producto.entity.js';
import { Categoria } from './categorias/entities/categoria.entity.js';
import { VentasModule } from './ventas/ventas.module.js';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module.js';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'ventas',
      entities: [Categoria,Producto],
      synchronize: true,
      autoLoadEntities: true
    }),
    ProductosModule,
    CategoriasModule,
    VentasModule,
    DetalleVentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
