/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/domain-api/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/domain-api/read/edit/state/edit.event-type';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureEditSourceItemParams } from '../../../../domain/source/origin/edit/structure.edit-source-item.params';
import { SourceCommandDispatcher } from '../../../../domain-api/source/source.command-dispatcher';
import { StructureCellEditState } from '../../../edit/structure.cell-edit.state';
export class StructureCellEditComponent extends SmartComponent {
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
     * @return {?}
     */
    submitChangesAndExit() {
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
                    this.submitChangesAndExit();
                    this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    // this.exitEditMode();
                    this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.actualValue = value;
        }));
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    publishEditState(state) {
        // this.structureCellEditStore.next(state);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditEnter() {
        this.publishEditState(StructureCellEditState.ENTER);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditCancel() {
        this.publishEditState(StructureCellEditState.CANCEL);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditSubmit() {
        this.publishEditState(StructureCellEditState.SUBMIT);
    }
}
StructureCellEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-cell-edit[entity][cell]',
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
StructureCellEditComponent.ctorParameters = () => [
    { type: SourceCommandDispatcher }
];
StructureCellEditComponent.propDecorators = {
    cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
    entity: [{ type: Input }],
    cell: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureCellEditComponent.prototype.cellContainerRef;
    /** @type {?} */
    StructureCellEditComponent.prototype.entity;
    /** @type {?} */
    StructureCellEditComponent.prototype.cell;
    /** @type {?} */
    StructureCellEditComponent.prototype.editContext;
    /** @type {?} */
    StructureCellEditComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellEditComponent.prototype.status$;
    /** @type {?} */
    StructureCellEditComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFlakYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQWM7Ozs7SUFtQjdELFlBQTZCLG9CQUE2QztRQUN6RSxLQUFLLEVBQUUsQ0FBQztRQURvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCO0lBRTFFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxP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QUNtQjs7SUFFbkIsMENBQytCOztJQUUvQixpREFBaUI7O0lBRWpCLG1EQUF3Qzs7SUFFeEMsNkNBQWtDOztJQUVsQyxpREFBaUI7Ozs7O0lBRUwsMERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNlbGwtZWRpdFtlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuICNjZWxsQ29udGFpbmVyID5cblx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZWRpdFRlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogZWRpdENvbnRleHRcIj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvc3Bhbj5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBWaWV3Q2hpbGQoJ2NlbGxDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRjZWxsQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjZWxsOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHR2YWx1ZUNoYW5nZXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0c3RhdHVzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdGFjdHVhbFZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuZW50aXR5ICE9PSBudWxsICYmIGNoYW5nZXMuZW50aXR5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmNlbGwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHR9XG5cblx0c3VibWl0Q2hhbmdlc0FuZEV4aXQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRFZGl0Q29udGV4dCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdHRoaXMuc3RhdHVzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+KCk7XG5cblx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyQsXG5cdFx0XHR2YWx1ZUNoYW5nZXM6IHRoaXMudmFsdWVDaGFuZ2VzJCxcblx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLFxuXHRcdFx0Zm9jdXM6IGZhbHNlLFxuXHRcdFx0cGFyZW50OiB0aGlzLmNlbGxDb250YWluZXJSZWZcblx0XHR9O1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlc0FuZEV4aXQoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRTdWJtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLkNBTkNFTDpcblx0XHRcdFx0XHRcdC8vIHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0Q2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVWYWx1ZUNoYW5nZXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdGF0ZShzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSk6IHZvaWQge1xuXHRcdC8vIHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZS5uZXh0KHN0YXRlKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVCk7XG5cdH1cblxufVxuIl19