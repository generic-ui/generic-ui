/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Dictionary {
    constructor() {
        this.resolver = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => value);
        this.translation = new Map();
    }
    /**
     * @param {?} change
     * @return {?}
     */
    changeTranslation(change) {
        for (const key of Object.keys(change)) {
            this.translation.set(key, change[key]);
        }
    }
    /**
     * @return {?}
     */
    getTranslation() {
        return (/** @type {?} */ (Array.from(this.translation)
            .reduce((/**
         * @param {?} obj
         * @param {?} __1
         * @return {?}
         */
        (obj, [key, value]) => (Object.assign(obj, { [key]: this.resolver(key, value) }))), {})));
    }
    /**
     * @param {?} resolver
     * @return {?}
     */
    setResolver(resolver) {
        this.resolver = resolver;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Dictionary.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    Dictionary.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibDEwbi9jb3JlL2RvbWFpbi9kaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8sVUFBVTtJQUF2QjtRQUVTLGFBQVE7Ozs7O1FBQTJDLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFDO1FBRWhGLGdCQUFXLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO0lBbUIvRSxDQUFDOzs7OztJQWpCQSxpQkFBaUIsQ0FBQyxNQUF1QztRQUN4RCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLG1CQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQixNQUFNOzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUN4RCxHQUFFLEVBQUUsQ0FBQyxFQUFlLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0Q7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztDQUVEOzs7Ozs7SUFyQkEsOEJBQWlHOzs7OztJQUVqRyxpQ0FBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGlvbkNoYW5nZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG5cblx0cHJpdmF0ZSByZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb246IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdGNoYW5nZVRyYW5zbGF0aW9uKGNoYW5nZTogVHJhbnNsYXRpb25DaGFuZ2UgfCBUcmFuc2xhdGlvbik6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNoYW5nZSkpIHtcblx0XHRcdHRoaXMudHJhbnNsYXRpb24uc2V0KGtleSwgY2hhbmdlW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdGdldFRyYW5zbGF0aW9uKCk6IFRyYW5zbGF0aW9uIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnRyYW5zbGF0aW9uKVxuXHRcdFx0XHRcdC5yZWR1Y2UoKG9iaiwgW2tleSwgdmFsdWVdKSA9PiAoXG5cdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKG9iaiwgeyBba2V5XTogdGhpcy5yZXNvbHZlcihrZXksIHZhbHVlKSB9KVxuXHRcdFx0XHRcdCksIHt9KSBhcyBUcmFuc2xhdGlvbjtcblx0fVxuXG5cdHNldFJlc29sdmVyKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0fVxuXG59XG4iXX0=