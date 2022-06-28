import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
import { SummariesManager } from './summaries.manager';
export class SummariesManagerFactory {
    constructor(calculators) {
        this.calculators = calculators;
    }
    create(structureId) {
        return new SummariesManager(structureId, this.calculators);
    }
}
SummariesManagerFactory.services = [{ inject: SUMMARIES_CALCULATORS, collection: true }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE1BQU0sT0FBTyx1QkFBdUI7SUFFbkMsWUFBNkIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO0lBQzlFLENBQUM7SUFJRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7QUFKZSxnQ0FBUSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVU1NQVJJRVNfQ0FMQ1VMQVRPUlMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy5jYWxjdWxhdG9ycy50b2tlbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXIgfSBmcm9tICcuL3N1bW1hcmllcy5tYW5hZ2VyJztcblxuXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsY3VsYXRvcnM6IEFycmF5PFN1bW1hcmllc0NhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW3sgaW5qZWN0OiBTVU1NQVJJRVNfQ0FMQ1VMQVRPUlMsIGNvbGxlY3Rpb246IHRydWUgfV07XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN1bW1hcmllc01hbmFnZXIge1xuXHRcdHJldHVybiBuZXcgU3VtbWFyaWVzTWFuYWdlcihzdHJ1Y3R1cmVJZCwgdGhpcy5jYWxjdWxhdG9ycyk7XG5cdH1cblxufVxuIl19