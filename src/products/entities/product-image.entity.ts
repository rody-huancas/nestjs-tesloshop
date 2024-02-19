import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './product.entity';

@Entity()
export class ProductImage {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    @ManyToOne(
        () => Product,
        product => product.images,
        { onDelete: 'CASCADE' } // cuando elimine el producto, eliminar las imagenes que le pertenecen
    )
    product: Product;
}