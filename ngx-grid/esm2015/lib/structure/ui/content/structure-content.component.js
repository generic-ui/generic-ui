/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
export class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationQueryService
     */
    constructor(platformId, renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService) {
        super();
        this.platformId = platformId;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationQueryService = formationQueryService;
        this.editMode = false;
        this.cellEditing = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formationQueryService
            .onSelectedRows()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowsList
         * @return {?}
         */
        (rowsList) => {
            this.clearSelectedRows();
            rowsList.getIds().forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                /** @type {?} */
                const strippedId = 'gui' + id.replace(/-/g, '');
                /** @type {?} */
                const selectedRowEl = this.elementRef.nativeElement.querySelector(`#${strippedId}`);
                if (selectedRowEl) {
                    this.renderer.addClass(selectedRowEl, 'selected');
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
        (enabled) => {
            this.editMode = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureCellEditArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.cellEditing = enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    trackByFn() {
        return 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    translateY(index) {
        return `translateY(${index * 30}px)`;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    toggleSelectedRow(entity) {
        this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
    }
    /**
     * @private
     * @return {?}
     */
    clearSelectedRows() {
        /** @type {?} */
        const selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        if (isPlatformBrowser(this.platformId)) {
            selectedElements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                this.renderer.removeClass(el, 'selected');
            }));
        }
    }
}
StructureContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-content',
                template: "<div class=\"gui-content\">\n\n\t<gui-structure-row *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FormationCommandService },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: FormationReadModelService }
];
StructureContentComponent.propDecorators = {
    source: [{ type: Input }],
    columns: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBV2hHLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7Ozs7OztJQVk1RCxZQUF5QyxVQUFlLEVBQzdDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyx1QkFBZ0QsRUFDaEQsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxxQkFBZ0Q7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFSZ0MsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlC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U0FBUztZQUxULFVBQVU7WUFGVixpQkFBaUI7WUFlVCx1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix5QkFBeUI7OztxQkFhaEMsS0FBSztzQkFHTCxLQUFLOzs7O0lBSE4sMkNBQzBCOztJQUUxQiw0Q0FDeUM7O0lBRXpDLDZDQUFpQjs7SUFFakIsZ0RBQW9COzs7OztJQUVSLCtDQUE0Qzs7Ozs7SUFDckQsNkNBQTJCOzs7OztJQUMzQiwrQ0FBOEI7Ozs7O0lBQzlCLHNEQUE0Qzs7Ozs7SUFDNUMsNERBQXdEOzs7OztJQUN4RCw2REFBMEQ7Ozs7O0lBQzFELDZEQUEwRDs7Ozs7SUFDMUQsMERBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSUQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCcsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZm9ybWF0aW9uUXVlcnlTZXJ2aWNlOiBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkUm93cygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93c0xpc3Q6IFNlbGVjdGVkUm93c0xpc3QpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0cm93c0xpc3QuZ2V0SWRzKCkuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RyaXBwZWRJZCA9ICdndWknICsgaWQucmVwbGFjZSgvLS9nLCAnJyksXG5cdFx0XHRcdFx0XHRzZWxlY3RlZFJvd0VsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3RyaXBwZWRJZH1gKTtcblxuXHRcdFx0XHRcdGlmIChzZWxlY3RlZFJvd0VsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNlbGVjdGVkUm93RWwsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIDMwfXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNlbGVjdGVkUm93KChlbnRpdHkgYXMgYW55KS5pZCk7XG5cdH1cblxuXHRwcml2YXRlIGNsZWFyU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goKGVsOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=