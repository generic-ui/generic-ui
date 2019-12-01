/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandService } from '../../app/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationQueryService } from '../../app/formation/formation-query.service';
var StructureContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContentComponent, _super);
    function StructureContentComponent(renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formationCommandService = formationCommandService;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.formationQueryService = formationQueryService;
        _this.editMode = false;
        _this.cellEditing = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formationQueryService
            .selectSelectedRows()
            .subscribe((/**
         * @param {?} rowsList
         * @return {?}
         */
        function (rowsList) {
            _this.clearSelectedRows();
            rowsList.getIds().forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var strippedId = 'gui' + id.replace(/-/g, '');
                /** @type {?} */
                var selectedRowEl = _this.elementRef.nativeElement.querySelector("#" + strippedId);
                if (selectedRowEl) {
                    _this.renderer.addClass(selectedRowEl, 'selected');
                }
            }));
        }));
        this.structureEditModeArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.editMode = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureCellEditArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.cellEditing = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureContentComponent.prototype.trackByFn = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StructureContentComponent.prototype.translateY = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return "translateY(" + index * 30 + "px)";
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    StructureContentComponent.prototype.toggleSelectedRow = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
    };
    /**
     * @private
     * @return {?}
     */
    StructureContentComponent.prototype.clearSelectedRows = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        selectedElements.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            _this.renderer.removeClass(el, 'selected');
        }));
    };
    StructureContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-content',
                    template: "<div class=\"gui-content\">\n\n\t<gui-structure-row *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContentComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FormationCommandService },
        { type: StructureCellEditArchive },
        { type: StructureEditModeArchive },
        { type: FormationQueryService }
    ]; };
    StructureContentComponent.propDecorators = {
        source: [{ type: Input }],
        columns: [{ type: Input }]
    };
    return StructureContentComponent;
}(SmartComponent));
export { StructureContentComponent };
if (false) {
    /** @type {?} */
    StructureContentComponent.prototype.source;
    /** @type {?} */
    StructureContentComponent.prototype.columns;
    /** @type {?} */
    StructureContentComponent.prototype.editMode;
    /** @type {?} */
    StructureContentComponent.prototype.cellEditing;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFLcEY7SUFNK0MscURBQWM7SUFZNUQsbUNBQW9CLFFBQW1CLEVBQzVCLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyx1QkFBZ0QsRUFDaEQsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxxQkFBNEM7UUFOdkQsWUFPQyxpQkFBTyxTQUNQO1FBUm1CLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVnZELGNBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsaUJBQVcsR0FBRyxLQUFLLENBQUM7O0lBVXBCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFBQSxpQkF1Q0M7UUFyQ0EsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixrQkFBa0IsRUFBRTthQUNwQixTQUFTOzs7O1FBQUMsVUFBQyxRQUEwQjtZQUVyQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV6QixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBVTs7b0JBRTlCLFVBQVUsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOztvQkFDOUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFJLFVBQVksQ0FBQztnQkFFOUUsSUFBSSxhQUFhLEVBQUU7b0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDbEQ7WUFDRixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHdCQUF3QjthQUMzQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUMzQixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUMzQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7O0lBRUQsNkNBQVM7OztJQUFUO1FBQ0MsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3ZCLE9BQU8sZ0JBQWMsS0FBSyxHQUFHLEVBQUUsUUFBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQscURBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQWM7UUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVPLHFEQUFpQjs7OztJQUF6QjtRQUFBLGlCQU9DOztZQU5NLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUVwRixnQkFBZ0IsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFPO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQTtJQUVILENBQUM7O2dCQXhGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsNGZBQStDO29CQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQW5CdUUsU0FBUztnQkFBcEMsVUFBVTtnQkFBK0MsaUJBQWlCO2dCQU05Ryx1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4QixxQkFBcUI7Ozt5QkFhNUIsS0FBSzswQkFHTCxLQUFLOztJQStFUCxnQ0FBQztDQUFBLEFBMUZELENBTStDLGNBQWMsR0FvRjVEO1NBcEZZLHlCQUF5Qjs7O0lBRXJDLDJDQUNzQjs7SUFFdEIsNENBQ3lDOztJQUV6Qyw2Q0FBaUI7O0lBRWpCLGdEQUFvQjs7Ozs7SUFFUiw2Q0FBMkI7Ozs7O0lBQ3BDLCtDQUE4Qjs7Ozs7SUFDOUIsc0RBQTRDOzs7OztJQUM1Qyw0REFBd0Q7Ozs7O0lBQ3hELDZEQUEwRDs7Ozs7SUFDMUQsNkRBQTBEOzs7OztJQUMxRCwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9lbnRpdHknO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL2Zvcm1hdGlvbi9mb3JtYXRpb24tY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvblF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9mb3JtYXRpb24vZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vcXVlcnkvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuXG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb250ZW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxFbnRpdHk+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0ZWRpdE1vZGUgPSBmYWxzZTtcblxuXHRjZWxsRWRpdGluZyA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUXVlcnlTZXJ2aWNlOiBGb3JtYXRpb25RdWVyeVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0LnNlbGVjdFNlbGVjdGVkUm93cygpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dzTGlzdDogU2VsZWN0ZWRSb3dzTGlzdCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3RlZFJvd3MoKTtcblxuXHRcdFx0XHRyb3dzTGlzdC5nZXRJZHMoKS5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBzdHJpcHBlZElkID0gJ2d1aScgKyBpZC5yZXBsYWNlKC8tL2csICcnKSxcblx0XHRcdFx0XHRcdHNlbGVjdGVkUm93RWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzdHJpcHBlZElkfWApO1xuXG5cdFx0XHRcdFx0aWYgKHNlbGVjdGVkUm93RWwpIHtcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc2VsZWN0ZWRSb3dFbCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmVcblx0XHRcdC5zZWxlY3QoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5lZGl0TW9kZSA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIDMwfXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEVudGl0eSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UudG9nZ2xlU2VsZWN0ZWRSb3coKGVudGl0eSBhcyBhbnkpLmlkKTtcblx0fVxuXG5cdHByaXZhdGUgY2xlYXJTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRFbGVtZW50cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZCcpO1xuXG5cdFx0c2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCAnc2VsZWN0ZWQnKTtcblx0XHR9KVxuXG5cdH1cblxufVxuIl19