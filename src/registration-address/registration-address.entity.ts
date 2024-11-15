import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('registration_address')
export class RegistrationAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  region: string;

  @Column()
  locality: string;

  @Column()
  street: string;

  @Column()
  house: string;

  @Column({ nullable: true })
  building?: string;

  @Column({ nullable: true })
  apartment?: string;
}
