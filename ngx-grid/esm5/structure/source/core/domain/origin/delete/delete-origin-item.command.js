/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../../core/domain/structure.command';
/** @enum {number} */
var DeleteCommandPayloadType = {
    INDEX: 0,
    ITEM_ID: 1,
    MANY_INDEX: 2,
    MANY_ITEM_ID: 3,
};
export { DeleteCommandPayloadType };
DeleteCommandPayloadType[DeleteCommandPayloadType.INDEX] = 'INDEX';
DeleteCommandPayloadType[DeleteCommandPayloadType.ITEM_ID] = 'ITEM_ID';
DeleteCommandPayloadType[DeleteCommandPayloadType.MANY_INDEX] = 'MANY_INDEX';
DeleteCommandPayloadType[DeleteCommandPayloadType.MANY_ITEM_ID] = 'MANY_ITEM_ID';
var DeleteOriginItemCommand = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteOriginItemCommand, _super);
    function DeleteOriginItemCommand(structureId, payload, type) {
        var _this = _super.call(this, structureId, 'DeleteOriginItemCommand') || this;
        _this.payload = payload;
        _this.type = type;
        return _this;
    }
    /**
     * @param {?} structureId
     * @param {?} index
     * @return {?}
     */
    DeleteOriginItemCommand.byIndex = /**
     * @param {?} structureId
     * @param {?} index
     * @return {?}
     */
    function (structureId, index) {
        return new DeleteOriginItemCommand(structureId, index, DeleteCommandPayloadType.INDEX);
    };
    /**
     * @param {?} structureId
     * @param {?} indexes
     * @return {?}
     */
    DeleteOriginItemCommand.byManyIndex = /**
     * @param {?} structureId
     * @param {?} indexes
     * @return {?}
     */
    function (structureId, indexes) {
        return new DeleteOriginItemCommand(structureId, indexes, DeleteCommandPayloadType.MANY_INDEX);
    };
    /**
     * @param {?} structureId
     * @param {?} itemId
     * @return {?}
     */
    DeleteOriginItemCommand.byItemId = /**
     * @param {?} structureId
     * @param {?} itemId
     * @return {?}
     */
    function (structureId, itemId) {
        return new DeleteOriginItemCommand(structureId, itemId, DeleteCommandPayloadType.ITEM_ID);
    };
    /**
     * @param {?} structureId
     * @param {?} itemIds
     * @return {?}
     */
    DeleteOriginItemCommand.byManyItemId = /**
     * @param {?} structureId
     * @param {?} itemIds
     * @return {?}
     */
    function (structureId, itemIds) {
        return new DeleteOriginItemCommand(structureId, itemIds, DeleteCommandPayloadType.MANY_ITEM_ID);
    };
    /**
     * @return {?}
     */
    DeleteOriginItemCommand.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @return {?}
     */
    DeleteOriginItemCommand.prototype.getPayload = /**
     * @return {?}
     */
    function () {
        return this.payload;
    };
    return DeleteOriginItemCommand;
}(StructureCommand));
export { DeleteOriginItemCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeleteOriginItemCommand.prototype.payload;
    /**
     * @type {?}
     * @private
     */
    DeleteOriginItemCommand.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL2RlbGV0ZS9kZWxldGUtb3JpZ2luLWl0ZW0uY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7SUFHL0UsUUFBSztJQUNMLFVBQU87SUFDUCxhQUFVO0lBQ1YsZUFBWTs7Ozs7OztBQVdiO0lBQTZDLG1EQUFnQjtJQWtCNUQsaUNBQVksV0FBd0IsRUFDaEIsT0FBNEQsRUFDNUQsSUFBOEI7UUFGbEQsWUFHQyxrQkFBTSxXQUFXLEVBQUUseUJBQXlCLENBQUMsU0FDN0M7UUFIbUIsYUFBTyxHQUFQLE9BQU8sQ0FBcUQ7UUFDNUQsVUFBSSxHQUFKLElBQUksQ0FBMEI7O0lBRWxELENBQUM7Ozs7OztJQXBCTSwrQkFBTzs7Ozs7SUFBZCxVQUFlLFdBQXdCLEVBQUUsS0FBYTtRQUNyRCxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFFTSxtQ0FBVzs7Ozs7SUFBbEIsVUFBbUIsV0FBd0IsRUFBRSxPQUFzQjtRQUNsRSxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7Ozs7SUFFTSxnQ0FBUTs7Ozs7SUFBZixVQUFnQixXQUF3QixFQUFFLE1BQWdCO1FBQ3pELE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7OztJQUVNLG9DQUFZOzs7OztJQUFuQixVQUFvQixXQUF3QixFQUFFLE9BQXdCO1FBQ3JFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7SUFRRCx5Q0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUYsOEJBQUM7QUFBRCxDQUFDLEFBaENELENBQTZDLGdCQUFnQixHQWdDNUQ7Ozs7Ozs7SUFiRywwQ0FBNkU7Ozs7O0lBQzdFLHVDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vb3JpZ2luLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBlbnVtIERlbGV0ZUNvbW1hbmRQYXlsb2FkVHlwZSB7XG5cdElOREVYLFxuXHRJVEVNX0lELFxuXHRNQU5ZX0lOREVYLFxuXHRNQU5ZX0lURU1fSURcbn1cblxuZXhwb3J0IHR5cGUgRGVsZXRlT3JpZ2luSXRlbVBheWxvYWQgPSB7XG5cblx0aW5kZXg/OiBudW1iZXI7XG5cblx0aXRlbUlkPzogT3JpZ2luSWQ7XG5cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0c3RhdGljIGJ5SW5kZXgoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBpbmRleDogbnVtYmVyKTogRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQge1xuXHRcdHJldHVybiBuZXcgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQoc3RydWN0dXJlSWQsIGluZGV4LCBEZWxldGVDb21tYW5kUGF5bG9hZFR5cGUuSU5ERVgpO1xuXHR9XG5cblx0c3RhdGljIGJ5TWFueUluZGV4KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgaW5kZXhlczogQXJyYXk8bnVtYmVyPik6IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIHtcblx0XHRyZXR1cm4gbmV3IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kKHN0cnVjdHVyZUlkLCBpbmRleGVzLCBEZWxldGVDb21tYW5kUGF5bG9hZFR5cGUuTUFOWV9JTkRFWCk7XG5cdH1cblxuXHRzdGF0aWMgYnlJdGVtSWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBpdGVtSWQ6IE9yaWdpbklkKTogRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQge1xuXHRcdHJldHVybiBuZXcgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQoc3RydWN0dXJlSWQsIGl0ZW1JZCwgRGVsZXRlQ29tbWFuZFBheWxvYWRUeXBlLklURU1fSUQpO1xuXHR9XG5cblx0c3RhdGljIGJ5TWFueUl0ZW1JZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPik6IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIHtcblx0XHRyZXR1cm4gbmV3IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kKHN0cnVjdHVyZUlkLCBpdGVtSWRzLCBEZWxldGVDb21tYW5kUGF5bG9hZFR5cGUuTUFOWV9JVEVNX0lEKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYXlsb2FkOiBudW1iZXIgfCBPcmlnaW5JZCB8IEFycmF5PG51bWJlcj4gfCBBcnJheTxPcmlnaW5JZD4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGVsZXRlQ29tbWFuZFBheWxvYWRUeXBlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdEZWxldGVPcmlnaW5JdGVtQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBEZWxldGVDb21tYW5kUGF5bG9hZFR5cGUge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRnZXRQYXlsb2FkKCk6IG51bWJlciB8IE9yaWdpbklkIHwgQXJyYXk8bnVtYmVyPiB8IEFycmF5PE9yaWdpbklkPiB7XG5cdFx0cmV0dXJuIHRoaXMucGF5bG9hZDtcblx0fVxuXG59XG4iXX0=