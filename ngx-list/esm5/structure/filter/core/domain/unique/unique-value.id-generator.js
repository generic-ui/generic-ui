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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvdW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxEO0lBQUE7SUFXQSxDQUFDOzs7O0lBUE8sK0JBQVE7OztJQUFmO1FBRUMsc0JBQXNCLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVsQyxPQUFPLElBQUksYUFBYSxDQUFDLEtBQUcsc0JBQXNCLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQVBNLDRCQUFLLEdBQUcsQ0FBQyxDQUFDO0lBU2xCLDZCQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksc0JBQXNCOzs7SUFFbEMsNkJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3Ige1xuXG5cdHN0YXRpYyBpbmRleCA9IDA7XG5cblx0c3RhdGljIGdlbmVyYXRlKCk6IFVuaXF1ZVZhbHVlSWQge1xuXG5cdFx0VW5pcXVlVmFsdWVJZEdlbmVyYXRvci5pbmRleCArPSAxO1xuXG5cdFx0cmV0dXJuIG5ldyBVbmlxdWVWYWx1ZUlkKGAke1VuaXF1ZVZhbHVlSWRHZW5lcmF0b3IuaW5kZXh9YCk7XG5cdH1cblxufVxuIl19