/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Dictionary {
    constructor() {
        this.translation = new Map();
        this.resolver = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => value);
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
    Dictionary.prototype.translation;
    /**
     * @type {?}
     * @private
     */
    Dictionary.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibDEwbi9jb3JlL2RvbWFpbi9kaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8sVUFBVTtJQUF2QjtRQUVrQixnQkFBVyxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUV0RSxhQUFROzs7OztRQUEyQyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBQztJQW1CbEcsQ0FBQzs7Ozs7SUFqQkEsaUJBQWlCLENBQUMsTUFBdUM7UUFDeEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxtQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDL0IsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDeEQsR0FBRSxFQUFFLENBQUMsRUFBZSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWdEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Q0FFRDs7Ozs7O0lBckJBLGlDQUE4RTs7Ozs7SUFFOUUsOEJBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24tY2hhbmdlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uJztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb246IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZTtcblxuXHRjaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlIHwgVHJhbnNsYXRpb24pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjaGFuZ2UpKSB7XG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uLnNldChrZXksIGNoYW5nZVtrZXldKTtcblx0XHR9XG5cdH1cblxuXHRnZXRUcmFuc2xhdGlvbigpOiBUcmFuc2xhdGlvbiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy50cmFuc2xhdGlvbilcblx0XHRcdFx0XHQucmVkdWNlKChvYmosIFtrZXksIHZhbHVlXSkgPT4gKFxuXHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihvYmosIHsgW2tleV06IHRoaXMucmVzb2x2ZXIoa2V5LCB2YWx1ZSkgfSlcblx0XHRcdFx0XHQpLCB7fSkgYXMgVHJhbnNsYXRpb247XG5cdH1cblxuXHRzZXRSZXNvbHZlcihyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdH1cblxufVxuIl19