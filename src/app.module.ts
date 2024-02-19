import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // configurar variables de entorno
    TypeOrmModule.forRoot({ // configurar type orm
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true, // cargar automaticamente las entidades
      synchronize: true, // sincronizar cambios del entity (solo para desarrollo)
    }), 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    ProductsModule, 
    CommonModule, 
    SeedModule, 
    FilesModule, 
  ],
})
export class AppModule {}
