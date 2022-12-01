import { FormationCustomSelectCommand } from './formation.custom-select.command';
export class FormationCustomSelectCommandHandler {
    forCommand() {
        return FormationCustomSelectCommand;
    }
    handle(aggregate, command) {
        const customSelectId = command.getCustomSelectId();
        aggregate.selectCustom(customSelectId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3QuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvY3VzdG9tL3NlbGVjdC9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJakYsTUFBTSxPQUFPLG1DQUFtQztJQUUvQyxVQUFVO1FBQ1QsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQTZCLEVBQUUsT0FBcUM7UUFFMUUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFbkQsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3RDb21tYW5kIH0gZnJvbSAnLi9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdC5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkN1c3RvbVNlbGVjdENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBGb3JtYXRpb25DdXN0b21TZWxlY3RDb21tYW5kPiB7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxGb3JtYXRpb25DdXN0b21TZWxlY3RDb21tYW5kPiB7XG5cdFx0cmV0dXJuIEZvcm1hdGlvbkN1c3RvbVNlbGVjdENvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGN1c3RvbVNlbGVjdElkID0gY29tbWFuZC5nZXRDdXN0b21TZWxlY3RJZCgpO1xuXG5cdFx0YWdncmVnYXRlLnNlbGVjdEN1c3RvbShjdXN0b21TZWxlY3RJZCk7XG5cdH1cblxufVxuIl19