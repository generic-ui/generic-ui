import { SetSelectionTypeCommand } from './set-selection-type.command';
export class SetSelectionTypeCommandHandler {
    forCommand() {
        return SetSelectionTypeCommand;
    }
    handle(aggregate, command) {
        aggregate.setSelectionType(command.getType());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGlvbi10eXBlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9jb3JlL3R5cGUvc2V0LXNlbGVjdGlvbi10eXBlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RSxNQUFNLE9BQU8sOEJBQThCO0lBRTFDLFVBQVU7UUFDVCxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUFnQztRQUNyRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U2VsZWN0aW9uVHlwZUNvbW1hbmQgfSBmcm9tICcuL3NldC1zZWxlY3Rpb24tdHlwZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNldFNlbGVjdGlvblR5cGVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2VsZWN0aW9uVHlwZUNvbW1hbmQ+IHtcblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldFNlbGVjdGlvblR5cGVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNlbGVjdGlvblR5cGVDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTZWxlY3Rpb25UeXBlQ29tbWFuZCk6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZS5zZXRTZWxlY3Rpb25UeXBlKGNvbW1hbmQuZ2V0VHlwZSgpKTtcblx0fVxuXG59XG4iXX0=