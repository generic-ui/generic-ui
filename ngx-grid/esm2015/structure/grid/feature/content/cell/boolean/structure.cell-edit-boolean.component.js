import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChangedValueEmitter } from '../../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../../composition/core/domain-read/edit/state/edit.event-type';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { StructureEditSourceItemParams } from '../../../../../source/core/domain/origin/edit/structure.edit-source-item.params';
import { SourceCommandInvoker } from '../../../../../source/core/api/source.command-invoker';
import { StructureId } from '../../../../../core/api/structure.id';
export class StructureCellEditBooleanComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, sourceCommandService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
    }
    ngOnChanges(changes) {
        if (changes.entity !== null && changes.entity !== undefined) {
            this.initEditContext();
        }
        if (changes.cell !== null && changes.cell !== undefined) {
            this.initEditContext();
        }
    }
    ngOnInit() {
        this.initEditContext();
    }
    getSelectorName() {
        return 'gui-structure-cell-edit-boolean';
    }
    submitChanges() {
        const itemId = this.entity.getId(), updatedValue = this.actualValue, fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
    }
    initEditContext() {
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity).value,
            focus: false,
            parent: this.cellContainerRef
        };
        this.observeValueChanges();
        this.status$
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((status) => {
            switch (status) {
                case EditEventType.SUBMIT:
                    this.submitChanges();
                    break;
                default:
                    break;
            }
        });
    }
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((value) => {
            this.actualValue = value;
        });
    }
}
StructureCellEditBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-cell-edit-boolean][entity][cell]',
                template: `

		<span #cellContainer>
			<ng-container
				*ngTemplateOutlet="cell.editTemplate;
									context: editContext">
			</ng-container>
		</span>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureCellEditBooleanComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SourceCommandInvoker }
];
StructureCellEditBooleanComponent.propDecorators = {
    cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
    entity: [{ type: Input }],
    cell: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEosT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDaEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNoSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU3RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFpQm5FLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxjQUFjO0lBbUJwRSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixvQkFBMEM7UUFDN0QsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBRTlELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBcUQ7UUFFaEUsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM1RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3hELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN2QjtJQUNGLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8saUNBQWlDLENBQUM7SUFDMUMsQ0FBQztJQUVPLGFBQWE7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUVuQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUNqQyxJQUFJLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQ2hFLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRU8sZUFBZTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQWlCLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSztZQUM1QyxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzdCLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTzthQUNWLEVBQUUsRUFBRTthQUNKLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsTUFBcUIsRUFBRSxFQUFFO1lBRXBDLFFBQVEsTUFBTSxFQUFFO2dCQUNmLEtBQUssYUFBYSxDQUFDLE1BQU07b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFFUDtvQkFDQyxNQUFNO2FBQ1A7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtQkFBbUI7UUFFMUIsSUFBSSxDQUFDLGFBQWE7YUFDaEIsRUFBRSxFQUFFO2FBQ0osSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9EQUFvRDtnQkFDOUQsUUFBUSxFQUFFOzs7Ozs7Ozs7RUFTVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQTFCaUMsaUJBQWlCO1lBQWEsVUFBVTtZQVVqRSxXQUFXO1lBRlgsb0JBQW9COzs7K0JBcUIzQixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFHM0MsS0FBSzttQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY2VsbC1lZGl0LWJvb2xlYW5dW2VudGl0eV1bY2VsbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PHNwYW4gI2NlbGxDb250YWluZXI+XG5cdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbC5lZGl0VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZXh0OiBlZGl0Q29udGV4dFwiPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9zcGFuPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjZWxsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y2VsbENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMuZW50aXR5ICE9PSBudWxsICYmIGNoYW5nZXMuZW50aXR5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmNlbGwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQtYm9vbGVhbic7XG5cdH1cblxuXHRwcml2YXRlIHN1Ym1pdENoYW5nZXMoKTogdm9pZCB7XG5cdFx0Y29uc3QgaXRlbUlkID0gdGhpcy5lbnRpdHkuZ2V0SWQoKSxcblx0XHRcdHVwZGF0ZWRWYWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWUsXG5cdFx0XHRmaWVsZElkID0gdGhpcy5jZWxsLmNvbHVtbkZpZWxkSWQ7XG5cblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLmVkaXRJdGVtKFxuXHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlSWRcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0RWRpdENvbnRleHQoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblx0XHR0aGlzLnN0YXR1cyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPigpO1xuXG5cdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMkLFxuXHRcdFx0dmFsdWVDaGFuZ2VzOiB0aGlzLnZhbHVlQ2hhbmdlcyQsXG5cdFx0XHR2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKHRoaXMuZW50aXR5KS52YWx1ZSxcblx0XHRcdGZvY3VzOiBmYWxzZSxcblx0XHRcdHBhcmVudDogdGhpcy5jZWxsQ29udGFpbmVyUmVmXG5cdFx0fTtcblxuXHRcdHRoaXMub2JzZXJ2ZVZhbHVlQ2hhbmdlcygpO1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19