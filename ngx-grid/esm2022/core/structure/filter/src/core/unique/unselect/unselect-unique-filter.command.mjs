import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export class UnselectUniqueFilterCommand extends StructureCommand {
    fieldId;
    uniqueValueId;
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'UnselectUniqueFilterCommand');
        this.fieldId = fieldId;
        this.uniqueValueId = uniqueValueId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getUniqueValueId() {
        return this.uniqueValueId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUc1RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCO0lBRzVDO0lBQ0E7SUFGcEIsWUFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixhQUE0QjtRQUMvQyxLQUFLLENBQUMsV0FBVyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFGL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUVoRCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQnKTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldFVuaXF1ZVZhbHVlSWQoKTogVW5pcXVlVmFsdWVJZCB7XG5cdFx0cmV0dXJuIHRoaXMudW5pcXVlVmFsdWVJZDtcblx0fVxuXG59XG4iXX0=