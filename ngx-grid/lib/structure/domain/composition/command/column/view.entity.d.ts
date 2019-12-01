import { CellView } from '../../cell-view';
export declare class ViewEntity {
    private readonly view;
    private readonly templateFunction?;
    constructor(columnView: CellView | any);
    getCellView(): CellView;
    getTemplateFunction(): any;
}
