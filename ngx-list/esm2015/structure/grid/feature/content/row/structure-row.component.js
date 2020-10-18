/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectToggleType } from '../../../../source/core/domain/formation/core/row-select-toggle-type';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export class StructureRowComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} renderer2
     * @param {?} structureId
     * @param {?} formationWarehouse
     * @param {?} formationCommandDispatcher
     */
    constructor(changeDetectorRef, elRef, renderer2, structureId, formationWarehouse, formationCommandDispatcher) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.renderer2 = renderer2;
        this.structureId = structureId;
        this.formationWarehouse = formationWarehouse;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.detailsEnabled = false;
        this.checkboxSelection = false;
        this.selectedItem = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.entity !== undefined && changes.entity.currentValue !== undefined) {
            this.checkSelectedItem();
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
            let prevValue = this.selectedItem;
            this.checkSelectedItem();
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.renderer2.removeClass(this.elRef.nativeElement, 'selected');
                }
                else {
                    this.renderer2.addClass(this.elRef.nativeElement, 'selected');
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
            let prevValue = this.selectedItem;
            this.selectedItem = this.row.isSelected(this.entity.getId());
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.renderer2.removeClass(this.elRef.nativeElement, 'selected');
                }
                else {
                    this.renderer2.addClass(this.elRef.nativeElement, 'selected');
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateRowStyle() {
        if (!this.rowStyle) {
            return;
        }
        if (typeof this.rowStyle.style === 'string') {
            /** @type {?} */
            let rowStyle = this.rowStyle.style || '';
            this.renderRowStyles(rowStyle);
        }
        if (typeof this.rowStyle.styleFunction === 'function') {
            /** @type {?} */
            let rowStyle = this.rowStyle.styleFunction(this.entity.getData(), this.index);
            this.renderRowStyles(rowStyle);
        }
    }
    /**
     * @private
     * @param {?=} rowStyle
     * @return {?}
     */
    renderRowStyles(rowStyle = '') {
        /** @type {?} */
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            /** @type {?} */
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.renderer2.setStyle(this.elRef.nativeElement, separatedStyles[0].trim(), separatedStyles[1].trim());
            }
        }
        return rowStyle;
    }
    /**
     * @private
     * @return {?}
     */
    updateRowClass() {
        if (!this.rowClass) {
            return;
        }
        /** @type {?} */
        let clazz;
        if (typeof this.rowClass.class === 'string') {
            clazz = this.rowClass.class || '';
        }
        if (typeof this.rowClass.classFunction === 'function') {
            if (this.entity) {
                clazz = this.rowClass.classFunction(this.entity.getData(), this.index) || '';
            }
        }
        if (clazz) {
            this.renderer2.addClass(this.elRef.nativeElement, clazz);
        }
    }
}
StructureRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-row',
                template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureRowComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: StructureId },
    { type: FormationWarehouse },
    { type: FormationCommandInvoker }
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
    StructureRowComponent.prototype.renderer2;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFXM0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGNBQWM7Ozs7Ozs7OztJQW9DeEQsWUFBNkIsaUJBQW9DLEVBQzdDLEtBQWlCLEVBQ2pCLFNBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QywwQkFBbUQ7UUFDdEUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFORyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFk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dUNBQ21COztJQUVuQix3Q0FDeUM7O0lBRXpDLHlDQUNrQjs7SUFFbEIsNENBQ3FCOztJQUVyQiw2Q0FDcUI7O0lBRXJCLHNDQUNjOztJQUVkLHlDQUNzQjs7SUFFdEIseUNBQ3NCOztJQUV0QiwrQ0FDZ0M7O0lBRWhDLGtEQUNtQzs7SUFFbkMsNkNBQThCOzs7OztJQUU5QixvQ0FBa0M7Ozs7O0lBRXRCLGtEQUFxRDs7Ozs7SUFDOUQsc0NBQWtDOzs7OztJQUNsQywwQ0FBcUM7Ozs7O0lBQ3JDLDRDQUF5Qzs7Ozs7SUFDekMsbURBQXVEOzs7OztJQUN2RCwyREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgR3VpUm93Q2xhc3MsIEd1aVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1yb3cnLFxuXHR0ZW1wbGF0ZVVybDogYC4vc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGluZGV4OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRkZXRhaWxzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VsZWN0ZWRJdGVtOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByb3c6IFJvd1NlbGVjdGVkUmVhZE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMuZW50aXR5ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5lbnRpdHkuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dDbGFzcyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93Q2xhc3MuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy51cGRhdGVSb3dDbGFzcygpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dTdHlsZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3c6IFJvd1NlbGVjdGVkUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMucm93ID0gcm93O1xuXHRcdFx0XHRsZXQgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXG5cdFx0XHRcdGlmIChwcmV2VmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG5cblx0XHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlbGVjdFJvdygpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHRoaXMuZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuQURELCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNoZWNrU2VsZWN0ZWRJdGVtKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvdykge1xuXG5cdFx0XHRsZXQgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5yb3cuaXNTZWxlY3RlZCh0aGlzLmVudGl0eS5nZXRJZCgpKTtcblxuXHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVSb3dTdHlsZSgpIHtcblxuXHRcdGlmICghdGhpcy5yb3dTdHlsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dTdHlsZS5zdHlsZSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0bGV0IHJvd1N0eWxlID0gdGhpcy5yb3dTdHlsZS5zdHlsZSB8fCAnJztcblxuXHRcdFx0dGhpcy5yZW5kZXJSb3dTdHlsZXMocm93U3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dTdHlsZS5zdHlsZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdGxldCByb3dTdHlsZSA9IHRoaXMucm93U3R5bGUuc3R5bGVGdW5jdGlvbih0aGlzLmVudGl0eS5nZXREYXRhKCksIHRoaXMuaW5kZXgpO1xuXG5cdFx0XHR0aGlzLnJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIHJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nID0gJycpIHtcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHJvd1N0eWxlLnNwbGl0KCc7Jyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBzZXBhcmF0ZWRTdHlsZXMgPSBzdHlsZXNbaV0uc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKHNlcGFyYXRlZFN0eWxlc1swXSAmJiBzZXBhcmF0ZWRTdHlsZXNbMV0pIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBzZXBhcmF0ZWRTdHlsZXNbMF0udHJpbSgpLCBzZXBhcmF0ZWRTdHlsZXNbMV0udHJpbSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJvd1N0eWxlO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVSb3dDbGFzcygpIHtcblxuXHRcdGlmICghdGhpcy5yb3dDbGFzcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBjbGF6ejogc3RyaW5nO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAodGhpcy5lbnRpdHkpIHtcblx0XHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzRnVuY3Rpb24odGhpcy5lbnRpdHkuZ2V0RGF0YSgpLCB0aGlzLmluZGV4KSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2xhenopIHtcblx0XHRcdHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgY2xhenopO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=