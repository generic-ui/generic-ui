/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
export class ListViewGateway {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} sourceCommandService
     */
    constructor(structureId, sourceCommandService) {
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        /**
         * Setting source should be last step
         */
        if (simpleChanges.items) {
            this.sourceCommandService.setOrigin(this.items, this.structureId);
        }
    }
}
ListViewGateway.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListViewGateway.prototype.items;
    /** @type {?} */
    ListViewGateway.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    ListViewGateway.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9saXN0LXZpZXcuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7QUFNaEUsTUFBTSxPQUFnQixlQUFlOzs7Ozs7SUFLcEMsWUFDaUIsV0FBd0IsRUFDckIsb0JBQTZDO1FBRGhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7SUFFakUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBNEI7UUFFdkM7O1dBRUc7UUFDSCxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7OztvQkFqQkEsS0FBSzs7OztJQUFOLGdDQUNrQjs7SUFHakIsc0NBQXdDOzs7OztJQUN4QywrQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGlzdFZpZXdHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyXG5cdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLml0ZW1zKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLml0ZW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==