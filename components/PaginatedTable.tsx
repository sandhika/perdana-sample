/* eslint-disable @typescript-eslint/no-explicit-any */
import { NestedPaths } from "@/types/nested-paths";
import {
  Table,
  TableThead,
  TableTr,
  TableTh,
  TableTbody,
  TableTd,
  Flex,
  Pagination,
  Stack,
  LoadingOverlay
} from "@mantine/core";
import _ from "lodash";
import {  ReactNode } from "react";


export type Column<T> = {
  keyIndex: NestedPaths<T>;
  header: () => ReactNode;
  cell?: (row: T) => ReactNode;
};

type PaginatedTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  pages?: number;
  setPage:any;
  activePage:any;
  visibleLoading:any;
  toggleLoading:any;
};

export const PaginatedTable = <T,>({
  columns,
  data,
  pages = 0,
  setPage,
  activePage,
  toggleLoading,
  visibleLoading
}: PaginatedTableProps<T>) => {

  
  return (
    <Stack>
      <LoadingOverlay visible={visibleLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Table striped highlightOnHover>
        <TableThead>
          <TableTr>
            {columns.map((column, index) => (
              <TableTh key={index}>{column.header()}</TableTh>
            ))}
          </TableTr>
        </TableThead>
        <TableTbody>
          {data.map((row, index) => (
            <TableTr key={index}>
              {columns.map((column, columnIndex) => (
                <TableTd key={columnIndex}>
                  {column.cell
                    ? column.cell(row)
                    : _.get(row, column.keyIndex as string)}
                </TableTd>
              ))}
            </TableTr>
          ))}
        </TableTbody>
      </Table>
      {pages > 0 && (
        <Flex justify="center">
          <Pagination total={pages} value={activePage} onChange={setPage} />
        </Flex>
      )}
    </Stack>
  );
};
