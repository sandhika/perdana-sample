/* eslint-disable @typescript-eslint/no-explicit-any */

export type FlowTableProps<T> = {
    data?: T[];
    onAdd?: () => void;
    onEdit?: (data: T) => void;
    onDelete?: (data: T) => void;
    onApprove?: (data: T) => void;
    onReject?: (data: T) => void;
    pageCount:number;
    setPage:any;
    activePage:any;
    readOnly:boolean;
    visibleLoading:any;
    toggleLoading:any;
  };
  