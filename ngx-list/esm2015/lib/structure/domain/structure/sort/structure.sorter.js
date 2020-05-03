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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3NvcnQvc3RydWN0dXJlLnNvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVkzQixZQUFZLEVBQVksRUFDckIsS0FBZ0IsRUFDaEIsWUFBcUIsSUFBSTtRQU5wQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBa0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsUUFBaUM7UUFFckMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxTQUEyQixFQUFFLFNBQTJCLEVBQUUsRUFBRTtZQUNqRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztDQUVEOzs7Ozs7SUFyREEsbUNBQW9DOzs7OztJQUVwQyxtQ0FBeUI7Ozs7O0lBRXpCLGdDQUF5Qjs7Ozs7SUFFekIsK0JBQXlCOzs7OztJQUV6QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4vc29ydGVyLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3J0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGVySWQ6IFNvcnRlcklkO1xuXG5cdHByaXZhdGUgY29sdW1uSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGZpZWxkOiBUeXBlRmllbGQ7XG5cblx0cHJpdmF0ZSByYW5rOiBudW1iZXIgPSAxO1xuXG5cdHByaXZhdGUgZGlyZWN0aW9uOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBTb3J0ZXJJZCxcblx0XHRcdFx0ZmllbGQ6IFR5cGVGaWVsZCxcblx0XHRcdFx0ZGlyZWN0aW9uOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdHRoaXMuc29ydGVySWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdH1cblxuXHRnZXRJZCgpOiBTb3J0ZXJJZCB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydGVySWQ7XG5cdH1cblxuXHRnZXRSYW5rKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuaztcblx0fVxuXG5cdGdldEZpZWxkKCk6IFR5cGVGaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQ7XG5cdH1cblxuXHRoYXNEaXJlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuXHR9XG5cblx0Y2hhbmdlRGlyZWN0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gIXRoaXMuZGlyZWN0aW9uO1xuXHR9XG5cblx0c2V0RGlyZWN0aW9uKGRpcmVjdGlvbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0c29ydChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLnNvcnQoKGVudGl0eU9uZTogT3JpZ2luSXRlbUVudGl0eSwgZW50aXR5VHdvOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5zb3J0KGVudGl0eU9uZSwgZW50aXR5VHdvLCB0aGlzLmRpcmVjdGlvbik7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19