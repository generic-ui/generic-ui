/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldIdGenerator } from '../field-id.generator';
import { DataType } from './data-type';
import { UnknownField } from './fields/unknown-field';
import { NumberField } from './fields/number-field';
import { StringField } from './fields/string-field';
import { BooleanField } from './fields/boolean-field';
import { DateField } from './fields/date-field';
export class FieldFactory {
    /**
     * @param {?} fieldIdGenerator
     */
    constructor(fieldIdGenerator) {
        this.fieldIdGenerator = fieldIdGenerator;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    create(column) {
        /** @type {?} */
        let columnType = column.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), column.aggregation);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), column.aggregation);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
    }
}
FieldFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldFactory.ctorParameters = () => [
    { type: FieldIdGenerator }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS2hELE1BQU0sT0FBTyxZQUFZOzs7O0lBRXhCLFlBQTZCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQy9ELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQW9COztZQUV0QixVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUk7UUFFNUIsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzdCLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hHO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztTQUNuRjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO1NBQ2pGO0lBRUYsQ0FBQzs7O1lBbENELFVBQVU7Ozs7WUFaRixnQkFBZ0I7Ozs7Ozs7SUFlWix3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVW5rbm93bkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvdW5rbm93bi1maWVsZCc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZCB9IGZyb20gJy4vZmllbGRzL251bWJlci1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdGaWVsZCB9IGZyb20gJy4vZmllbGRzL3N0cmluZy1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZmllbGRzL2RhdGUtZmllbGQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZElkR2VuZXJhdG9yOiBGaWVsZElkR2VuZXJhdG9yKSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5Db25maWcpOiBGaWVsZCB7XG5cblx0XHRsZXQgY29sdW1uVHlwZSA9IGNvbHVtbi50eXBlO1xuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uVHlwZSA9IERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTikge1xuXHRcdFx0cmV0dXJuIG5ldyBVbmtub3duRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgY29sdW1uLmFnZ3JlZ2F0aW9uKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE51bWJlckZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcsIGNvbHVtbi5hZ2dyZWdhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdGaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZUZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcpO1xuXHRcdH1cblxuXHR9XG5cblxufVxuIl19