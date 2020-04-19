/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/feature-api/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/feature-api/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/feature-api/read/edit/state/edit.event-type';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureEditSourceItemParams } from '../../../../domain/source/origin/edit/structure.edit-source-item.params';
import { SourceCommandDispatcher } from '../../../../feature-api/source/source.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2NvbnRlbnQvY2VsbC9ib29sZWFuL3N0cnVjdHVyZS5jZWxsLWVkaXQtYm9vbGVhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQzlILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBZW5HLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxjQUFjOzs7O0lBbUJwRSxZQUE2QixvQkFBNkM7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFEb0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QjtJQUUxRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTyxhQUFhOztjQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTs7Y0FDakMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXOztjQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1FBRWxDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBaUIsQ0FBQztRQUV4RCxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQixZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUM3QixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU87YUFDVixFQUFFLEVBQUU7YUFDSixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQXFCLEVBQUUsRUFBRTtZQUVwQyxRQUFRLE1BQU0sRUFBRTtnQkFDZixLQUFLLGFBQWEsQ0FBQyxNQUFNO29CQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVA7b0JBQ0MsTUFBTTthQUNQO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF2RkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwrQ0FBK0M7Z0JBQ3pELFFBQVEsRUFBRTs7Ozs7Ozs7O0VBU1Q7YUFDRDs7OztZQWRRLHVCQUF1Qjs7OytCQWlCOUIsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBRzNDLEtBQUs7bUJBR0wsS0FBSzs7OztJQU5OLDZEQUM2Qjs7SUFFN0IsbURBQ21COztJQUVuQixpREFDK0I7O0lBRS9CLHdEQUFpQjs7SUFFakIsMERBQXdDOztJQUV4QyxvREFBa0M7O0lBRWxDLHdEQUFpQjs7Ozs7SUFFTCxpRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2VkaXQvc3RhdGUvZWRpdC5ldmVudC10eXBlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQtYm9vbGVhbltlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuICNjZWxsQ29udGFpbmVyID5cblx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZWRpdFRlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogZWRpdENvbnRleHRcIj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvc3Bhbj5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjZWxsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y2VsbENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVudGl0eSAhPT0gbnVsbCAmJiBjaGFuZ2VzLmVudGl0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNlbGwgIT09IG51bGwgJiYgY2hhbmdlcy5jZWxsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0fVxuXG5cdHByaXZhdGUgc3VibWl0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRFZGl0Q29udGV4dCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdHRoaXMuc3RhdHVzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+KCk7XG5cblx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyQsXG5cdFx0XHR2YWx1ZUNoYW5nZXM6IHRoaXMudmFsdWVDaGFuZ2VzJCxcblx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLFxuXHRcdFx0Zm9jdXM6IGZhbHNlLFxuXHRcdFx0cGFyZW50OiB0aGlzLmNlbGxDb250YWluZXJSZWZcblx0XHR9O1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==