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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvcnRpbmcvZG9tYWluL3N0cnVjdHVyZS5zb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFZM0IsWUFBWSxFQUFZLEVBQ3JCLEtBQWdCLEVBQ2hCLFlBQXFCLElBQUk7UUFOcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQU94QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFFBQWlDO1FBRXJDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsU0FBMkIsRUFBRSxTQUEyQixFQUFFLEVBQUU7WUFDakYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRDs7Ozs7O0lBckRBLG1DQUFvQzs7Ozs7SUFFcEMsbUNBQXlCOzs7OztJQUV6QixnQ0FBeUI7Ozs7O0lBRXpCLCtCQUF5Qjs7Ozs7SUFFekIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydGVySWQgfSBmcm9tICcuL3NvcnRlci5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0ZXJJZDogU29ydGVySWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgZmllbGQ6IFR5cGVGaWVsZDtcblxuXHRwcml2YXRlIHJhbms6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBkaXJlY3Rpb246IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaWQ6IFNvcnRlcklkLFxuXHRcdFx0XHRmaWVsZDogVHlwZUZpZWxkLFxuXHRcdFx0XHRkaXJlY3Rpb246IGJvb2xlYW4gPSB0cnVlKSB7XG5cdFx0dGhpcy5zb3J0ZXJJZCA9IGlkO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0fVxuXG5cdGdldElkKCk6IFNvcnRlcklkIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJJZDtcblx0fVxuXG5cdGdldFJhbmsoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5rO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogVHlwZUZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZDtcblx0fVxuXG5cdGhhc0RpcmVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb247XG5cdH1cblxuXHRjaGFuZ2VEaXJlY3Rpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSAhdGhpcy5kaXJlY3Rpb247XG5cdH1cblxuXHRzZXREaXJlY3Rpb24oZGlyZWN0aW9uOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdH1cblxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuc29ydCgoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLnNvcnQoZW50aXR5T25lLCBlbnRpdHlUd28sIHRoaXMuZGlyZWN0aW9uKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=