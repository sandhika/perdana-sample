import { Button, Flex, Modal, Stack, Text, Title } from "@mantine/core";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { notifications } from "@mantine/notifications";
import prisma,{delCustomer} from "@/db";
import {Customers} from "@prisma/client";



export type DelConfirmCustomerRef = {
  open: (item: Customers) => void;
};

export const DelConfirmCustomer = forwardRef<DelConfirmCustomerRef>(
  function DelConfirmCustomer(props, ref) {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState<Customers | null>(null);
    const [isLoading, setLoading] = useState(false);
    
    const onConfirm = useCallback(async () => {
      // Change Me:
      console.log(selected);
      setLoading(true);
      setTimeout(async () => {
        setSelected(null);
        setOpened(false);
        setLoading(false);
        await delCustomer({id:selected.id});
        notifications.show({
          title: "Delete Notification",
          message: "Customer successfully deleted",
        });
      }, 1000);
    }, [selected]);

    useImperativeHandle(ref, () => ({
      open: (item: Customers) => {
        setSelected(item);
        setOpened(true);
      },
    }));

    return (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title order={4}>Delete Customer</Title>}
      >
        <Stack>
          <Text>Are you sure?</Text>
          <Flex justify="end" gap="lg">
            <Button onClick={() => setOpened(false)}>No</Button>
            <Button
              loading={isLoading}
              variant="subtle"
              color="red"
              onClick={onConfirm}
            >
              Yes
            </Button>
          </Flex>
        </Stack>
      </Modal>
    );
  }
);
