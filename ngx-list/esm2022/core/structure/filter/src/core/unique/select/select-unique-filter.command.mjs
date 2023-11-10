import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export class SelectUniqueFilterCommand extends StructureCommand {
    fieldId;
    uniqueValueId;
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'SelectUniqueFilterCommand');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlL3VuaXF1ZS9zZWxlY3Qvc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUc1RixNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCO0lBRzFDO0lBQ0E7SUFGcEIsWUFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixhQUE0QjtRQUMvQyxLQUFLLENBQUMsV0FBVyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFGN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUVoRCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0VW5pcXVlVmFsdWVJZCgpOiBVbmlxdWVWYWx1ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZUlkO1xuXHR9XG5cbn1cbiJdfQ==