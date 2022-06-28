import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from '../../domain/schema.aggregate';
export class SchemaAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(aggregateId) {
        return new SchemaAggregate(aggregateId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3NjaGVtYS9jb3JlL2NyZWF0ZS9zY2hlbWEuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSWhFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBMkM7SUFFdEY7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsV0FBcUI7UUFDM0IsT0FBTyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTY2hlbWFJZCwgU2NoZW1hQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShhZ2dyZWdhdGVJZDogU2NoZW1hSWQpOiBTY2hlbWFBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQWdncmVnYXRlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxufVxuIl19