/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
export class ItemEntity {
    /**
     * @param {?} source
     * @param {?} position
     * @param {?=} id
     * @param {?=} version
     */
    constructor(source, position, id, version = 0) {
        this.version = 0;
        this.source = source;
        this.position = position;
        this.version = version;
        if (!id) {
            this.id = RandomStringGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    /**
     * @return {?}
     */
    getData() {
        return this.source;
    }
    /**
     * @return {?}
     */
    getUiId() {
        return 'gui' + this.id.replace(/-/g, '');
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
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
    isSelected() {
        return false;
    }
    /**
     * @return {?}
     */
    isEven() {
        return this.position % 2 === 0;
    }
    /**
     * @return {?}
     */
    isOdd() {
        return this.position % 2 === 1;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    equals(entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    equalsById(id) {
        return this.id === id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.source;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.position;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxNQUFNLE9BQU8sVUFBVTs7Ozs7OztJQVV0QixZQUFZLE1BQVcsRUFDcEIsUUFBZ0IsRUFDaEIsRUFBVyxFQUNYLFVBQWtCLENBQUM7UUFMTCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBTXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBRUQ7Ozs7OztJQTlEQSx3QkFBNEI7Ozs7O0lBRTVCLDRCQUE2Qjs7Ozs7SUFFN0IsOEJBQWtDOzs7OztJQUVsQyw2QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJzaW9uOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHRpZD86IHN0cmluZyxcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdGlmICghaWQpIHtcblx0XHRcdHRoaXMuaWQgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pZCA9IGlkO1xuXHRcdH1cblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRnZXRVaUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWknICsgdGhpcy5pZC5yZXBsYWNlKC8tL2csICcnKTtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlzRXZlbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiAlIDIgPT09IDA7XG5cdH1cblxuXHRpc09kZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiAlIDIgPT09IDE7XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBJdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGVudGl0eS5pZCAmJiB0aGlzLmdldFZlcnNpb24oKSA9PT0gZW50aXR5LmdldFZlcnNpb24oKTtcblx0fVxuXG5cdGVxdWFsc0J5SWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBpZDtcblx0fVxuXG59XG4iXX0=