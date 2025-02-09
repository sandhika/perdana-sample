import { Button, Flex, Modal, Stack, Title } from "@mantine/core";
import { FormCustomer } from "./FormCustomers";
import {Customers} from "@prisma/client";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import prisma from "@/db";
import dayjs from "dayjs";

import { updateCustomer } from "@/db";

export type FormEditAssetRef = {
  open: (item: Customers) => void;
};

export const FormEditCustomer = forwardRef<FormEditCustomerRef>(function FormEditCustomer(
  props,
  ref
) {
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const formCust = useForm<Customers>({ 
    initialValues: {
        name: "",
        id: 0,
        cif: "",
        birth_place: "",
        birth_date: new Date(),
        gender: "",
        email: "",
        phone: "",
        address: ""
    },
  });

  useImperativeHandle(ref, () => ({
    open: (item: Customers) => {
    formCust.setValues({
        name: item.name,
        id: item.id,
        cif: item.cif,
        birth_place: item.birth_place,
        birth_date: dayjs(item.birth_date).toDate(),
        gender: item.gender,
        email: item.email,
        phone: item.phone,
        address: item.address
      });
      setOpened(true);
    },
  }));

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<Title order={4}>Edit Customer</Title>}
    >
      <form
        onSubmit={formCust.onSubmit((values) => {
          // Change Me:
          console.log(values);
          setIsLoading(true);
          setTimeout(async () => {
            setOpened(false);
            setIsLoading(false);

            await updateCustomer(values);


            notifications.show({
              title: "Update Notification",
              message: "Customer successfully updated",
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
