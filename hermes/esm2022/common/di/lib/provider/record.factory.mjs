import { Dependency } from './dependency';
export class RecordFactory {
    provider;
    constructor(provider) {
        this.provider = provider;
    }
    getDeps() {
        return (this.provider.services || []).map((service) => new Dependency(service));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL2RpL2xpYi9wcm92aWRlci9yZWNvcmQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sT0FBZ0IsYUFBYTtJQUVPO0lBQXpDLFlBQXlDLFFBQXVCO1FBQXZCLGFBQVEsR0FBUixRQUFRLENBQWU7SUFDaEUsQ0FBQztJQUlELE9BQU87UUFDTixPQUFPLENBQUUsSUFBSSxDQUFDLFFBQWdCLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc1Byb3ZpZGVyIH0gZnJvbSAnLi9jbGFzcy9jbGFzcy1wcm92aWRlcic7XG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSAnLi9kZXBlbmRlbmN5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlY29yZEZhY3Rvcnkge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgcHJvdmlkZXI6IENsYXNzUHJvdmlkZXIpIHtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZShkZXBzSW5zdGFuY2VzOiBSZWFkb25seUFycmF5PGFueT4pOiBhbnk7XG5cblx0Z2V0RGVwcygpOiBSZWFkb25seUFycmF5PERlcGVuZGVuY3k+IHtcblx0XHRyZXR1cm4gKCh0aGlzLnByb3ZpZGVyIGFzIGFueSkuc2VydmljZXMgfHwgW10pLm1hcCgoc2VydmljZTogYW55KSA9PiBuZXcgRGVwZW5kZW5jeShzZXJ2aWNlKSk7XG5cdH1cblxufVxuIl19