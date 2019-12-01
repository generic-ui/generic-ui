export declare class FormationAggregate {
    private selectedRows;
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     */
    static default(): FormationAggregate;
    constructor(selectedRows: Array<string>);
    getSelectedRows(): Array<string>;
    toggleRow(selectedRow: string): void;
}
