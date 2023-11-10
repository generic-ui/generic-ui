import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export class FormationSetCustomSelectConfigCommand extends StructureCommand {
    config;
    constructor(structureId, config) {
        super(structureId, 'FormationSetCustomSelectConfigCommand');
        this.config = config;
    }
    getConfig() {
        return this.config;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnNldC1jdXN0b20tc2VsZWN0LWNvbmZpZy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvY3VzdG9tL2NvbmZpZy9mb3JtYXRpb24uc2V0LWN1c3RvbS1zZWxlY3QtY29uZmlnLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHNUYsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLGdCQUFnQjtJQUd0RDtJQURwQixZQUFZLFdBQXdCLEVBQ2hCLE1BQXNDO1FBQ3pELEtBQUssQ0FBQyxXQUFXLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFnQztJQUUxRCxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2N1c3RvbS9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdGlvbi5jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uU2V0Q3VzdG9tU2VsZWN0Q29uZmlnQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb25maWc6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRm9ybWF0aW9uU2V0Q3VzdG9tU2VsZWN0Q29uZmlnQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29uZmlnKCk6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9XG5cbn1cbiJdfQ==