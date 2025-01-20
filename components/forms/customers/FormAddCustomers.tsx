import { Button, Flex, Modal, Stack, Title } from "@mantine/core";
import { FormCustomer} from "./FormCustomers";
import {Customers} from "@prisma/client";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { updateCustomer } from "@/db";



export type FormAddCustomerRef = {
  open: () => void;
};



export const FormAddCustomer = forwardRef<FormAddCustomerRef>(function FormAddCustomer(
    props,
    ref
  ) {
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formCust = useForm<Customers>(
   {
    name: "",
    id: 0,
    cif: "",
    birth_place: "",
    birth_date: new Date(),
    gender: "",
    email: "",
    phone: "",
    address: ""
  });

  useImperativeHandle(ref, () => ({
    open: () => setOpened(true)
  }));

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<Title order={4}>Add New Customer</Title>}
    >
      <form
        onSubmit={formCust.onSubmit(async (values) => {
          // Change Me:
          
          setIsLoading(true);
          
          await updateCustomer(values);
          


          setTimeout(() => {
            setOpened(false);
            setIsLoading(false);
            notifications.show({
              title: "Add Notification",
              message: "Add Customer successfully created",
            });
          }, 1000);
        })}
      >
        <Stack>
          <FormCustomer form={formCust} />
          <Flex justify="end" gap="lg">
            <Button variant="subtle" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button loading={isLoading} type="submit">
              Save
            </Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  );
});
