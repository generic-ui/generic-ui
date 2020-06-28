/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UniqueValueId } from './unique-value-id';
var UniqueValueIdGenerator = /** @class */ (function () {
    function UniqueValueIdGenerator() {
    }
    /**
     * @return {?}
     */
    UniqueValueIdGenerator.generate = /**
     * @return {?}
     */
    function () {
        UniqueValueIdGenerator.index += 1;
        return new UniqueValueId("" + UniqueValueIdGenerator.index);
    };
    UniqueValueIdGenerator.index = 0;
    return UniqueValueIdGenerator;
}());
export { UniqueValueIdGenerator };
if (false) {
    /** @type {?} */
    UniqueValueIdGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS5pZC1nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRDtJQUFBO0lBV0EsQ0FBQzs7OztJQVBPLCtCQUFROzs7SUFBZjtRQUVDLHNCQUFzQixDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFbEMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxLQUFHLHNCQUFzQixDQUFDLEtBQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFQTSw0QkFBSyxHQUFHLENBQUMsQ0FBQztJQVNsQiw2QkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLHNCQUFzQjs7O0lBRWxDLDZCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUlkR2VuZXJhdG9yIHtcblxuXHRzdGF0aWMgaW5kZXggPSAwO1xuXG5cdHN0YXRpYyBnZW5lcmF0ZSgpOiBVbmlxdWVWYWx1ZUlkIHtcblxuXHRcdFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3IuaW5kZXggKz0gMTtcblxuXHRcdHJldHVybiBuZXcgVW5pcXVlVmFsdWVJZChgJHtVbmlxdWVWYWx1ZUlkR2VuZXJhdG9yLmluZGV4fWApO1xuXHR9XG5cbn1cbiJdfQ==