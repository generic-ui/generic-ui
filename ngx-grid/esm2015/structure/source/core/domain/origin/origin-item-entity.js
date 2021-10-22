/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Entity } from '@generic-ui/hermes';
export class OriginItemEntity extends Entity {
    /**
     * @param {?} id
     * @param {?} sourceItem
     * @param {?} position
     * @param {?=} version
     */
    constructor(id, sourceItem, position, version = 0) {
        super(id);
        this.sourceItem = sourceItem;
        this.position = position;
        this.version = version;
    }
    /**
     * @return {?}
     */
    getSourceItem() {
        return this.sourceItem;
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
        const rawData = Object.assign({}, this.sourceItem);
        return new OriginItemEntity(this.getId(), rawData, this.version);
    }
}
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.sourceItem;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs1QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsTUFBZ0I7Ozs7Ozs7SUFRckQsWUFBWSxFQUFZLEVBQ3JCLFVBQWUsRUFDZixRQUFnQixFQUNoQixVQUFrQixDQUFDO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELEtBQUs7O2NBRUUsT0FBTyxxQkFBUSxJQUFJLENBQUMsVUFBVSxDQUFFO1FBRXRDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBRUQ7OztJQTNDQSxzQ0FBZ0I7Ozs7O0lBRWhCLG1DQUF3Qjs7Ozs7SUFFeEIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuL29yaWdpbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIE9yaWdpbkl0ZW1FbnRpdHkgZXh0ZW5kcyBFbnRpdHk8T3JpZ2luSWQ+IHtcblxuXHRzb3VyY2VJdGVtOiBhbnk7IC8vIHRPRE9cblxuXHRwcml2YXRlIHZlcnNpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoaWQ6IE9yaWdpbklkLFxuXHRcdFx0XHRzb3VyY2VJdGVtOiBhbnksXG5cdFx0XHRcdHBvc2l0aW9uOiBudW1iZXIsXG5cdFx0XHRcdHZlcnNpb246IG51bWJlciA9IDApIHtcblx0XHRzdXBlcihpZCk7XG5cdFx0dGhpcy5zb3VyY2VJdGVtID0gc291cmNlSXRlbTtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0fVxuXG5cdGdldFNvdXJjZUl0ZW0oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VJdGVtO1xuXHR9XG5cblx0Z2V0VmVyc2lvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uO1xuXHR9XG5cblx0YnVtcFZlcnNpb24oKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJzaW9uICs9IDE7XG5cdH1cblxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHR9XG5cblx0Y2xvbmUoKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cblx0XHRjb25zdCByYXdEYXRhID0geyAuLi50aGlzLnNvdXJjZUl0ZW0gfTtcblxuXHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eSh0aGlzLmdldElkKCksIHJhd0RhdGEsIHRoaXMudmVyc2lvbik7XG5cdH1cblxufVxuIl19