/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
var StructureContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContentComponent, _super);
    function StructureContentComponent(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
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
            .onSelectedRows()
            .pipe(this.takeUntil())
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
            .onValue()
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
            .onValue()
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
        if (isPlatformBrowser(this.platformId)) {
            selectedElements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                _this.renderer.removeClass(el, 'selected');
            }));
        }
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
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FormationCommandService },
        { type: StructureCellEditArchive },
        { type: StructureEditModeArchive },
        { type: FormationReadModelService }
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
    StructureContentComponent.prototype.platformId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUtoRztJQU0rQyxxREFBYztJQVk1RCxtQ0FBeUMsVUFBZSxFQUM3QyxRQUFtQixFQUNuQixVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsdUJBQWdELEVBQ2hELHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQscUJBQWdEO1FBUDNELFlBUUMsaUJBQU8sU0FDUDtRQVR3QyxnQkFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw4QkFBd0IsR0FBeEIs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O2dCQUxULFVBQVU7Z0JBRlYsaUJBQWlCO2dCQWVULHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLHlCQUF5Qjs7O3lCQWFoQyxLQUFLOzBCQUdMLEtBQUs7O0lBcUZQLGdDQUFDO0NBQUEsQUFoR0QsQ0FNK0MsY0FBYyxHQTBGNUQ7U0ExRlkseUJBQXlCOzs7SUFFckMsMkNBQzBCOztJQUUxQiw0Q0FDeUM7O0lBRXpDLDZDQUFpQjs7SUFFakIsZ0RBQW9COzs7OztJQUVSLCtDQUE0Qzs7Ozs7SUFDckQsNkNBQTJCOzs7OztJQUMzQiwrQ0FBOEI7Ozs7O0lBQzlCLHNEQUE0Qzs7Ozs7SUFDNUMsNERBQXdEOzs7OztJQUN4RCw2REFBMEQ7Ozs7O0lBQzFELDZEQUEwRDs7Ozs7SUFDMUQsMERBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCcsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUXVlcnlTZXJ2aWNlOiBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkUm93cygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93c0xpc3Q6IFNlbGVjdGVkUm93c0xpc3QpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0cm93c0xpc3QuZ2V0SWRzKCkuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0XHRcdFx0XHRzZWxlY3RlZFJvd0VsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3RyaXBwZWRJZH1gKTtcblxuXHRcdFx0XHRcdGlmIChzZWxlY3RlZFJvd0VsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIDMwfXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNlbGVjdGVkUm93KChlbnRpdHkgYXMgYW55KS5pZCk7XG5cdH1cblxuXHRwcml2YXRlIGNsZWFyU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goKGVsOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=