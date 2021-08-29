/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../core/domain/structure.id';
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
        this.formationWarehouse
            .onRowSelectedReadModel(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
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
            return this.rowStyle.styleFunction(entity.getData(), entity.getPosition());
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
                clazz = this.rowClass.classFunction(entity.getData(), entity.getPosition()) || '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFHckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVVuRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBd0N4RCxZQUE2QixpQkFBb0MsRUFDN0MsS0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLDBCQUFtRCxFQUNuRCxnQkFBa0M7UUFDckQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTkosc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxVQUFLLEdBQUws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RSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xGO1NBQ0Q7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7OztZQTlPRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsNHlCQUE2QztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBdEJpQyxpQkFBaUI7WUFBYSxVQUFVO1lBS2pFLFdBQVc7WUFFWCxrQkFBa0I7WUFIbEIsdUJBQXVCO1lBU3ZCLGdCQUFnQjs7O3FCQVl2QixLQUFLO3NCQUdMLEtBQUs7dUJBR0wsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7b0JBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7NkJBR0wsS0FBSztnQ0FHTCxLQUFLOzs7O0lBM0JOLHVDQUNtQjs7SUFFbkIsd0NBQ3lDOztJQUV6Qyx5Q0FDa0I7O0lBRWxCLDRDQUNxQjs7SUFFckIsNkNBQ3FCOztJQUVyQixzQ0FDYzs7SUFFZCx5Q0FDc0I7O0lBRXRCLHlDQUNzQjs7SUFFdEIsK0NBQ2dDOztJQUVoQyxrREFDbUM7O0lBRW5DLDZDQUE4Qjs7Ozs7SUFFOUIsb0NBQWtDOzs7OztJQUVsQyw4Q0FBOEM7Ozs7O0lBRTlDLDhDQUE4Qzs7Ozs7SUFFbEMsa0RBQXFEOzs7OztJQUM5RCxzQ0FBa0M7Ozs7O0lBQ2xDLDRDQUF5Qzs7Ozs7SUFDekMsbURBQXVEOzs7OztJQUN2RCwyREFBb0U7Ozs7O0lBQ3BFLGlEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgR3VpUm93Q2xhc3MsIEd1aVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IENzc0NsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY3NzLWNsYXNzL2Nzcy1jbGFzcy5tb2RpZmllcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1yb3ddJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRpbmRleDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1N0eWxlOiBHdWlSb3dTdHlsZTtcblxuXHRASW5wdXQoKVxuXHRyb3dDbGFzczogR3VpUm93Q2xhc3M7XG5cblx0QElucHV0KClcblx0ZGV0YWlsc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNlbGVjdGVkSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY3NzQ2xhc3NNb2RpZmllcjogQ3NzQ2xhc3NNb2RpZmllcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0NvbXBvbmVudD4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVudGl0eSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZW50aXR5LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNoZWNrU2VsZWN0ZWRJdGVtKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKGNoYW5nZXMuZW50aXR5LnByZXZpb3VzVmFsdWUpO1xuXHRcdFx0dGhpcy51cGRhdGVSb3dTdHlsZShjaGFuZ2VzLmVudGl0eS5wcmV2aW91c1ZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dDbGFzcyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93Q2xhc3MuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dTdHlsZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93U3R5bGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMudXBkYXRlUm93U3R5bGUoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvdzogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5yb3cgPSByb3c7XG5cdFx0XHRcdGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG5cdFx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdFx0aWYgKHByZXZWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dTdHlsZSgpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzZWxlY3RSb3coKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyh0aGlzLmVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGVja1NlbGVjdGVkSXRlbSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3cpIHtcblxuXHRcdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5yb3cuaXNTZWxlY3RlZCh0aGlzLmVudGl0eS5nZXRJZCgpKTtcblxuXHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSb3dTdHlsZShlbnRpdHk6IEl0ZW1FbnRpdHkpOiBzdHJpbmcge1xuXG5cdFx0aWYgKCF0aGlzLnJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93U3R5bGUuc3R5bGUgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24oZW50aXR5LmdldERhdGEoKSwgZW50aXR5LmdldFBvc2l0aW9uKCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93U3R5bGUocHJldkVudGl0eT86IEl0ZW1FbnRpdHkpIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCByb3dTdHlsZXNUb1JlbW92ZSA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUocHJldkVudGl0eSk7XG5cblx0XHRcdHRoaXMucmVtb3ZlUm93U3R5bGVzKHJvd1N0eWxlc1RvUmVtb3ZlKTtcblx0XHR9XG5cblx0XHRjb25zdCByb3dTdHlsZXNUb0FkZCA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUodGhpcy5lbnRpdHkpO1xuXG5cdFx0dGhpcy5yZW5kZXJSb3dTdHlsZXMocm93U3R5bGVzVG9BZGQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVSb3dTdHlsZXMocm93U3R5bGU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFyb3dTdHlsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHJvd1N0eWxlLnNwbGl0KCc7Jyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBzZXBhcmF0ZWRTdHlsZXMgPSBzdHlsZXNbaV0uc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKHNlcGFyYXRlZFN0eWxlc1swXSAmJiBzZXBhcmF0ZWRTdHlsZXNbMV0pIHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmVTdHlsZUJ5TmFtZShzZXBhcmF0ZWRTdHlsZXNbMF0udHJpbSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0gcm93U3R5bGUuc3BsaXQoJzsnKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHNlcGFyYXRlZFN0eWxlcyA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoc2VwYXJhdGVkU3R5bGVzWzBdICYmIHNlcGFyYXRlZFN0eWxlc1sxXSkge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldFN0eWxlQnlOYW1lKHNlcGFyYXRlZFN0eWxlc1swXS50cmltKCksIHNlcGFyYXRlZFN0eWxlc1sxXS50cmltKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93Q2xhc3MocHJldkVudGl0eT86IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCB0b1JlbW92ZUNsYXNzID0gdGhpcy5jYWxjdWxhdGVSb3dDbGFzcyhwcmV2RW50aXR5KTtcblxuXHRcdFx0aWYgKHRvUmVtb3ZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmUodG9SZW1vdmVDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9BZGRDbGFzcyA9IHRoaXMuY2FsY3VsYXRlUm93Q2xhc3ModGhpcy5lbnRpdHkpO1xuXG5cdFx0aWYgKHRvQWRkQ2xhc3MpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRvQWRkQ2xhc3MpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUm93Q2xhc3MoZW50aXR5OiBJdGVtRW50aXR5KTogc3RyaW5nIHtcblxuXHRcdGlmICghdGhpcy5yb3dDbGFzcykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGxldCBjbGF6ejogc3RyaW5nO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAoZW50aXR5KSB7XG5cdFx0XHRcdGNsYXp6ID0gdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uKGVudGl0eS5nZXREYXRhKCksIGVudGl0eS5nZXRQb3NpdGlvbigpKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xheno7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXJvdyc7XG5cdH1cblxufVxuIl19