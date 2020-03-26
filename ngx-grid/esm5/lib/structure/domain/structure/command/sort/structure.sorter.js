/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSorter = /** @class */ (function () {
    function StructureSorter(id, field, direction) {
        if (direction === void 0) { direction = true; }
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    StructureSorter.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.sorterId;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getRank = /**
     * @return {?}
     */
    function () {
        return this.rank;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.field;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.hasDirection = /**
     * @return {?}
     */
    function () {
        return this.direction;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.changeDirection = /**
     * @return {?}
     */
    function () {
        this.direction = !this.direction;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    StructureSorter.prototype.setDirection = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.direction = direction;
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    StructureSorter.prototype.sort = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((/**
         * @param {?} entityOne
         * @param {?} entityTwo
         * @return {?}
         */
        function (entityOne, entityTwo) {
            return _this.field.sort(entityOne, entityTwo, _this.direction);
        }));
    };
    return StructureSorter;
}());
export { StructureSorter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.sorterId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.rank;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zdHJ1Y3R1cmUuc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtJQVlDLHlCQUFZLEVBQVksRUFDckIsS0FBZ0IsRUFDaEIsU0FBeUI7UUFBekIsMEJBQUEsRUFBQSxnQkFBeUI7UUFOcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQU94QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCx5Q0FBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELHNDQUFZOzs7O0lBQVosVUFBYSxTQUFrQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELDhCQUFJOzs7O0lBQUosVUFBSyxRQUFpQztRQUF0QyxpQkFTQztRQVBBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsU0FBMkIsRUFBRSxTQUEyQjtZQUM3RSxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7Ozs7OztJQXJEQSxtQ0FBb0M7Ozs7O0lBRXBDLG1DQUF5Qjs7Ozs7SUFFekIsZ0NBQXlCOzs7OztJQUV6QiwrQkFBeUI7Ozs7O0lBRXpCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU29ydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRlcklkOiBTb3J0ZXJJZDtcblxuXHRwcml2YXRlIGNvbHVtbklkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBmaWVsZDogVHlwZUZpZWxkO1xuXG5cdHByaXZhdGUgcmFuazogbnVtYmVyID0gMTtcblxuXHRwcml2YXRlIGRpcmVjdGlvbjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihpZDogU29ydGVySWQsXG5cdFx0XHRcdGZpZWxkOiBUeXBlRmllbGQsXG5cdFx0XHRcdGRpcmVjdGlvbjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHR0aGlzLnNvcnRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0Z2V0SWQoKTogU29ydGVySWQge1xuXHRcdHJldHVybiB0aGlzLnNvcnRlcklkO1xuXHR9XG5cblx0Z2V0UmFuaygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbms7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBUeXBlRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0aGFzRGlyZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdGNoYW5nZURpcmVjdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9ICF0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdHNldERpcmVjdGlvbihkaXJlY3Rpb246IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0fVxuXG5cdHNvcnQoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5zb3J0KChlbnRpdHlPbmU6IE9yaWdpbkl0ZW1FbnRpdHksIGVudGl0eVR3bzogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuc29ydChlbnRpdHlPbmUsIGVudGl0eVR3bywgdGhpcy5kaXJlY3Rpb24pO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==