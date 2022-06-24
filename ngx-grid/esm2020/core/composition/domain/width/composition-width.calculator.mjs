import { ColumnWidthType } from '../column/column-width/column-width-type';
export class CompositionWidthCalculator {
    constructor(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((c) => c.clone());
    }
    calculate() {
        let width = this.width, columns = Array.from(this.columns);
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        const newColumns = [];
        columns.forEach((column, index) => {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        });
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            const evenWidth = width / columns.length;
            columns.forEach((column, index) => {
                column.setWidth(evenWidth);
            });
        }
        // adjust number columns
        // let numberColumns = this.columns.filter((columnWidth: ColumnWidth) => columnWidth.isTypeNumber());
        //
        // // sort by min values
        // numberColumns.sort((columnOne: ColumnWidth, columnTwo: ColumnWidth) => {
        // 	return columnOne.getWidth() - columnTwo.getWidth();
        // });
        //
        // numberColumns.forEach(() => {
        // });
        // this.adjustMinimalWidth(ColumnWidthType.NUMBER);
        //
        // this.adjustPercentageWidth();
        //
        // this.adjustAutoWidth();
        return this.columns;
    }
    adjustMinimalWidth(columns) {
        columns.forEach((column) => {
            if (column.isTypeNumber()) {
                if (column.getWidth() < this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(this.MIN_COLUMN_WIDTH);
                }
            }
        });
    }
    adjustPercentageWidth() {
        const percentageColumns = this.columns.filter((columnWidth) => columnWidth.isTypePercentage());
        for (const column of this.columns) {
            if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                column.setWidth(this.width * column.getWidth() * 0.01);
            }
        }
    }
    adjustAutoWidth() {
        let leftWidth = this.width;
        const autoColumns = [];
        for (let i = 0; i < this.columns.length; i += 1) {
            const column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            const splitWidth = leftWidth / autoColumns.length;
            for (const column of autoColumns) {
                column.setWidth(splitWidth);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9kb21haW4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFM0UsTUFBTSxPQUFPLDBCQUEwQjtJQUl0QyxZQUFvQixNQUEwQixFQUNuQyxLQUFhLEVBQ0osZ0JBQXdCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVM7UUFFUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUNyQixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqQyx3QkFBd0I7UUFDeEIsTUFBTSxVQUFVLEdBQXVCLEVBQUUsQ0FBQztRQUUxQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBbUIsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUN0RCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUIsS0FBSyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXJCLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRXpCLE1BQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBRXpDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFtQixFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ0g7UUFFRCx3QkFBd0I7UUFDeEIscUdBQXFHO1FBQ3JHLEVBQUU7UUFDRix3QkFBd0I7UUFDeEIsMkVBQTJFO1FBQzNFLHVEQUF1RDtRQUN2RCxNQUFNO1FBQ04sRUFBRTtRQUNGLGdDQUFnQztRQUNoQyxNQUFNO1FBRU4sbURBQW1EO1FBQ25ELEVBQUU7UUFDRixnQ0FBZ0M7UUFDaEMsRUFBRTtRQUNGLDBCQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE9BQTJCO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDdkMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDOUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDOUM7YUFDRDtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLHFCQUFxQjtRQUU1QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUU1RyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN2RDtTQUNEO0lBQ0YsQ0FBQztJQUVPLGVBQWU7UUFFdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxlQUFlLENBQUMsSUFBSSxFQUFFO2dCQUNwRCxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNOLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekI7U0FDRDtRQUVELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxVQUFVLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFbEQsS0FBSyxNQUFNLE1BQU0sSUFBSSxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDNUI7U0FDRDtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhUeXBlIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldpZHRoQ2FsY3VsYXRvciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2U6IEFycmF5PENvbHVtbldpZHRoPixcblx0XHRcdFx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcikge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuc291cmNlLm1hcCgoYykgPT4gYy5jbG9uZSgpKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiBBcnJheTxDb2x1bW5XaWR0aD4ge1xuXG5cdFx0bGV0IHdpZHRoID0gdGhpcy53aWR0aCxcblx0XHRcdGNvbHVtbnMgPSBBcnJheS5mcm9tKHRoaXMuY29sdW1ucyk7XG5cblx0XHQvLyBhZGp1c3QgbWluIHZhbHVlXG5cdFx0dGhpcy5hZGp1c3RNaW5pbWFsV2lkdGgoY29sdW1ucyk7XG5cblx0XHQvLyByZW1vdmUgbnVtYmVyIGNvbHVtbnNcblx0XHRjb25zdCBuZXdDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5pc1R5cGVOdW1iZXIoKSkge1xuXHRcdFx0XHR3aWR0aCAtPSBjb2x1bW4uZ2V0V2lkdGgoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29sdW1ucyA9IG5ld0NvbHVtbnM7XG5cblx0XHQvLyBzcGxpdCBldmVuIGF1dG8gY29sdW1uc1xuXHRcdGlmIChjb2x1bW5zLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRjb25zdCBldmVuV2lkdGggPSB3aWR0aCAvIGNvbHVtbnMubGVuZ3RoO1xuXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKGV2ZW5XaWR0aCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBhZGp1c3QgbnVtYmVyIGNvbHVtbnNcblx0XHQvLyBsZXQgbnVtYmVyQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlTnVtYmVyKCkpO1xuXHRcdC8vXG5cdFx0Ly8gLy8gc29ydCBieSBtaW4gdmFsdWVzXG5cdFx0Ly8gbnVtYmVyQ29sdW1ucy5zb3J0KChjb2x1bW5PbmU6IENvbHVtbldpZHRoLCBjb2x1bW5Ud286IENvbHVtbldpZHRoKSA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gY29sdW1uT25lLmdldFdpZHRoKCkgLSBjb2x1bW5Ud28uZ2V0V2lkdGgoKTtcblx0XHQvLyB9KTtcblx0XHQvL1xuXHRcdC8vIG51bWJlckNvbHVtbnMuZm9yRWFjaCgoKSA9PiB7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyB0aGlzLmFkanVzdE1pbmltYWxXaWR0aChDb2x1bW5XaWR0aFR5cGUuTlVNQkVSKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMuYWRqdXN0UGVyY2VudGFnZVdpZHRoKCk7XG5cdFx0Ly9cblx0XHQvLyB0aGlzLmFkanVzdEF1dG9XaWR0aCgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0TWluaW1hbFdpZHRoKGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPik6IHZvaWQge1xuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5pc1R5cGVOdW1iZXIoKSkge1xuXHRcdFx0XHRpZiAoY29sdW1uLmdldFdpZHRoKCkgPCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpIHtcblx0XHRcdFx0XHRjb2x1bW4uc2V0V2lkdGhBbmRUeXBlKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0UGVyY2VudGFnZVdpZHRoKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGVyY2VudGFnZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZVBlcmNlbnRhZ2UoKSk7XG5cblx0XHRmb3IgKGNvbnN0IGNvbHVtbiBvZiB0aGlzLmNvbHVtbnMpIHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uVHlwZSgpID09PSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRSkge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgodGhpcy53aWR0aCAqIGNvbHVtbi5nZXRXaWR0aCgpICogMC4wMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RBdXRvV2lkdGgoKTogdm9pZCB7XG5cblx0XHRsZXQgbGVmdFdpZHRoID0gdGhpcy53aWR0aDtcblx0XHRjb25zdCBhdXRvQ29sdW1ucyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtblR5cGUoKSAhPT0gQ29sdW1uV2lkdGhUeXBlLkFVVE8pIHtcblx0XHRcdFx0bGVmdFdpZHRoIC09IGNvbHVtbi5nZXRXaWR0aCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXV0b0NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhdXRvQ29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBzcGxpdFdpZHRoID0gbGVmdFdpZHRoIC8gYXV0b0NvbHVtbnMubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGNvbHVtbiBvZiBhdXRvQ29sdW1ucykge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgoc3BsaXRXaWR0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==