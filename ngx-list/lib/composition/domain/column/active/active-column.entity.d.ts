import { ColumnEntity } from '../column.entity';
export declare class ActiveColumnEntity extends ColumnEntity {
    static fromEntity(entity: ColumnEntity): ActiveColumnEntity;
    private constructor();
}
