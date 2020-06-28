import { ColumnSortingConfig } from '../../../../../../lib/composition/domain/sort/column-sorting.config';
import { GuiColumnSorting } from '../../../../../../gui.grid.index';
export declare class GuiGridColumnSortingConverter {
    convert(sortingConfig: GuiColumnSorting): ColumnSortingConfig;
}
