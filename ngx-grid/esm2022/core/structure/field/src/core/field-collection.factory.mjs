import { FieldCollection } from '../domain/field-collection';
import { FieldEntityFactory } from '../domain/field/field.entity-factory';
export class FieldCollectionFactory {
    fieldFactory;
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    static services = [FieldEntityFactory];
    create() {
        return new FieldCollection(this.fieldFactory);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvY29yZS9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzFFLE1BQU0sT0FBTyxzQkFBc0I7SUFFTDtJQUE3QixZQUE2QixZQUFnQztRQUFoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7SUFDN0QsQ0FBQztJQUVELE1BQU0sQ0FBVSxRQUFRLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBVSxDQUFDO0lBRXpELE1BQU07UUFDTCxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRmllbGRFbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eS1mYWN0b3J5JztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZEZhY3Rvcnk6IEZpZWxkRW50aXR5RmFjdG9yeSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0ZpZWxkRW50aXR5RmFjdG9yeV0gYXMgY29uc3Q7XG5cblx0Y3JlYXRlKCk6IEZpZWxkQ29sbGVjdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZENvbGxlY3Rpb24odGhpcy5maWVsZEZhY3RvcnkpO1xuXHR9XG5cbn1cbiJdfQ==