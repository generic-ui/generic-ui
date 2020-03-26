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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUkxRDtJQUdDLHNCQUE2QixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMvRCxDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxNQUFvQjs7WUFFcEIsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDOztZQUU3QyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUk7UUFFNUIsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzdCLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2SDtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEg7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNsRztRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ25HO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtZQUNqQyxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDaEc7SUFFRixDQUFDOzs7Ozs7SUFFTyxxQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBb0I7O1lBRXRDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTzs7WUFDM0IsV0FBVztRQUVaLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkFoREQsVUFBVTs7OztnQkFaRixnQkFBZ0I7O0lBK0R6QixtQkFBQztDQUFBLEFBbkRELElBbURDO1NBbERZLFlBQVk7Ozs7OztJQUVaLHdDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4uL2ZpZWxkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IFVua25vd25GaWVsZCB9IGZyb20gJy4vZmllbGRzL3Vua25vd24tZmllbGQnO1xuaW1wb3J0IHsgTnVtYmVyRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9udW1iZXItZmllbGQnO1xuaW1wb3J0IHsgU3RyaW5nRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9zdHJpbmctZmllbGQnO1xuaW1wb3J0IHsgQm9vbGVhbkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQgeyBEYXRlRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9kYXRlLWZpZWxkJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEFsbEZpZWxkVHlwZXMgfSBmcm9tICcuL2FsbC1maWVsZC10eXBlcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZElkR2VuZXJhdG9yOiBGaWVsZElkR2VuZXJhdG9yKSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5Db25maWcpOiBBbGxGaWVsZFR5cGVzIHtcblxuXHRcdGNvbnN0IGZpZWxkTWF0Y2hlcnMgPSB0aGlzLmNyZWF0ZU1hdGNoZXJzKGNvbHVtbik7XG5cblx0XHRsZXQgY29sdW1uVHlwZSA9IGNvbHVtbi50eXBlO1xuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uVHlwZSA9IERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTikge1xuXHRcdFx0cmV0dXJuIG5ldyBVbmtub3duRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycywgY29sdW1uLmFnZ3JlZ2F0aW9uKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE51bWJlckZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGNvbHVtbi5hZ2dyZWdhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdGaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZUZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVNYXRjaGVycyhjb2x1bW46IENvbHVtbkNvbmZpZyk6IEZpZWxkTWF0Y2hlcnMge1xuXG5cdFx0bGV0IG1hdGNoZXIgPSBjb2x1bW4ubWF0Y2hlcixcblx0XHRcdHNvcnRNYXRjaGVyO1xuXG5cdFx0aWYgKGNvbHVtbi5zb3J0aW5nKSB7XG5cdFx0XHRzb3J0TWF0Y2hlciA9IGNvbHVtbi5zb3J0aW5nLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZE1hdGNoZXJzKG1hdGNoZXIsIHNvcnRNYXRjaGVyKTtcblx0fVxuXG5cbn1cbiJdfQ==