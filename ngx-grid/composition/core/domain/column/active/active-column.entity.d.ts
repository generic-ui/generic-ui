import { ColumnEntity } from '../column.entity';
export declare class ActiveColumnEntity extends ColumnEntity {
    private constructor();
    static fromEntity(entity: ColumnEntity): ActiveColumnEntity;
}
