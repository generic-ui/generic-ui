/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { StructureSummariesConfigService } from '../../panel/summaries/structure.summaries-config.service';
export class StructureSummariesGate extends Gate {
    /**
     * @param {?} structureSummariesConfigService
     */
    constructor(structureSummariesConfigService) {
        super();
        this.structureSummariesConfigService = structureSummariesConfigService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('summaries', changes)) {
            this.structureSummariesConfigService.set(this.summaries);
        }
    }
}
StructureSummariesGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[summaries]'
            },] }
];
/** @nocollapse */
StructureSummariesGate.ctorParameters = () => [
    { type: StructureSummariesConfigService }
];
StructureSummariesGate.propDecorators = {
    summaries: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureSummariesGate.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.structureSummariesConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBTTNHLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJOzs7O0lBSy9DLFlBQTZCLCtCQUFnRTtRQUM1RixLQUFLLEVBQUUsQ0FBQztRQURvQixvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBRTdGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekQ7SUFFRixDQUFDOzs7WUFsQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7Ozs7WUFMUSwrQkFBK0I7Ozt3QkFRdEMsS0FBSzs7OztJQUFOLDJDQUMyQjs7Ozs7SUFFZixpRUFBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvYXBpL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3N1bW1hcmllc10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IFN1bW1hcmllc0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVN1bW1hcmllc0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3N1bW1hcmllcycsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=