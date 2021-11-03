import { ActiveColumnEntity } from './active-column.entity';
import { ColumnEntity } from '../column.entity';
export declare class ActiveColumnEntityConverter {
    convertMany(entities: Array<ColumnEntity>): Array<ActiveColumnEntity>;
    convert(entity: ColumnEntity): ActiveColumnEntity;
}
