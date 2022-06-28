import { ReadModelRoot } from '@generic-ui/hermes';
export class CompositionReadModeRoot extends ReadModelRoot {
    constructor(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        super(uid);
        this.ready = ready;
        this.allColumns = allColumns;
        this.activeColumns = activeColumns;
        this.width = width;
        this.resizeWidth = resizeWidth;
    }
    getActiveColumns() {
        return this.activeColumns;
    }
    getAllColumns() {
        return this.allColumns;
    }
    getActiveHeaderColumns() {
        return this.getActiveColumns()
            .map((column, index) => column.toHeaderCellTemplateWithContext(index));
    }
    getHeaderColumns() {
        return this.getAllColumns()
            .map((column, index) => column.toHeaderCellTemplateWithContext(index));
    }
    getTemplateColumns() {
        return this.getActiveColumns()
            .map((column) => column.toContentCellTemplateWithAccessor());
    }
    getWidth() {
        return this.width;
    }
    getContainerWidth() {
        return +this.width - 2;
    }
    isReady() {
        return this.ready;
    }
    isResizeWidthEnabled() {
        return this.resizeWidth;
    }
    equals(composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    }
    equalsByColumns(columns) {
        return this.allColumns.length === columns.length;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFuRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBeUM7SUFFckYsWUFBWSxHQUErQixFQUN2QixLQUFjLEVBQ2QsVUFBbUMsRUFDbkMsYUFBc0MsRUFDdEMsS0FBYSxFQUNiLFdBQW9CO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUxRLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBRXhDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRTthQUNyQixHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBb0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFnQztRQUMvQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkPiB7XG5cblx0Y29uc3RydWN0b3IodWlkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZWFkeTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVdpZHRoOiBib29sZWFuKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdH1cblxuXHRnZXRBbGxDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi50b0hlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLnRvSGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uKSA9PiBjb2x1bW4udG9Db250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCkpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLndpZHRoIC0gMjtcblx0fVxuXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVhZHk7XG5cdH1cblxuXHRpc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aDtcblx0fVxuXG5cdGVxdWFscyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aCA9PT0gY29tcG9zaXRpb24ud2lkdGggJiZcblx0XHRcdHRoaXMucmVzaXplV2lkdGggPT09IGNvbXBvc2l0aW9uLnJlc2l6ZVdpZHRoICYmXG5cdFx0XHR0aGlzLmVxdWFsc0J5Q29sdW1ucyhjb21wb3NpdGlvbi5hbGxDb2x1bW5zKTtcblx0fVxuXG5cdGVxdWFsc0J5Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMubGVuZ3RoID09PSBjb2x1bW5zLmxlbmd0aDtcblx0fVxuXG59XG4iXX0=