// El entity es una representación de lo que será nuestra tabla en la bd
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    titile: string;

    @Column('numeric', {
        default: 0,
    })
    price: number;

    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @Column('text',{
        unique: true,
    })
    slug: string;

    @Column('int', {
        default: 0,
    })
    stock: number;

    @Column('text', { // arreglo de strings
        array: true,
    })
    sizes: string[];

    @Column('text')
    gender: string;

    // tags

    // images
}
 