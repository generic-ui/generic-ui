/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
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
}(Command));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQU01QyxRQUFLO0lBQ0wsVUFBTztJQUNQLGFBQVU7SUFDVixlQUFZOzs7Ozs7O0FBV2I7SUFBNkMsbURBQU87SUFrQm5ELGlDQUFZLFdBQXdCLEVBQ2hCLE9BQTRELEVBQzVELElBQThCO1FBRmxELFlBR0Msa0JBQU0sV0FBVyxFQUFFLHlCQUF5QixDQUFDLFNBQzdDO1FBSG1CLGFBQU8sR0FBUCxPQUFPLENBQXFEO1FBQzVELFVBQUksR0FBSixJQUFJLENBQTBCOztJQUVsRCxDQUFDOzs7Ozs7SUFwQk0sK0JBQU87Ozs7O0lBQWQsVUFBZSxXQUF3QixFQUFFLEtBQWE7UUFDckQsT0FBTyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRU0sbUNBQVc7Ozs7O0lBQWxCLFVBQW1CLFdBQXdCLEVBQUUsT0FBc0I7UUFDbEUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7O0lBRU0sZ0NBQVE7Ozs7O0lBQWYsVUFBZ0IsV0FBd0IsRUFBRSxNQUFnQjtRQUN6RCxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFTSxvQ0FBWTs7Ozs7SUFBbkIsVUFBb0IsV0FBd0IsRUFBRSxPQUF3QjtRQUNyRSxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7O0lBUUQseUNBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLDhCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUE2QyxPQUFPLEdBZ0NuRDs7Ozs7OztJQWJHLDBDQUE2RTs7Ozs7SUFDN0UsdUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vb3JpZ2luLWlkJztcblxuZXhwb3J0IGVudW0gRGVsZXRlQ29tbWFuZFBheWxvYWRUeXBlIHtcblx0SU5ERVgsXG5cdElURU1fSUQsXG5cdE1BTllfSU5ERVgsXG5cdE1BTllfSVRFTV9JRFxufVxuXG5leHBvcnQgdHlwZSBEZWxldGVPcmlnaW5JdGVtUGF5bG9hZCA9IHtcblxuXHRpbmRleD86IG51bWJlcjtcblxuXHRpdGVtSWQ/OiBPcmlnaW5JZDtcblxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRzdGF0aWMgYnlJbmRleChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGluZGV4OiBudW1iZXIpOiBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZCB7XG5cdFx0cmV0dXJuIG5ldyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZChzdHJ1Y3R1cmVJZCwgaW5kZXgsIERlbGV0ZUNvbW1hbmRQYXlsb2FkVHlwZS5JTkRFWCk7XG5cdH1cblxuXHRzdGF0aWMgYnlNYW55SW5kZXgoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBpbmRleGVzOiBBcnJheTxudW1iZXI+KTogRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQge1xuXHRcdHJldHVybiBuZXcgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQoc3RydWN0dXJlSWQsIGluZGV4ZXMsIERlbGV0ZUNvbW1hbmRQYXlsb2FkVHlwZS5NQU5ZX0lOREVYKTtcblx0fVxuXG5cdHN0YXRpYyBieUl0ZW1JZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGl0ZW1JZDogT3JpZ2luSWQpOiBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZCB7XG5cdFx0cmV0dXJuIG5ldyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZChzdHJ1Y3R1cmVJZCwgaXRlbUlkLCBEZWxldGVDb21tYW5kUGF5bG9hZFR5cGUuSVRFTV9JRCk7XG5cdH1cblxuXHRzdGF0aWMgYnlNYW55SXRlbUlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgaXRlbUlkczogQXJyYXk8T3JpZ2luSWQ+KTogRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQge1xuXHRcdHJldHVybiBuZXcgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQoc3RydWN0dXJlSWQsIGl0ZW1JZHMsIERlbGV0ZUNvbW1hbmRQYXlsb2FkVHlwZS5NQU5ZX0lURU1fSUQpO1xuXHR9XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBheWxvYWQ6IG51bWJlciB8IE9yaWdpbklkIHwgQXJyYXk8bnVtYmVyPiB8IEFycmF5PE9yaWdpbklkPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBEZWxldGVDb21tYW5kUGF5bG9hZFR5cGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0RlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kJyk7XG5cdH1cblxuXHRnZXRUeXBlKCk6IERlbGV0ZUNvbW1hbmRQYXlsb2FkVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG5cdGdldFBheWxvYWQoKTogbnVtYmVyIHwgT3JpZ2luSWQgfCBBcnJheTxudW1iZXI+IHwgQXJyYXk8T3JpZ2luSWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2FkO1xuXHR9XG5cbn1cbiJdfQ==