import { CompositionCommand } from '../../composition.command';
export class SetColumnsCommand extends CompositionCommand {
    constructor(compositionId, columns) {
        super(compositionId, 'SetColumnsCommand');
        this.compositionId = compositionId;
        this.columns = columns;
    }
    getParams() {
        return this.columns;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9jb3JlL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7SUFFeEQsWUFBcUIsYUFBNEIsRUFDN0IsT0FBNEI7UUFDL0MsS0FBSyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRnRCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBRWhELENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcblxuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRDb2x1bW5zQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5QYXJhbXM+KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ1NldENvbHVtbnNDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQYXJhbXMoKTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG59XG4iXX0=