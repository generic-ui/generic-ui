/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Entity } from '@generic-ui/hermes';
export class OriginItemEntity extends Entity {
    /**
     * @param {?} id
     * @param {?} rawData
     * @param {?} position
     * @param {?=} version
     */
    constructor(id, rawData, position, version = 0) {
        super(id);
        this.rawData = rawData;
        this.position = position;
        this.version = version;
    }
    /**
     * @return {?}
     */
    getData() {
        return this.rawData;
    }
    /**
     * @return {?}
     */
    getVersion() {
        return this.version;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
    /**
     * @return {?}
     */
    bumpVersion() {
        this.version += 1;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        this.position = position;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const rawData = Object.assign({}, this.rawData);
        return new OriginItemEntity(this.getId(), rawData, this.version);
    }
}
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.rawData;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.version;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzVDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxNQUFnQjs7Ozs7OztJQVFyRCxZQUFZLEVBQVksRUFDckIsT0FBWSxFQUNaLFFBQWdCLEVBQ2hCLFVBQWtCLENBQUM7UUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsS0FBSzs7Y0FFRSxPQUFPLHFCQUFRLElBQUksQ0FBQyxPQUFPLENBQUU7UUFFbkMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FFRDs7O0lBM0NBLG1DQUFhOzs7OztJQUViLG1DQUF3Qjs7Ozs7SUFFeEIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuL29yaWdpbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIE9yaWdpbkl0ZW1FbnRpdHkgZXh0ZW5kcyBFbnRpdHk8T3JpZ2luSWQ+IHtcblxuXHRyYXdEYXRhOiBhbnk7IC8vIHRPRE9cblxuXHRwcml2YXRlIHZlcnNpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoaWQ6IE9yaWdpbklkLFxuXHRcdFx0XHRyYXdEYXRhOiBhbnksXG5cdFx0XHRcdHBvc2l0aW9uOiBudW1iZXIsXG5cdFx0XHRcdHZlcnNpb246IG51bWJlciA9IDApIHtcblx0XHRzdXBlcihpZCk7XG5cdFx0dGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yYXdEYXRhO1xuXHR9XG5cblx0Z2V0VmVyc2lvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uO1xuXHR9XG5cblx0YnVtcFZlcnNpb24oKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJzaW9uICs9IDE7XG5cdH1cblxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHR9XG5cblx0Y2xvbmUoKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cblx0XHRjb25zdCByYXdEYXRhID0geyAuLi50aGlzLnJhd0RhdGEgfTtcblxuXHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eSh0aGlzLmdldElkKCksIHJhd0RhdGEsIHRoaXMudmVyc2lvbik7XG5cdH1cblxufVxuIl19