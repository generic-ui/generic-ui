import { FieldCollection } from '../domain/field-collection';
import { FieldEntityFactory } from '../domain/field/field.entity-factory';
export class FieldCollectionFactory {
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    create() {
        return new FieldCollection(this.fieldFactory);
    }
}
FieldCollectionFactory.services = [FieldEntityFactory];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9jb3JlL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHMUUsTUFBTSxPQUFPLHNCQUFzQjtJQUVsQyxZQUE2QixZQUFnQztRQUFoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7SUFDN0QsQ0FBQztJQUlELE1BQU07UUFDTCxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOztBQUplLCtCQUFRLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRmllbGRFbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eS1mYWN0b3J5JztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZEZhY3Rvcnk6IEZpZWxkRW50aXR5RmFjdG9yeSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0ZpZWxkRW50aXR5RmFjdG9yeV0gYXMgY29uc3Q7XG5cblx0Y3JlYXRlKCk6IEZpZWxkQ29sbGVjdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZENvbGxlY3Rpb24odGhpcy5maWVsZEZhY3RvcnkpO1xuXHR9XG5cbn1cbiJdfQ==