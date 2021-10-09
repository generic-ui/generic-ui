/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../core/domain/structure.command';
var SetSortOrderCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetSortOrderCommand, _super);
    function SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder) {
        var _this = _super.call(this, structureId, 'SetSortOrderCommand') || this;
        _this.compositionId = compositionId;
        _this.fieldId = fieldId;
        _this.sortOrder = sortOrder;
        return _this;
    }
    /**
     * @return {?}
     */
    SetSortOrderCommand.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SetSortOrderCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    SetSortOrderCommand.prototype.getSortOrder = /**
     * @return {?}
     */
    function () {
        return this.sortOrder;
    };
    return SetSortOrderCommand;
}(StructureCommand));
export { SetSortOrderCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.sortOrder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvcnRpbmcvY29yZS9kb21haW4vb3JkZXIvc2V0LXNvcnQtb3JkZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzdFO0lBQXlDLCtDQUFnQjtJQUV4RCw2QkFBWSxXQUF3QixFQUNoQixhQUE0QixFQUM1QixPQUFnQixFQUNoQixTQUFvQjtRQUh4QyxZQUlDLGtCQUFNLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxTQUN6QztRQUptQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGVBQVMsR0FBVCxTQUFTLENBQVc7O0lBRXhDLENBQUM7Ozs7SUFFRCw4Q0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUF5QyxnQkFBZ0IsR0FvQnhEOzs7Ozs7O0lBakJHLDRDQUE2Qzs7Ozs7SUFDN0Msc0NBQWlDOzs7OztJQUNqQyx3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0U29ydE9yZGVyQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydE9yZGVyOiBTb3J0T3JkZXIpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldFNvcnRPcmRlckNvbW1hbmQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldFNvcnRPcmRlcigpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRPcmRlcjtcblx0fVxufVxuIl19