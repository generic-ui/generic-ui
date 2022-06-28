import { StructureDomainEvent } from '../../structure-core/core/structure.domain-event';
export class StructureSummariesChangedEvent extends StructureDomainEvent {
    constructor(structureId, values) {
        super(structureId, values, 'StructureSummariesChangedEvent');
        this.values = values;
    }
    getSummaries() {
        return this.values;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHeEYsTUFBTSxPQUFPLDhCQUErQixTQUFRLG9CQUFvQjtJQUV2RSxZQUFZLFdBQXdCLEVBQ2hCLE1BQW9DO1FBQ3ZELEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFEMUMsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7SUFFeEQsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuLi9kb21haW4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1jb3JlL2NvcmUvc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHZhbHVlcywgJ1N0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0U3VtbWFyaWVzKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcztcblx0fVxuXG59XG4iXX0=