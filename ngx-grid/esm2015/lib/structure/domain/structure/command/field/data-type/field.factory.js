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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS2hELE1BQU0sT0FBTyxZQUFZOzs7O0lBRXhCLFlBQTZCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQy9ELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQW9COztZQUV0QixVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUk7UUFFNUIsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzdCLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hHO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztTQUNuRjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO1NBQ2pGO0lBRUYsQ0FBQzs7O1lBbENELFVBQVU7Ozs7WUFaRixnQkFBZ0I7Ozs7Ozs7SUFlWix3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBVbmtub3duRmllbGQgfSBmcm9tICcuL2ZpZWxkcy91bmtub3duLWZpZWxkJztcbmltcG9ydCB7IE51bWJlckZpZWxkIH0gZnJvbSAnLi9maWVsZHMvbnVtYmVyLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0ZpZWxkIH0gZnJvbSAnLi9maWVsZHMvc3RyaW5nLWZpZWxkJztcbmltcG9ydCB7IEJvb2xlYW5GaWVsZCB9IGZyb20gJy4vZmllbGRzL2Jvb2xlYW4tZmllbGQnO1xuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9maWVsZHMvZGF0ZS1maWVsZCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRHZW5lcmF0b3I6IEZpZWxkSWRHZW5lcmF0b3IpIHtcblx0fVxuXG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkNvbmZpZyk6IEZpZWxkIHtcblxuXHRcdGxldCBjb2x1bW5UeXBlID0gY29sdW1uLnR5cGU7XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5UeXBlID0gRGF0YVR5cGUuU1RSSU5HO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5VTktOT1dOKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFVua25vd25GaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nLCBjb2x1bW4uYWdncmVnYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBuZXcgTnVtYmVyRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgY29sdW1uLmFnZ3JlZ2F0aW9uKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cmluZ0ZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5GaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBEYXRlRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZyk7XG5cdFx0fVxuXG5cdH1cblxuXG59XG4iXX0=