import { GenericBuilder } from '../../../../core/common/src/cdk/generic-builder';
import { PagingDefinition } from '../../../../feature/structure/paging/src/paging-definition';
export class StructureDefinitionBuilder extends GenericBuilder {
    headerEnabled;
    bottomPaging;
    topPaging;
    border = true;
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
    }
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
}
export class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    static defaultHeaderEnabled = true;
    static defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
    static defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
export class StructureDefinition {
    static Builder = StructureDefinitionBuilder;
    static DefaultBuilder = StructureDefinitionDefaultBuilder;
    headerEnabled;
    bottomPaging;
    topPaging;
    border;
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    isBorderEnabled() {
        return this.border;
    }
    getBottomPaging() {
        return this.bottomPaging;
    }
    getTopPaging() {
        return this.topPaging;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFOUYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQW1DO0lBSTlEO0lBQ1Q7SUFDQTtJQUpILE1BQU0sR0FBWSxJQUFJLENBQUM7SUFFL0IsWUFBb0IsYUFBc0IsRUFDL0IsWUFBOEIsRUFDOUIsU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFIVyxrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFdEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUF3QjtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBd0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVTLFdBQVc7UUFDcEIsT0FBTyxJQUFJLG1CQUFtQixDQUM3QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxNQUFNLENBQ1gsQ0FBQztJQUNILENBQUM7Q0FFRDtBQUVELE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSwwQkFBMEI7SUFFeEUsTUFBTSxDQUFVLG9CQUFvQixHQUFZLElBQUksQ0FBQztJQUNyRCxNQUFNLENBQVUsbUJBQW1CLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEcsTUFBTSxDQUFVLGdCQUFnQixHQUFxQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNHO1FBQ0MsS0FBSyxDQUNKLGlDQUFpQyxDQUFDLG9CQUFvQixFQUN0RCxpQ0FBaUMsQ0FBQyxtQkFBbUIsRUFDckQsaUNBQWlDLENBQUMsZ0JBQWdCLENBQ2xELENBQUM7SUFDSCxDQUFDOztBQUdGLE1BQU0sT0FBTyxtQkFBbUI7SUFFL0IsTUFBTSxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztJQUU1QyxNQUFNLENBQUMsY0FBYyxHQUFHLGlDQUFpQyxDQUFDO0lBRXpDLGFBQWEsQ0FBVTtJQUV2QixZQUFZLENBQW1CO0lBRS9CLFNBQVMsQ0FBbUI7SUFFNUIsTUFBTSxDQUFVO0lBRWpDLFlBQVksYUFBc0IsRUFDL0IsWUFBOEIsRUFDOUIsU0FBMkIsRUFDM0IsTUFBZTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbW1vbi9zcmMvY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmdEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9wYWdpbmctZGVmaW5pdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFN0cnVjdHVyZURlZmluaXRpb24+IHtcblxuXHRwcml2YXRlIGJvcmRlcjogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSB0b3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0d2l0aEhlYWRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm90dG9tUGFnaW5nKHBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhUb3BQYWdpbmcocGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMudG9wUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvcmRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm9yZGVyID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByb3RlY3RlZCBidWlsZE9iamVjdCgpOiBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24oXG5cdFx0XHR0aGlzLmhlYWRlckVuYWJsZWQsXG5cdFx0XHR0aGlzLmJvdHRvbVBhZ2luZyxcblx0XHRcdHRoaXMudG9wUGFnaW5nLFxuXHRcdFx0dGhpcy5ib3JkZXJcblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlciBleHRlbmRzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0SGVhZGVyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRCb3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24gPSBuZXcgUGFnaW5nRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRUb3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24gPSBuZXcgUGFnaW5nRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEhlYWRlckVuYWJsZWQsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEJvdHRvbVBhZ2luZyxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0VG9wUGFnaW5nXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cblx0c3RhdGljIEJ1aWxkZXIgPSBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlcjtcblxuXHRzdGF0aWMgRGVmYXVsdEJ1aWxkZXIgPSBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYm9yZGVyOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0dG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRib3JkZXI6IGJvb2xlYW4pIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBoZWFkZXJFbmFibGVkO1xuXHRcdHRoaXMuYm90dG9tUGFnaW5nID0gYm90dG9tUGFnaW5nO1xuXHRcdHRoaXMudG9wUGFnaW5nID0gdG9wUGFnaW5nO1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHR9XG5cblx0aXNIZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0JvcmRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm9yZGVyO1xuXHR9XG5cblx0Z2V0Qm90dG9tUGFnaW5nKCk6IFBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmJvdHRvbVBhZ2luZztcblx0fVxuXG5cdGdldFRvcFBhZ2luZygpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy50b3BQYWdpbmc7XG5cdH1cblxufVxuIl19