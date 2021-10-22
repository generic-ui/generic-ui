/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectToggleType } from '../../../../source/core/domain/formation/core/row-select-toggle-type';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StyleModifier } from '../../../../../common/cdk/dom/style/style-modifier';
import { ClassModifier } from '../../../../../common/cdk/dom/class/class-modifier';
import { CssClassModifier } from '../../../../common/css-class/css-class.modifier';
export class StructureRowComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} structureId
     * @param {?} formationWarehouse
     * @param {?} formationCommandDispatcher
     * @param {?} cssClassModifier
     */
    constructor(changeDetectorRef, elRef, structureId, formationWarehouse, formationCommandDispatcher, cssClassModifier) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.structureId = structureId;
        this.formationWarehouse = formationWarehouse;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.cssClassModifier = cssClassModifier;
        this.detailsEnabled = false;
        this.checkboxSelection = false;
        this.selectedItem = false;
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
        this.classModifier = new ClassModifier(this.elRef.nativeElement);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.entity !== undefined && changes.entity.currentValue !== undefined) {
            this.checkSelectedItem();
            this.updateRowClass(changes.entity.previousValue);
            this.updateRowStyle(changes.entity.previousValue);
        }
        if (changes.rowClass !== undefined && changes.rowClass.currentValue !== undefined) {
            this.updateRowClass();
        }
        if (changes.rowStyle !== undefined && changes.rowStyle.currentValue !== undefined) {
            this.updateRowStyle();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribeWithoutRender(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            this.row = row;
            /** @type {?} */
            const prevValue = this.selectedItem;
            this.checkSelectedItem();
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
                this.changeDetectorRef.detectChanges();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.updateRowClass();
        this.updateRowStyle();
    }
    /**
     * @return {?}
     */
    trackByFn() {
        return 0;
    }
    /**
     * @return {?}
     */
    selectRow() {
        event.stopPropagation();
        this.formationCommandDispatcher.toggleSelectedRow(this.entity.getId(), RowSelectToggleType.ADD, this.structureId);
    }
    /**
     * @return {?}
     */
    checkSelectedItem() {
        if (this.row) {
            /** @type {?} */
            const prevValue = this.selectedItem;
            this.selectedItem = this.row.isSelected(this.entity.getId());
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    calculateRowStyle(entity) {
        if (!this.rowStyle) {
            return '';
        }
        if (typeof this.rowStyle.style === 'string') {
            return this.rowStyle.style || '';
        }
        if (typeof this.rowStyle.styleFunction === 'function') {
            return this.rowStyle.styleFunction(entity.getSourceItem(), entity.getPosition());
        }
    }
    /**
     * @private
     * @param {?=} prevEntity
     * @return {?}
     */
    updateRowStyle(prevEntity) {
        if (prevEntity) {
            /** @type {?} */
            const rowStylesToRemove = this.calculateRowStyle(prevEntity);
            this.removeRowStyles(rowStylesToRemove);
        }
        /** @type {?} */
        const rowStylesToAdd = this.calculateRowStyle(this.entity);
        this.renderRowStyles(rowStylesToAdd);
    }
    /**
     * @private
     * @param {?} rowStyle
     * @return {?}
     */
    removeRowStyles(rowStyle) {
        if (!rowStyle) {
            return;
        }
        /** @type {?} */
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            /** @type {?} */
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().removeStyleByName(separatedStyles[0].trim());
            }
        }
    }
    /**
     * @private
     * @param {?} rowStyle
     * @return {?}
     */
    renderRowStyles(rowStyle) {
        if (!rowStyle) {
            return;
        }
        /** @type {?} */
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            /** @type {?} */
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().setStyleByName(separatedStyles[0].trim(), separatedStyles[1].trim());
            }
        }
    }
    /**
     * @private
     * @param {?=} prevEntity
     * @return {?}
     */
    updateRowClass(prevEntity) {
        if (prevEntity) {
            /** @type {?} */
            const toRemoveClass = this.calculateRowClass(prevEntity);
            if (toRemoveClass) {
                this.classModifier.getHost().remove(toRemoveClass);
            }
        }
        /** @type {?} */
        const toAddClass = this.calculateRowClass(this.entity);
        if (toAddClass) {
            this.classModifier.getHost().add(toAddClass);
        }
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    calculateRowClass(entity) {
        if (!this.rowClass) {
            return '';
        }
        /** @type {?} */
        let clazz;
        if (typeof this.rowClass.class === 'string') {
            clazz = this.rowClass.class || '';
        }
        if (typeof this.rowClass.classFunction === 'function') {
            if (entity) {
                clazz = this.rowClass.classFunction(entity.getSourceItem(), entity.getPosition()) || '';
            }
        }
        return clazz;
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-row';
    }
}
StructureRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-row]',
                template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn\" [cellEditingEnabled]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureRowComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: FormationWarehouse },
    { type: FormationCommandInvoker },
    { type: CssClassModifier }
];
StructureRowComponent.propDecorators = {
    entity: [{ type: Input }],
    columns: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    searchPhrase: [{ type: Input }],
    index: [{ type: Input }],
    rowStyle: [{ type: Input }],
    rowClass: [{ type: Input }],
    detailsEnabled: [{ type: Input }],
    checkboxSelection: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureRowComponent.prototype.entity;
    /** @type {?} */
    StructureRowComponent.prototype.columns;
    /** @type {?} */
    StructureRowComponent.prototype.editMode;
    /** @type {?} */
    StructureRowComponent.prototype.cellEditing;
    /** @type {?} */
    StructureRowComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureRowComponent.prototype.index;
    /** @type {?} */
    StructureRowComponent.prototype.rowStyle;
    /** @type {?} */
    StructureRowComponent.prototype.rowClass;
    /** @type {?} */
    StructureRowComponent.prototype.detailsEnabled;
    /** @type {?} */
    StructureRowComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureRowComponent.prototype.selectedItem;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.row;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.classModifier;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.cssClassModifier;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFHckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVVuRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBd0N4RCxZQUE2QixpQkFBb0MsRUFDN0MsS0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLDBCQUFtRCxFQUNuRCxnQkFBa0M7UUFDckQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTkosc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxVQUFLLEdBQUws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QUNEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzs7WUE1T0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDR5QkFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQXRCaUMsaUJBQWlCO1lBQWEsVUFBVTtZQUtqRSxXQUFXO1lBRVgsa0JBQWtCO1lBSGxCLHVCQUF1QjtZQVN2QixnQkFBZ0I7OztxQkFZdkIsS0FBSztzQkFHTCxLQUFLO3VCQUdMLEtBQUs7MEJBR0wsS0FBSzsyQkFHTCxLQUFLO29CQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLOzZCQUdMLEtBQUs7Z0NBR0wsS0FBSzs7OztJQTNCTix1Q0FDbUI7O0lBRW5CLHdDQUN5Qzs7SUFFekMseUNBQ2tCOztJQUVsQiw0Q0FDcUI7O0lBRXJCLDZDQUNxQjs7SUFFckIsc0NBQ2M7O0lBRWQseUNBQ3NCOztJQUV0Qix5Q0FDc0I7O0lBRXRCLCtDQUNnQzs7SUFFaEMsa0RBQ21DOztJQUVuQyw2Q0FBOEI7Ozs7O0lBRTlCLG9DQUFrQzs7Ozs7SUFFbEMsOENBQThDOzs7OztJQUU5Qyw4Q0FBOEM7Ozs7O0lBRWxDLGtEQUFxRDs7Ozs7SUFDOUQsc0NBQWtDOzs7OztJQUNsQyw0Q0FBeUM7Ozs7O0lBQ3pDLG1EQUF1RDs7Ozs7SUFDdkQsMkRBQW9FOzs7OztJQUNwRSxpREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEd1aVJvd0NsYXNzLCBHdWlSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS9ncmlkL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtcm93XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtRW50aXR5O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aW5kZXg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0QElucHV0KClcblx0cm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGRldGFpbHNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWxlY3RlZEl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJvdzogUm93U2VsZWN0ZWRSZWFkTW9kZWw7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5lbnRpdHkgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmVudGl0eS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXHRcdFx0dGhpcy51cGRhdGVSb3dDbGFzcyhjaGFuZ2VzLmVudGl0eS5wcmV2aW91c1ZhbHVlKTtcblx0XHRcdHRoaXMudXBkYXRlUm93U3R5bGUoY2hhbmdlcy5lbnRpdHkucHJldmlvdXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q2xhc3MgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NsYXNzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93U3R5bGUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd1N0eWxlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHJvdzogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5yb3cgPSByb3c7XG5cdFx0XHRcdGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG5cdFx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdFx0aWYgKHByZXZWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dTdHlsZSgpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzZWxlY3RSb3coKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyh0aGlzLmVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGVja1NlbGVjdGVkSXRlbSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3cpIHtcblxuXHRcdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5yb3cuaXNTZWxlY3RlZCh0aGlzLmVudGl0eS5nZXRJZCgpKTtcblxuXHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSb3dTdHlsZShlbnRpdHk6IEl0ZW1FbnRpdHkpOiBzdHJpbmcge1xuXG5cdFx0aWYgKCF0aGlzLnJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93U3R5bGUuc3R5bGUgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24oZW50aXR5LmdldFNvdXJjZUl0ZW0oKSwgZW50aXR5LmdldFBvc2l0aW9uKCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93U3R5bGUocHJldkVudGl0eT86IEl0ZW1FbnRpdHkpIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCByb3dTdHlsZXNUb1JlbW92ZSA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUocHJldkVudGl0eSk7XG5cblx0XHRcdHRoaXMucmVtb3ZlUm93U3R5bGVzKHJvd1N0eWxlc1RvUmVtb3ZlKTtcblx0XHR9XG5cblx0XHRjb25zdCByb3dTdHlsZXNUb0FkZCA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUodGhpcy5lbnRpdHkpO1xuXG5cdFx0dGhpcy5yZW5kZXJSb3dTdHlsZXMocm93U3R5bGVzVG9BZGQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVSb3dTdHlsZXMocm93U3R5bGU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFyb3dTdHlsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHJvd1N0eWxlLnNwbGl0KCc7Jyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBzZXBhcmF0ZWRTdHlsZXMgPSBzdHlsZXNbaV0uc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKHNlcGFyYXRlZFN0eWxlc1swXSAmJiBzZXBhcmF0ZWRTdHlsZXNbMV0pIHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmVTdHlsZUJ5TmFtZShzZXBhcmF0ZWRTdHlsZXNbMF0udHJpbSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0gcm93U3R5bGUuc3BsaXQoJzsnKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHNlcGFyYXRlZFN0eWxlcyA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoc2VwYXJhdGVkU3R5bGVzWzBdICYmIHNlcGFyYXRlZFN0eWxlc1sxXSkge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldFN0eWxlQnlOYW1lKHNlcGFyYXRlZFN0eWxlc1swXS50cmltKCksIHNlcGFyYXRlZFN0eWxlc1sxXS50cmltKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93Q2xhc3MocHJldkVudGl0eT86IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCB0b1JlbW92ZUNsYXNzID0gdGhpcy5jYWxjdWxhdGVSb3dDbGFzcyhwcmV2RW50aXR5KTtcblxuXHRcdFx0aWYgKHRvUmVtb3ZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmUodG9SZW1vdmVDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9BZGRDbGFzcyA9IHRoaXMuY2FsY3VsYXRlUm93Q2xhc3ModGhpcy5lbnRpdHkpO1xuXG5cdFx0aWYgKHRvQWRkQ2xhc3MpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRvQWRkQ2xhc3MpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUm93Q2xhc3MoZW50aXR5OiBJdGVtRW50aXR5KTogc3RyaW5nIHtcblxuXHRcdGlmICghdGhpcy5yb3dDbGFzcykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGxldCBjbGF6ejogc3RyaW5nO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAoZW50aXR5KSB7XG5cdFx0XHRcdGNsYXp6ID0gdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uKGVudGl0eS5nZXRTb3VyY2VJdGVtKCksIGVudGl0eS5nZXRQb3NpdGlvbigpKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xheno7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXJvdyc7XG5cdH1cblxufVxuIl19