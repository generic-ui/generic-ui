/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UniqueValueId } from './unique-value-id';
export class UniqueValueIdGenerator {
    /**
     * @return {?}
     */
    static generate() {
        UniqueValueIdGenerator.index += 1;
        return new UniqueValueId(`${UniqueValueIdGenerator.index}`);
    }
}
UniqueValueIdGenerator.index = 0;
if (false) {
    /** @type {?} */
    UniqueValueIdGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS5pZC1nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBSWxDLE1BQU0sQ0FBQyxRQUFRO1FBRWQsc0JBQXNCLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVsQyxPQUFPLElBQUksYUFBYSxDQUFDLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDOztBQVBNLDRCQUFLLEdBQUcsQ0FBQyxDQUFDOzs7SUFBakIsNkJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3Ige1xuXG5cdHN0YXRpYyBpbmRleCA9IDA7XG5cblx0c3RhdGljIGdlbmVyYXRlKCk6IFVuaXF1ZVZhbHVlSWQge1xuXG5cdFx0VW5pcXVlVmFsdWVJZEdlbmVyYXRvci5pbmRleCArPSAxO1xuXG5cdFx0cmV0dXJuIG5ldyBVbmlxdWVWYWx1ZUlkKGAke1VuaXF1ZVZhbHVlSWRHZW5lcmF0b3IuaW5kZXh9YCk7XG5cdH1cblxufVxuIl19