import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
import { SummariesManager } from './summaries.manager';
export class SummariesManagerFactory {
    calculators;
    constructor(calculators) {
        this.calculators = calculators;
    }
    static services = [{ inject: SUMMARIES_CALCULATORS, collection: true }];
    create(structureId) {
        return new SummariesManager(structureId, this.calculators);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vc3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUdsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxNQUFNLE9BQU8sdUJBQXVCO0lBRU47SUFBN0IsWUFBNkIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO0lBQzlFLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFFakYsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVU1NQVJJRVNfQ0FMQ1VMQVRPUlMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy5jYWxjdWxhdG9ycy50b2tlbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyIH0gZnJvbSAnLi9zdW1tYXJpZXMubWFuYWdlcic7XG5cblxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGN1bGF0b3JzOiBBcnJheTxTdW1tYXJpZXNDYWxjdWxhdG9yPGFueSwgYW55Pj4pIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFt7IGluamVjdDogU1VNTUFSSUVTX0NBTENVTEFUT1JTLCBjb2xsZWN0aW9uOiB0cnVlIH1dO1xuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdW1tYXJpZXNNYW5hZ2VyIHtcblx0XHRyZXR1cm4gbmV3IFN1bW1hcmllc01hbmFnZXIoc3RydWN0dXJlSWQsIHRoaXMuY2FsY3VsYXRvcnMpO1xuXHR9XG5cbn1cbiJdfQ==