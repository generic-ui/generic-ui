import { FieldId } from './field.id';
import { DataType } from './data-type';
import { OriginItemEntity } from '../../../../source/command/origin/origin-item-entity';
import { AggregationType } from '../../aggregation/aggregation.type';
import { ColumnAggregationConfig } from '../../../../../../composition/domain/column-aggregation.config';
export declare abstract class Field {
    private readonly id;
    private readonly accessor;
    private readonly dataType;
    private readonly accessorMethod;
    private aggregationEnabled;
    private aggregations;
    private readonly possibleAggregations;
    protected constructor(id: FieldId, accessor: any, dataType: DataType, aggregationConfig?: ColumnAggregationConfig);
    abstract assignDefaultAggregations(): AggregationType;
    abstract assignPossibleAggregations(): AggregationType;
    getId(): FieldId;
    getKey(): string;
    getDataType(): DataType;
    getAccessor(): string;
    getAccessorMethod(): (entity: OriginItemEntity) => any;
    getValue(entity: OriginItemEntity): any;
    isAggregation(type: AggregationType): boolean;
    isAggregationEnabled(): boolean;
    setAggregationEnabled(enabled: boolean): void;
    private assignAggregations;
}
