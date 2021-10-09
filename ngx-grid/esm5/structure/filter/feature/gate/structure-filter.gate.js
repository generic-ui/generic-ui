/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
var StructureFilterGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureFilterGate, _super);
    function StructureFilterGate(structureId, structureCommandInvoker) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.structureCommandInvoker = structureCommandInvoker;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureFilterGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('filtering', changes)) {
            /** @type {?} */
            var filtering = void 0;
            if (typeof this.filtering === 'boolean') {
                filtering = {
                    enabled: this.filtering
                };
            }
            else {
                filtering = this.filtering;
            }
            this.structureCommandInvoker.setFilterConfig(filtering, this.structureId);
        }
    };
    StructureFilterGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[filtering]'
                },] }
    ];
    /** @nocollapse */
    StructureFilterGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureCommandInvoker }
    ]; };
    StructureFilterGate.propDecorators = {
        filtering: [{ type: Input }]
    };
    return StructureFilterGate;
}(Gate));
export { StructureFilterGate };
if (false) {
    /** @type {?} */
    StructureFilterGate.prototype.filtering;
    /**
     * @type {?}
     * @private
     */
    StructureFilterGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureFilterGate.prototype.structureCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtZmlsdGVyLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdEO0lBR3lDLCtDQUFJO0lBSzVDLDZCQUE2QixXQUF3QixFQUNqQyx1QkFBZ0Q7UUFEcEUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7O0lBRXBFLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXVDO1FBRWxELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7O2dCQUVyQyxTQUFTLFNBQWM7WUFFM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxTQUFTLEdBQUc7b0JBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUN2QixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0I7WUFFRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUU7SUFFRixDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3BDOzs7O2dCQUpRLFdBQVc7Z0JBRFgsdUJBQXVCOzs7NEJBUTlCLEtBQUs7O0lBMkJQLDBCQUFDO0NBQUEsQUFoQ0QsQ0FHeUMsSUFBSSxHQTZCNUM7U0E3QlksbUJBQW1COzs7SUFFL0Isd0NBQ2tDOzs7OztJQUV0QiwwQ0FBeUM7Ozs7O0lBQ2xELHNEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtmaWx0ZXJpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlRmlsdGVyR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnZmlsdGVyaW5nJywgY2hhbmdlcykpIHtcblxuXHRcdFx0bGV0IGZpbHRlcmluZzogRmlsdGVyQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuZmlsdGVyaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZmlsdGVyaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaWx0ZXJpbmcgPSB0aGlzLmZpbHRlcmluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRGaWx0ZXJDb25maWcoZmlsdGVyaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=