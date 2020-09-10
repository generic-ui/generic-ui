/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { FieldsInitedEvent } from './fields-inited.event';
var FieldsInitedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedAggregateEvent, _super);
    function FieldsInitedAggregateEvent(structureId, fieldConfigs, // TODO merge
    fields) {
        var _this = _super.call(this, structureId, 'FieldsInitedAggregateEvent') || this;
        _this.fieldConfigs = fieldConfigs;
        _this.fields = fields;
        return _this;
    }
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new FieldsInitedEvent(this.getAggregateId(), this.fieldConfigs, this.fields);
    };
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.getFieldConfigs = /**
     * @return {?}
     */
    function () {
        return this.fieldConfigs;
    };
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.fields;
    };
    return FieldsInitedAggregateEvent;
}(AggregateEvent));
export { FieldsInitedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRDtJQUFnRCxzREFBMkI7SUFFMUUsb0NBQVksV0FBd0IsRUFDaEIsWUFBZ0MsRUFBRSxhQUFhO0lBQy9DLE1BQW9CO1FBRnhDLFlBR0Msa0JBQU0sV0FBVyxFQUFFLDRCQUE0QixDQUFDLFNBQ2hEO1FBSG1CLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxZQUFNLEdBQU4sTUFBTSxDQUFjOztJQUV4QyxDQUFDOzs7O0lBRUQsa0RBQWE7OztJQUFiO1FBRUMsT0FBTyxJQUFJLGlCQUFpQixDQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxNQUFNLENBQ1gsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxvREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ0YsaUNBQUM7QUFBRCxDQUFDLEFBeEJELENBQWdELGNBQWMsR0F3QjdEOzs7Ozs7O0lBckJHLGtEQUFpRDs7Ozs7SUFDakQsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCAvLyBUT0RPIG1lcmdlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzOiBBcnJheTxGaWVsZD4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0ZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkc0luaXRlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0dGhpcy5maWVsZENvbmZpZ3MsXG5cdFx0XHR0aGlzLmZpZWxkc1xuXHRcdCk7XG5cdH1cblxuXHRnZXRGaWVsZENvbmZpZ3MoKTogQXJyYXk8RmllbGRDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZENvbmZpZ3M7XG5cdH1cblxuXHRnZXRGaWVsZHMoKTogQXJyYXk8RmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cbn1cbiJdfQ==