/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
var ItemEntity = /** @class */ (function () {
    function ItemEntity(source, position, id, version) {
        if (version === void 0) { version = 0; }
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
    ItemEntity.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.source;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getUiId = /**
     * @return {?}
     */
    function () {
        return 'gui' + this.id.replace(/-/g, '');
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getVersion = /**
     * @return {?}
     */
    function () {
        return this.version;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this.position;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.isSelected = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.isEven = /**
     * @return {?}
     */
    function () {
        return this.position % 2 === 0;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.isOdd = /**
     * @return {?}
     */
    function () {
        return this.position % 2 === 1;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ItemEntity.prototype.equals = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ItemEntity.prototype.equalsById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.id === id;
    };
    return ItemEntity;
}());
export { ItemEntity };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRDtJQVVDLG9CQUFZLE1BQVcsRUFDcEIsUUFBZ0IsRUFDaEIsRUFBVyxFQUNYLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFMTCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBTXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELDRCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsNEJBQU87OztJQUFQO1FBQ0MsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCwwQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELCtCQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsZ0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwrQkFBVTs7O0lBQVY7UUFDQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCwyQkFBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMEJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwyQkFBTTs7OztJQUFOLFVBQU8sTUFBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELCtCQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQzs7Ozs7OztJQTlEQSx3QkFBNEI7Ozs7O0lBRTVCLDRCQUE2Qjs7Ozs7SUFFN0IsOEJBQWtDOzs7OztJQUVsQyw2QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJzaW9uOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHRpZD86IHN0cmluZyxcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdGlmICghaWQpIHtcblx0XHRcdHRoaXMuaWQgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pZCA9IGlkO1xuXHRcdH1cblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRnZXRVaUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWknICsgdGhpcy5pZC5yZXBsYWNlKC8tL2csICcnKTtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlzRXZlbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiAlIDIgPT09IDA7XG5cdH1cblxuXHRpc09kZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiAlIDIgPT09IDE7XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBJdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGVudGl0eS5pZCAmJiB0aGlzLmdldFZlcnNpb24oKSA9PT0gZW50aXR5LmdldFZlcnNpb24oKTtcblx0fVxuXG5cdGVxdWFsc0J5SWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBpZDtcblx0fVxuXG59XG4iXX0=