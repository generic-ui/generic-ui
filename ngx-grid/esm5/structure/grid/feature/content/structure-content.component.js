/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var StructureContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureContentComponent, _super);
    function StructureContentComponent(elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationWarehouse, structureWarehouse, structureVerticalFormationWarehouse, verticalFormationRepository, structureId, // REfactor
    rowSelectionTypeArchive, searchWarehouse, schemaRowClassArchive, schemaRowStyleArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formationCommandService = formationCommandService;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.formationWarehouse = formationWarehouse;
        _this.structureWarehouse = structureWarehouse;
        _this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        _this.verticalFormationRepository = verticalFormationRepository;
        _this.structureId = structureId;
        _this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        _this.searchWarehouse = searchWarehouse;
        _this.schemaRowClassArchive = schemaRowClassArchive;
        _this.schemaRowStyleArchive = schemaRowStyleArchive;
        _this.editMode = false;
        _this.cellEditing = false;
        _this.searchPhrase = '';
        _this.highlighting = true;
        _this.phrase = true;
        _this.rowDetailOpened = 4;
        _this.checkboxSelection = false;
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
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        }));
        this.hermesSubscribe(this.structureEditModeArchive.on(), (/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.editMode = enabled;
        }));
        this.hermesSubscribe(this.structureCellEditArchive.on(), (/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.cellEditing = enabled;
        }));
        this.hermesSubscribe(this.schemaRowClassArchive.on(), (/**
         * @param {?} schemaRowClass
         * @return {?}
         */
        function (schemaRowClass) {
            _this.schemaRowClass = schemaRowClass;
        }));
        this.hermesSubscribe(this.schemaRowStyleArchive.on(), (/**
         * @param {?} schemaRowStyle
         * @return {?}
         */
        function (schemaRowStyle) {
            _this.schemaRowStyle = schemaRowStyle;
        }));
        this.hermesSubscribe(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (/**
         * @param {?} rowHeight
         * @return {?}
         */
        function (rowHeight) {
            _this.rowHeight = rowHeight;
        }));
        this.hermesSubscribe(fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId)))), (/**
         * @param {?} args
         * @return {?}
         */
        function (args) {
            /** @type {?} */
            var searchPhrase = args[0];
            /** @type {?} */
            var highlighting = args[1];
            _this.highlighting = highlighting;
            _this.searchPhrase = searchPhrase;
            if (!_this.highlighting) {
                _this.searchPhrase = '';
            }
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
        /** @type {?} */
        var height = index * this.rowHeight;
        return "translateY(" + height + "px)";
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
        if (!this.checkboxSelection) {
            this.formationCommandService.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    StructureContentComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-content';
    };
    StructureContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-content]',
                    template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContentComponent.ctorParameters = function () { return [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUs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Qyw0REFBaUU7Ozs7O0lBQ2pFLG9EQUFpRDs7Ozs7SUFDakQsMERBQTZEOzs7OztJQUM3RCwwREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgdG9SeEpzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29udGVudF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRlZGl0TW9kZSA9IGZhbHNlO1xuXG5cdGNlbGxFZGl0aW5nID0gZmFsc2U7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHBocmFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cm93RGV0YWlsT3BlbmVkID0gNDtcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcztcblxuXHRzY2hlbWFSb3dTdHlsZTogU2NoZW1hUm93U3R5bGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgLy8gUkVmYWN0b3Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93Q2xhc3NBcmNoaXZlOiBTY2hlbWFSb3dDbGFzc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93U3R5bGVBcmNoaXZlOiBTY2hlbWFSb3dTdHlsZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWRpdE1vZGUgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm9uKCksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmNlbGxFZGl0aW5nID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVJvd0NsYXNzQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNjaGVtYVJvd0NsYXNzID0gc2NoZW1hUm93Q2xhc3M7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFSb3dTdHlsZUFyY2hpdmUub24oKSxcblx0XHRcdChzY2hlbWFSb3dTdHlsZTogU2NoZW1hUm93U3R5bGUpID0+IHtcblx0XHRcdFx0dGhpcy5zY2hlbWFSb3dTdHlsZSA9IHNjaGVtYVJvd1N0eWxlO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zZWFyY2hXYXJlaG91c2Uub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZCkpLFxuXHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zZWFyY2hXYXJlaG91c2Uub25IaWdobGlnaHQodGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHQoYXJnczogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHNlYXJjaFBocmFzZSA9IGFyZ3NbMF0sXG5cdFx0XHRcdFx0aGlnaGxpZ2h0aW5nID0gYXJnc1sxXTtcblxuXHRcdFx0XHR0aGlzLmhpZ2hsaWdodGluZyA9IGhpZ2hsaWdodGluZztcblx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmhpZ2hsaWdodGluZykge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGNvbnN0IGhlaWdodCA9IGluZGV4ICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtoZWlnaHR9cHgpYDtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eTogSXRlbUVudGl0eSk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5jaGVja2JveFNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kU2VydmljZS50b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHkuZ2V0SWQoKSwgUm93U2VsZWN0VG9nZ2xlVHlwZS5OT05FLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbnRlbnQnO1xuXHR9XG5cbn1cbiJdfQ==