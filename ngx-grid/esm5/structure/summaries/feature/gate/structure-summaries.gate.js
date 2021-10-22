/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { SummariesCommandInvoker } from '../../core/api/summaries.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
var StructureSummariesGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesGate, _super);
    function StructureSummariesGate(structureId, summariesCommandInvoker) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.summariesCommandInvoker = summariesCommandInvoker;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureSummariesGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('summaries', changes)) {
            this.summariesCommandInvoker.setConfig(this.summaries, this.structureId);
        }
    };
    StructureSummariesGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[summaries]'
                },] }
    ];
    /** @nocollapse */
    StructureSummariesGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: SummariesCommandInvoker }
    ]; };
    StructureSummariesGate.propDecorators = {
        summaries: [{ type: Input }]
    };
    return StructureSummariesGate;
}(Gate));
export { StructureSummariesGate };
if (false) {
    /** @type {?} */
    StructureSummariesGate.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.summariesCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzdEO0lBRzRDLGtEQUFJO0lBSy9DLGdDQUE2QixXQUF3QixFQUNqQyx1QkFBZ0Q7UUFEcEUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7O0lBRXBFLENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6RTtJQUVGLENBQUM7O2dCQW5CRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBTFEsV0FBVztnQkFEWCx1QkFBdUI7Ozs0QkFTOUIsS0FBSzs7SUFnQlAsNkJBQUM7Q0FBQSxBQXJCRCxDQUc0QyxJQUFJLEdBa0IvQztTQWxCWSxzQkFBc0I7OztJQUVsQywyQ0FDMkI7Ozs7O0lBRWYsNkNBQXlDOzs7OztJQUNsRCx5REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3VtbWFyaWVzLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtzdW1tYXJpZXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0c3VtbWFyaWVzOiBTdW1tYXJpZXNDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVTdW1tYXJpZXNHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzdW1tYXJpZXMnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlci5zZXRDb25maWcodGhpcy5zdW1tYXJpZXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==