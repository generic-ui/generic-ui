/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/read/edit/state/edit.event-type';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureEditSourceItemParams } from '../../../../domain/source/origin/edit/structure.edit-source-item.params';
import { SourceCommandDispatcher } from '../../../../ui-api/source/source.command-dispatcher';
export class StructureCellEditBooleanComponent extends SmartComponent {
    /**
     * @param {?} sourceCommandService
     */
    constructor(sourceCommandService) {
        super();
        this.sourceCommandService = sourceCommandService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.entity !== null && changes.entity !== undefined) {
            this.initEditContext();
        }
        if (changes.cell !== null && changes.cell !== undefined) {
            this.initEditContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initEditContext();
    }
    /**
     * @private
     * @return {?}
     */
    submitChanges() {
        /** @type {?} */
        const itemId = this.entity.getId();
        /** @type {?} */
        const updatedValue = this.actualValue;
        /** @type {?} */
        const fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
    }
    /**
     * @private
     * @return {?}
     */
    initEditContext() {
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity),
            focus: false,
            parent: this.cellContainerRef
        };
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            switch (status) {
                case EditEventType.SUBMIT:
                    this.submitChanges();
                    break;
                default:
                    break;
            }
        }));
    }
}
StructureCellEditBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-cell-edit-boolean[entity][cell]',
                template: `

		<span #cellContainer >
			<ng-container
					*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`
            }] }
];
/** @nocollapse */
StructureCellEditBooleanComponent.ctorParameters = () => [
    { type: SourceCommandDispatcher }
];
StructureCellEditBooleanComponent.propDecorators = {
    cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
    entity: [{ type: Input }],
    cell: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.cellContainerRef;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.entity;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.cell;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.editContext;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.status$;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditBooleanComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFlOUYsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGNBQWM7Ozs7SUFtQnBFLFlBQTZCLG9CQUE2QztRQUN6RSxLQUFLLEVBQUUsQ0FBQztRQURvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCO0lBRTFFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN4RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFOztjQUNqQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVc7O2NBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7UUFFbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDOzs7OztJQUVPLGVBQWU7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFpQixDQUFDO1FBRXhELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3BCLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzdCLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTzthQUNWLEVBQUUsRUFBRTthQUNKLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBcUIsRUFBRSxFQUFFO1lBRXBDLFFBQVEsTUFBTSxFQUFFO2dCQUNmLEtBQUssYUFBYSxDQUFDLE1BQU07b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFFUDtvQkFDQyxNQUFNO2FBQ1A7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXZGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLCtDQUErQztnQkFDekQsUUFBUSxFQUFFOzs7Ozs7Ozs7RUFTVDthQUNEOzs7O1lBZFEsdUJBQXVCOzs7K0JBaUI5QixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFHM0MsS0FBSzttQkFHTCxLQUFLOzs7O0lBTk4sNkRBQzZCOztJQUU3QixtREFDbUI7O0lBRW5CLGlEQUMrQjs7SUFFL0Isd0RBQWlCOztJQUVqQiwwREFBd0M7O0lBRXhDLG9EQUFrQzs7SUFFbEMsd0RBQWlCOzs7OztJQUVMLGlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQtYm9vbGVhbltlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuICNjZWxsQ29udGFpbmVyID5cblx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZWRpdFRlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogZWRpdENvbnRleHRcIj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvc3Bhbj5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjZWxsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y2VsbENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVudGl0eSAhPT0gbnVsbCAmJiBjaGFuZ2VzLmVudGl0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNlbGwgIT09IG51bGwgJiYgY2hhbmdlcy5jZWxsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0fVxuXG5cdHByaXZhdGUgc3VibWl0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRFZGl0Q29udGV4dCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdHRoaXMuc3RhdHVzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+KCk7XG5cblx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyQsXG5cdFx0XHR2YWx1ZUNoYW5nZXM6IHRoaXMudmFsdWVDaGFuZ2VzJCxcblx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLFxuXHRcdFx0Zm9jdXM6IGZhbHNlLFxuXHRcdFx0cGFyZW50OiB0aGlzLmNlbGxDb250YWluZXJSZWZcblx0XHR9O1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==