import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class ToggleSelectedRowCommand extends StructureCommand {
    selectedRow;
    type;
    constructor(structureId, selectedRow, type) {
        super(structureId, 'ToggleSelectedRowCommand');
        this.selectedRow = selectedRow;
        this.type = type;
    }
    getSelectedRow() {
        return this.selectedRow;
    }
    getType() {
        return this.type;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUV6RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBR3pDO0lBQ0E7SUFGcEIsWUFBWSxXQUF3QixFQUNoQixXQUFtQixFQUNuQixJQUF5QjtRQUM1QyxLQUFLLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFGNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBcUI7SUFFN0MsQ0FBQztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRSb3c6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQnKTtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG5cdH1cblxuXHRnZXRUeXBlKCk6IFJvd1NlbGVjdFRvZ2dsZVR5cGUge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxufVxuIl19