/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../domain/composition/query/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../domain/composition/query/edit/changed-value.emitter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDbEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbkcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDbEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSTNEO0lBY29ELDBEQUFjO0lBU2pFLHdDQUFvQiw2QkFBNEQsRUFDckUsV0FBd0I7UUFEbkMsWUFFQyxpQkFBTyxTQUtQO1FBUG1CLG1DQUE2QixHQUE3Qiw2QkFBNkIsQ0FBK0I7UUFDckUsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFMbkMsU0FBRyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQVEvQixLQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxLQUFJLENBQUMsR0FBRztTQUNqQixDQUFBOztJQUNGLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxHQUFHO2FBQ04sTUFBTSxFQUFFO2FBQ1IsU0FBUzs7OztRQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsK0NBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7O2dCQXhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFLDJOQVFUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBbEJRLDZCQUE2QjtnQkFDN0IsV0FBVzs7O3lCQW9CbEIsS0FBSzs7SUEwQlAscUNBQUM7Q0FBQSxBQTFDRCxDQWNvRCxjQUFjLEdBNEJqRTtTQTVCWSw4QkFBOEI7OztJQUUxQyxnREFDZ0M7O0lBRWhDLDZDQUFnQzs7SUFFaEMscURBQWlCOzs7OztJQUVMLHVFQUFvRTs7Ozs7SUFDN0UscURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcblxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0XG48IS0tXHRcdDxuZy1jb250YWluZXItLT5cbjwhLS1cdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLmVkaXRUZW1wbGF0ZTsgY29udGV4dDogZWRpdENvbnRleHRcIj4tLT5cbjwhLS1cdFx0PC9uZy1jb250YWluZXI+LS0+XG5cdFx0XG5cdFx0PGJ1dHRvbiBndWktYnV0dG9uIFtwcmltYXJ5XT1cInRydWVcIiA+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHN1YiA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdGNoYW5nZXM6IHRoaXMuc3ViXG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdWJcblx0XHRcdC5zZWxlY3QoKVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKHBocmFzZSkpO1xuXHR9XG5cblx0ZmlsdGVyKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCAnMScsIHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19