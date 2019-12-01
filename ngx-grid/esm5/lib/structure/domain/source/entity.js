/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
var Entity = /** @class */ (function () {
    function Entity(data, id, version) {
        if (version === void 0) { version = 0; }
        this.version = 0;
        this.data = data;
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
    Entity.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    /**
     * @return {?}
     */
    Entity.prototype.getUiId = /**
     * @return {?}
     */
    function () {
        return 'gui' + this.id.replace(/-/g, '');
    };
    /**
     * @return {?}
     */
    Entity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    Entity.prototype.getVersion = /**
     * @return {?}
     */
    function () {
        return this.version;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Entity.prototype.equals = /**
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
    Entity.prototype.equalsById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.id === id;
    };
    return Entity;
}());
export { Entity };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.data;
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRDtJQVFDLGdCQUFZLElBQVMsRUFDbEIsRUFBVyxFQUNYLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFKTCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBS3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELHdCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsd0JBQU87OztJQUFQO1FBQ0MsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxzQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDJCQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHVCQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCwyQkFBVTs7OztJQUFWLFVBQVcsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRixhQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQzs7Ozs7OztJQTFDQSxvQkFBNEI7Ozs7O0lBRTVCLHNCQUEyQjs7Ozs7SUFFM0IseUJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YTogYW55O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVyc2lvbjogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBhbnksXG5cdFx0XHRcdGlkPzogc3RyaW5nLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdGlmICghaWQpIHtcblx0XHRcdHRoaXMuaWQgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pZCA9IGlkO1xuXHRcdH1cblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cblx0Z2V0VWlJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpJyArIHRoaXMuaWQucmVwbGFjZSgvLS9nLCAnJyk7XG5cdH1cblxuXHRnZXRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0VmVyc2lvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBFbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pZCA9PT0gZW50aXR5LmlkICYmIHRoaXMuZ2V0VmVyc2lvbigpID09PSBlbnRpdHkuZ2V0VmVyc2lvbigpO1xuXHR9XG5cblx0ZXF1YWxzQnlJZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGlkO1xuXHR9XG5cbn1cbiJdfQ==