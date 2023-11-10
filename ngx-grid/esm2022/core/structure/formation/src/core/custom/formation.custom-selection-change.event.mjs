import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export class FormationCustomSelectionChangeEvent extends StructureDomainEvent {
    customSelection;
    constructor(aggregateId, customSelection) {
        super(aggregateId, customSelection, 'FormationCustomSelectionChangeEvent');
        this.customSelection = customSelection;
    }
    getCustomSelection() {
        return this.customSelection;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24tY2hhbmdlLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvY3VzdG9tL2Zvcm1hdGlvbi5jdXN0b20tc2VsZWN0aW9uLWNoYW5nZS5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUdsRyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsb0JBQW9CO0lBR3hEO0lBRHBCLFlBQVksV0FBd0IsRUFDaEIsZUFBeUM7UUFDNUQsS0FBSyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUscUNBQXFDLENBQUMsQ0FBQztRQUR4RCxvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7SUFFN0QsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2FwaS9jdXN0b20vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uQ2hhbmdlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGN1c3RvbVNlbGVjdGlvbjogRm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIGN1c3RvbVNlbGVjdGlvbiwgJ0Zvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNoYW5nZUV2ZW50Jyk7XG5cdH1cblxuXHRnZXRDdXN0b21TZWxlY3Rpb24oKTogRm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5jdXN0b21TZWxlY3Rpb247XG5cdH1cblxufVxuIl19