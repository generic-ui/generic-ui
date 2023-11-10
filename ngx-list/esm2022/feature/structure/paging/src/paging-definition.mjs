import { GenericBuilder } from '../../../../core/common/src/cdk/generic-builder';
export class StructurePagingDefinitionBuilder extends GenericBuilder {
    enabled;
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
    static defaultEnabled = true;
    constructor() {
        super(StructurePagingDefinitionDefaultBuilder.defaultEnabled);
    }
}
export class PagingDefinition {
    static Builder = StructurePagingDefinitionBuilder;
    static DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
    enabled;
    constructor(enabled) {
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvcGFnaW5nLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRWpGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxjQUFnQztJQUU3RSxPQUFPLENBQVU7SUFFekIsWUFBWSxPQUFnQjtRQUMzQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRDtBQUVELE1BQU0sT0FBTyx1Q0FBd0MsU0FBUSxnQ0FBZ0M7SUFFcEYsTUFBTSxDQUFVLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFFOUM7UUFDQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7QUFHRixNQUFNLE9BQU8sZ0JBQWdCO0lBRTVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0NBQWdDLENBQUM7SUFFbEQsTUFBTSxDQUFDLGNBQWMsR0FBRyx1Q0FBdUMsQ0FBQztJQUUvQyxPQUFPLENBQVU7SUFFbEMsWUFBWSxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbW1vbi9zcmMvY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFBhZ2luZ0RlZmluaXRpb24+IHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHdpdGhFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByb3RlY3RlZCBidWlsZE9iamVjdCgpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZ0RlZmluaXRpb24odGhpcy5lbmFibGVkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyIGV4dGVuZHMgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRFbmFibGVkID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEVuYWJsZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdEZWZpbml0aW9uIHtcblxuXHRzdGF0aWMgQnVpbGRlciA9IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyO1xuXG5cdHN0YXRpYyBEZWZhdWx0QnVpbGRlciA9IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG59XG4iXX0=