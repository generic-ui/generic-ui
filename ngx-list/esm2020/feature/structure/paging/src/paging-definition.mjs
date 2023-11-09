import { GenericBuilder } from '../../../../core/common/src/cdk/generic-builder';
export class StructurePagingDefinitionBuilder extends GenericBuilder {
    constructor(enabled) {
        super();
        this.enabled = enabled;
    }
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    buildObject() {
        return new PagingDefinition(this.enabled);
    }
}
export class StructurePagingDefinitionDefaultBuilder extends StructurePagingDefinitionBuilder {
    constructor() {
        super(StructurePagingDefinitionDefaultBuilder.defaultEnabled);
    }
}
StructurePagingDefinitionDefaultBuilder.defaultEnabled = true;
export class PagingDefinition {
    constructor(enabled) {
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
PagingDefinition.Builder = StructurePagingDefinitionBuilder;
PagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvcGFnaW5nLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRWpGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxjQUFnQztJQUlyRixZQUFZLE9BQWdCO1FBQzNCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNEO0FBRUQsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLGdDQUFnQztJQUk1RjtRQUNDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRCxDQUFDOztBQUp1QixzREFBYyxHQUFHLElBQUksQ0FBQztBQU8vQyxNQUFNLE9BQU8sZ0JBQWdCO0lBUTVCLFlBQVksT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7QUFaTSx3QkFBTyxHQUFHLGdDQUFnQyxDQUFDO0FBRTNDLCtCQUFjLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tbW9uL3NyYy9jZGsvZ2VuZXJpYy1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8UGFnaW5nRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0d2l0aEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJ1aWxkT2JqZWN0KCk6IFBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgUGFnaW5nRGVmaW5pdGlvbih0aGlzLmVuYWJsZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEVuYWJsZWQgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0RW5hYmxlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RlZmluaXRpb24ge1xuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cbn1cbiJdfQ==