/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../composition/domain/read/edit/changed-value.emitter';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { StructureId } from '../../../domain/structure-id';
var StructureHeaderFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderFilterComponent, _super);
    function StructureHeaderFilterComponent(structureFilterCommandService, structureId) {
        var _this = _super.call(this) || this;
        _this.structureFilterCommandService = structureFilterCommandService;
        _this.structureId = structureId;
        _this.sub = new ChangedValueEmitter();
        _this.editContext = {
            changes: _this.sub
        };
        return _this;
    }
    /**
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub
            .select()
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) { return _this.filter(phrase); }));
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.filter = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    };
    StructureHeaderFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-filter',
                    template: "\n\t\t\n<!--\t\t<ng-container-->\n<!--\t\t\t\t*ngTemplateOutlet=\"column.editTemplate; context: editContext\">-->\n<!--\t\t</ng-container>-->\n\t\t\n\t\t<button gui-button [primary]=\"true\" >Add Filter</button>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFilterComponent.ctorParameters = function () { return [
        { type: StructureFilterCommandService },
        { type: StructureId }
    ]; };
    StructureHeaderFilterComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureHeaderFilterComponent;
}(SmartComponent));
export { StructureHeaderFilterComponent };
if (false) {
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.column;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.sub;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.editContext;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDbEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSTNEO0lBY29ELDBEQUFjO0lBU2pFLHdDQUFvQiw2QkFBNEQsRUFDckUsV0FBd0I7UUFEbkMsWUFFQyxpQkFBTyxTQUtQO1FBUG1CLG1DQUE2QixHQUE3Qiw2QkFBNkIsQ0FBK0I7UUFDckUsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFMbkMsU0FBRyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQVEvQixLQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxLQUFJLENBQUMsR0FBRztTQUNqQixDQUFBOztJQUNGLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxHQUFHO2FBQ04sTUFBTSxFQUFFO2FBQ1IsU0FBUzs7OztRQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsK0NBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7O2dCQXhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFLDJOQVFUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBbEJRLDZCQUE2QjtnQkFDN0IsV0FBVzs7O3lCQW9CbEIsS0FBSzs7SUEwQlAscUNBQUM7Q0FBQSxBQTFDRCxDQWNvRCxjQUFjLEdBNEJqRTtTQTVCWSw4QkFBOEI7OztJQUUxQyxnREFDZ0M7O0lBRWhDLDZDQUFnQzs7SUFFaEMscURBQWlCOzs7OztJQUVMLHVFQUFvRTs7Ozs7SUFDN0UscURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIuY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5cblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFxuPCEtLVx0XHQ8bmctY29udGFpbmVyLS0+XG48IS0tXHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi5lZGl0VGVtcGxhdGU7IGNvbnRleHQ6IGVkaXRDb250ZXh0XCI+LS0+XG48IS0tXHRcdDwvbmctY29udGFpbmVyPi0tPlxuXHRcdFxuXHRcdDxidXR0b24gZ3VpLWJ1dHRvbiBbcHJpbWFyeV09XCJ0cnVlXCIgPkFkZCBGaWx0ZXI8L2J1dHRvbj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRzdWIgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRjaGFuZ2VzOiB0aGlzLnN1YlxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3ViXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB0aGlzLmZpbHRlcihwaHJhc2UpKTtcblx0fVxuXG5cdGZpbHRlcihwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UuYWRkRmlsdGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgJzEnLCBwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==