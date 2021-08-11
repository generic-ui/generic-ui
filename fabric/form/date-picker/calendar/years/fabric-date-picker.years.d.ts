export declare class FabricDatePickerYears {
    private rowsForDisplay;
    private minYear;
    private maxYear;
    private selectedYear;
    private readonly inc;
    getYears(selectedYear: number): Array<Array<number>>;
    prevYearRange(year: number): Array<Array<number>>;
    nextYearRange(year: number): Array<Array<number>>;
    private createYearsPool;
    private divideYearsPool;
    private createRowsForDisplay;
}
