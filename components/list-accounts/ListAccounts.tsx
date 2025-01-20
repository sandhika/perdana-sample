import { FlowTableProps } from '@/types/flow-table';
import { ActionIcon, ButtonGroup, Card, Group, Table,Text, Title,Badge  } from '@mantine/core';
import { IconCheck, IconPencil, IconPlus, IconTrash, IconX } from '@tabler/icons-react';
import { useEffect, useMemo, useRef } from 'react';
import { notifications } from "@mantine/notifications";
import { Column, PaginatedTable } from "../PaginatedTable";

import {Accounts} from "@prisma/client";


export default function ListCustomers(
    {
      data = [],
      onAdd,
      onEdit,
      onDelete,
    }: FlowTableProps<Accounts>
  ) {
  
  
    const columns = useMemo(
      () =>
        [
          {
            keyIndex: "id",
            header: () => "Id",
          },
          {
            keyIndex: "name",
            header: () => "Name",
            cell: (row: Accounts) => (
              <>
              <Text size="sm"> {row.account_no }</Text>
              <Text size="sm"> {row.name }</Text>
              <Text size="sm"> {row.account_type }</Text>
              </>
            )
          },
          {
            keyIndex: "balance",
            header: () => "Balance",
            cell: (row: Accounts) => (
              <Badge color="blue"> { row.balance }</Badge>
            )
          },
          {
            keyIndex: "createat",
            header: () => "Created At",
            cell: (row: any) => (
              <Text size="sm"> { row.created_at }</Text>
            )
          },
          
          {
            keyIndex: "name",
            header: () => "Actions",
            cell: (row: any) => (
              <ButtonGroup>
                <ActionIcon variant="transparent" onClick={() => onEdit?.(row)}>
                  <IconPencil />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  color="red"
                  onClick={() => onDelete?.(row)}
                >
                  <IconTrash />
                </ActionIcon>
               
              </ButtonGroup>
            ),
          },
        ] satisfies Column<Accounts>[],
      [onEdit, onDelete]
    );
  
    useEffect(
      ()=>{
        
      },[]
    );
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
          <Title order={5}>List Accounts :</Title>  
          <ActionIcon variant="filled" aria-label="Settings" 
            onClick={() => onAdd?.()}
          >
          <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
          </Group>
          </Card.Section>
          <PaginatedTable columns={columns} data={data} setPage={undefined} activePage={undefined} visibleLoading={undefined} toggleLoading={undefined} />
          
      </Card>
    );
  }