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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs1QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsTUFBZ0I7Ozs7Ozs7SUFRckQsWUFBWSxFQUFZLEVBQ3JCLE9BQVksRUFDWixRQUFnQixFQUNoQixVQUFrQixDQUFDO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELEtBQUs7O2NBRUUsT0FBTyxxQkFBUSxJQUFJLENBQUMsT0FBTyxDQUFFO1FBRW5DLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBRUQ7OztJQTNDQSxtQ0FBYTs7Ozs7SUFFYixtQ0FBd0I7Ozs7O0lBRXhCLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi9vcmlnaW4taWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBPcmlnaW5JdGVtRW50aXR5IGV4dGVuZHMgRW50aXR5PE9yaWdpbklkPiB7XG5cblx0cmF3RGF0YTogYW55OyAvLyB0T0RPXG5cblx0cHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBPcmlnaW5JZCxcblx0XHRcdFx0cmF3RGF0YTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHRcdHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmF3RGF0YTtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG5cdGJ1bXBWZXJzaW9uKCk6IHZvaWQge1xuXHRcdHRoaXMudmVyc2lvbiArPSAxO1xuXHR9XG5cblx0c2V0UG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0fVxuXG5cdGNsb25lKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXG5cdFx0Y29uc3QgcmF3RGF0YSA9IHsgLi4udGhpcy5yYXdEYXRhIH07XG5cblx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkodGhpcy5nZXRJZCgpLCByYXdEYXRhLCB0aGlzLnZlcnNpb24pO1xuXHR9XG5cbn1cbiJdfQ==