export declare class FabricDatePickerYears {
    private rowsForDisplay;
    private minYear;
    private maxYear;
    private year;
    private readonly inc;
    getYears(selectedYear: number): Array<Array<number>>;
    prevYearRange(): number[][];
    nextYearRange(): number[][];
    private createYearsPool;
    private divideYearsPool;
    private createRowsForDisplay;
}
