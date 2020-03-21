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
import { FieldMatchers } from '../matcher/field.matchers';
var FieldFactory = /** @class */ (function () {
    function FieldFactory(fieldIdGenerator) {
        this.fieldIdGenerator = fieldIdGenerator;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    FieldFactory.prototype.create = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var fieldMatchers = this.createMatchers(column);
        /** @type {?} */
        var columnType = column.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers, column.aggregation);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers, column.aggregation);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers);
        }
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    FieldFactory.prototype.createMatchers = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var matcher = column.matcher;
        /** @type {?} */
        var sortMatcher;
        if (column.sorting) {
            sortMatcher = column.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    };
    FieldFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldFactory.ctorParameters = function () { return [
        { type: FieldIdGenerator }
    ]; };
    return FieldFactory;
}());
export { FieldFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUcxRDtJQUdDLHNCQUE2QixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMvRCxDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxNQUFvQjs7WUFFcEIsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDOztZQUU3QyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUk7UUFFNUIsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzdCLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2SDtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEg7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNsRztRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ25HO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtZQUNqQyxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDaEc7SUFFRixDQUFDOzs7Ozs7SUFFTyxxQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBb0I7O1lBRXRDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTzs7WUFDM0IsV0FBVztRQUVaLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkFoREQsVUFBVTs7OztnQkFaRixnQkFBZ0I7O0lBK0R6QixtQkFBQztDQUFBLEFBbkRELElBbURDO1NBbERZLFlBQVk7Ozs7OztJQUVaLHdDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4uL2ZpZWxkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBVbmtub3duRmllbGQgfSBmcm9tICcuL2ZpZWxkcy91bmtub3duLWZpZWxkJztcbmltcG9ydCB7IE51bWJlckZpZWxkIH0gZnJvbSAnLi9maWVsZHMvbnVtYmVyLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0ZpZWxkIH0gZnJvbSAnLi9maWVsZHMvc3RyaW5nLWZpZWxkJztcbmltcG9ydCB7IEJvb2xlYW5GaWVsZCB9IGZyb20gJy4vZmllbGRzL2Jvb2xlYW4tZmllbGQnO1xuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9maWVsZHMvZGF0ZS1maWVsZCc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZElkR2VuZXJhdG9yOiBGaWVsZElkR2VuZXJhdG9yKSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5Db25maWcpOiBGaWVsZCB7XG5cblx0XHRjb25zdCBmaWVsZE1hdGNoZXJzID0gdGhpcy5jcmVhdGVNYXRjaGVycyhjb2x1bW4pO1xuXG5cdFx0bGV0IGNvbHVtblR5cGUgPSBjb2x1bW4udHlwZTtcblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtblR5cGUgPSBEYXRhVHlwZS5TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlVOS05PV04pIHtcblx0XHRcdHJldHVybiBuZXcgVW5rbm93bkZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGNvbHVtbi5hZ2dyZWdhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuIG5ldyBOdW1iZXJGaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBjb2x1bW4uYWdncmVnYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiBuZXcgU3RyaW5nRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhbkZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gbmV3IERhdGVGaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTWF0Y2hlcnMoY29sdW1uOiBDb2x1bW5Db25maWcpOiBGaWVsZE1hdGNoZXJzIHtcblxuXHRcdGxldCBtYXRjaGVyID0gY29sdW1uLm1hdGNoZXIsXG5cdFx0XHRzb3J0TWF0Y2hlcjtcblxuXHRcdGlmIChjb2x1bW4uc29ydGluZykge1xuXHRcdFx0c29ydE1hdGNoZXIgPSBjb2x1bW4uc29ydGluZy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgRmllbGRNYXRjaGVycyhtYXRjaGVyLCBzb3J0TWF0Y2hlcik7XG5cdH1cblxuXG59XG4iXX0=