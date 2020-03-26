/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class StructureSorter {
    /**
     * @param {?} id
     * @param {?} field
     * @param {?=} direction
     */
    constructor(id, field, direction = true) {
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.sorterId;
    }
    /**
     * @return {?}
     */
    getRank() {
        return this.rank;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.field;
    }
    /**
     * @return {?}
     */
    hasDirection() {
        return this.direction;
    }
    /**
     * @return {?}
     */
    changeDirection() {
        this.direction = !this.direction;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setDirection(direction) {
        this.direction = direction;
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    sort(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((/**
         * @param {?} entityOne
         * @param {?} entityTwo
         * @return {?}
         */
        (entityOne, entityTwo) => {
            return this.field.sort(entityOne, entityTwo, this.direction);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zdHJ1Y3R1cmUuc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBWTNCLFlBQVksRUFBWSxFQUNyQixLQUFnQixFQUNoQixZQUFxQixJQUFJO1FBTnBCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFPeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxTQUFrQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxRQUFpQztRQUVyQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxRQUFRLENBQUMsSUFBSTs7Ozs7UUFBQyxDQUFDLFNBQTJCLEVBQUUsU0FBMkIsRUFBRSxFQUFFO1lBQ2pGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0NBRUQ7Ozs7OztJQXJEQSxtQ0FBb0M7Ozs7O0lBRXBDLG1DQUF5Qjs7Ozs7SUFFekIsZ0NBQXlCOzs7OztJQUV6QiwrQkFBeUI7Ozs7O0lBRXpCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU29ydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRlcklkOiBTb3J0ZXJJZDtcblxuXHRwcml2YXRlIGNvbHVtbklkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBmaWVsZDogVHlwZUZpZWxkO1xuXG5cdHByaXZhdGUgcmFuazogbnVtYmVyID0gMTtcblxuXHRwcml2YXRlIGRpcmVjdGlvbjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihpZDogU29ydGVySWQsXG5cdFx0XHRcdGZpZWxkOiBUeXBlRmllbGQsXG5cdFx0XHRcdGRpcmVjdGlvbjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHR0aGlzLnNvcnRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0Z2V0SWQoKTogU29ydGVySWQge1xuXHRcdHJldHVybiB0aGlzLnNvcnRlcklkO1xuXHR9XG5cblx0Z2V0UmFuaygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbms7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBUeXBlRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0aGFzRGlyZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdGNoYW5nZURpcmVjdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9ICF0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdHNldERpcmVjdGlvbihkaXJlY3Rpb246IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0fVxuXG5cdHNvcnQoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5zb3J0KChlbnRpdHlPbmU6IE9yaWdpbkl0ZW1FbnRpdHksIGVudGl0eVR3bzogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuc29ydChlbnRpdHlPbmUsIGVudGl0eVR3bywgdGhpcy5kaXJlY3Rpb24pO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==