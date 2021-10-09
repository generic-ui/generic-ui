/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FormationCommandInvoker } from '../../../source/core/api/formation/formation.command-invoker';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationWarehouse } from '../../../source/core/api/formation/formation.warehouse';
import { VerticalFormationRepository } from '../../../vertical-formation/core/api/vertical-formation.repository';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { VerticalFormationWarehouse } from '../../../vertical-formation/core/api/vertical-formation.warehouse';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectToggleType } from '../../../source/core/domain/formation/core/row-select-toggle-type';
import { SchemaRowClassArchive } from '../../../../schema/core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../../../schema/core/api/styling/schema.row-style.archive';
import { fromRxJsObservable, toRxJsObservable } from '@generic-ui/hermes';
import { SearchWarehouse } from '../../../search/core/api/search.warehouse';
export class StructureContentComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} formationCommandService
     * @param {?} structureCellEditArchive
     * @param {?} structureEditModeArchive
     * @param {?} formationWarehouse
     * @param {?} structureWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} verticalFormationRepository
     * @param {?} structureId
     * @param {?} rowSelectionTypeArchive
     * @param {?} searchWarehouse
     * @param {?} schemaRowClassArchive
     * @param {?} schemaRowStyleArchive
     */
    constructor(elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationWarehouse, structureWarehouse, structureVerticalFormationWarehouse, verticalFormationRepository, structureId, // REfactor
    rowSelectionTypeArchive, searchWarehouse, schemaRowClassArchive, schemaRowStyleArchive) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.verticalFormationRepository = verticalFormationRepository;
        this.structureId = structureId;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.searchWarehouse = searchWarehouse;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
        this.editMode = false;
        this.cellEditing = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowDetailOpened = 4;
        this.checkboxSelection = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        }));
        this.hermesSubscribe(this.structureEditModeArchive.on(), (/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.editMode = enabled;
        }));
        this.hermesSubscribe(this.structureCellEditArchive.on(), (/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.cellEditing = enabled;
        }));
        this.hermesSubscribe(this.schemaRowClassArchive.on(), (/**
         * @param {?} schemaRowClass
         * @return {?}
         */
        (schemaRowClass) => {
            this.schemaRowClass = schemaRowClass;
        }));
        this.hermesSubscribe(this.schemaRowStyleArchive.on(), (/**
         * @param {?} schemaRowStyle
         * @return {?}
         */
        (schemaRowStyle) => {
            this.schemaRowStyle = schemaRowStyle;
        }));
        this.hermesSubscribe(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            this.rowHeight = rowHeight;
        }));
        this.hermesSubscribe(fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId)))), (/**
         * @param {?} args
         * @return {?}
         */
        (args) => {
            /** @type {?} */
            const searchPhrase = args[0];
            /** @type {?} */
            const highlighting = args[1];
            this.highlighting = highlighting;
            this.searchPhrase = searchPhrase;
            if (!this.highlighting) {
                this.searchPhrase = '';
            }
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
        /** @type {?} */
        const height = index * this.rowHeight;
        return `translateY(${height}px)`;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    toggleSelectedRow(entity) {
        if (!this.checkboxSelection) {
            this.formationCommandService.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-content';
    }
}
StructureContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-content]',
                template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FormationCommandInvoker },
    { type: StructureCellEditArchive },
    { type: StructureEditModeArchive },
    { type: FormationWarehouse },
    { type: StructureWarehouse },
    { type: VerticalFormationWarehouse },
    { type: VerticalFormationRepository },
    { type: StructureId },
    { type: RowSelectionTypeArchive },
    { type: SearchWarehouse },
    { type: SchemaRowClassArchive },
    { type: SchemaRowStyleArchive }
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
    /** @type {?} */
    StructureContentComponent.prototype.rowHeight;
    /** @type {?} */
    StructureContentComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureContentComponent.prototype.highlighting;
    /** @type {?} */
    StructureContentComponent.prototype.phrase;
    /** @type {?} */
    StructureContentComponent.prototype.rowDetailOpened;
    /** @type {?} */
    StructureContentComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureContentComponent.prototype.schemaRowClass;
    /** @type {?} */
    StructureContentComponent.prototype.schemaRowStyle;
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
    StructureContentComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.verticalFormationRepository;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.rowSelectionTypeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.searchWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.schemaRowClassArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.schemaRowStyleArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDdkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxN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RCwwREFBNkQ7Ozs7O0lBQzdELDBEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzc0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZS5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCB0b1J4SnNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb250ZW50XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdGVkaXRNb2RlID0gZmFsc2U7XG5cblx0Y2VsbEVkaXRpbmcgPSBmYWxzZTtcblxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZyA9ICcnO1xuXG5cdGhpZ2hsaWdodGluZzogYm9vbGVhbiA9IHRydWU7XG5cblx0cGhyYXNlOiBib29sZWFuID0gdHJ1ZTtcblxuXHRyb3dEZXRhaWxPcGVuZWQgPSA0O1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2NoZW1hUm93Q2xhc3M6IFNjaGVtYVJvd0NsYXNzO1xuXG5cdHNjaGVtYVJvd1N0eWxlOiBTY2hlbWFSb3dTdHlsZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCAvLyBSRWZhY3RvclxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dDbGFzc0FyY2hpdmU6IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLm9uKCksXG5cdFx0XHQodHlwZTogUm93U2VsZWN0aW9uVHlwZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNoZWNrYm94U2VsZWN0aW9uID0gdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5lZGl0TW9kZSA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUub24oKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2VsbEVkaXRpbmcgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hUm93Q2xhc3NBcmNoaXZlLm9uKCksXG5cdFx0XHQoc2NoZW1hUm93Q2xhc3M6IFNjaGVtYVJvd0NsYXNzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2NoZW1hUm93Q2xhc3MgPSBzY2hlbWFSb3dDbGFzcztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVJvd1N0eWxlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHNjaGVtYVJvd1N0eWxlOiBTY2hlbWFSb3dTdHlsZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNjaGVtYVJvd1N0eWxlID0gc2NoZW1hUm93U3R5bGU7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHRmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRcdGNvbWJpbmVMYXRlc3QoXG5cdFx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSksXG5cdFx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnNlYXJjaFdhcmVob3VzZS5vbkhpZ2hsaWdodCh0aGlzLnN0cnVjdHVyZUlkKSlcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdChhcmdzOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3Qgc2VhcmNoUGhyYXNlID0gYXJnc1swXSxcblx0XHRcdFx0XHRoaWdobGlnaHRpbmcgPSBhcmdzWzFdO1xuXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0aW5nID0gaGlnaGxpZ2h0aW5nO1xuXHRcdFx0XHR0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuaGlnaGxpZ2h0aW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHR0cmFuc2xhdGVZKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXG5cdFx0Y29uc3QgaGVpZ2h0ID0gaW5kZXggKiB0aGlzLnJvd0hlaWdodDtcblxuXHRcdHJldHVybiBgdHJhbnNsYXRlWSgke2hlaWdodH1weClgO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5OiBJdGVtRW50aXR5KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0aW9uKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCc7XG5cdH1cblxufVxuIl19