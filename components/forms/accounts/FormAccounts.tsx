import { Stack, TextInput,Select,NumberInput } from "@mantine/core";

import { UseFormReturnType } from "@mantine/form";
import {Accounts} from "@prisma/client";



export const FormCustomer = ({
  form,
}: {
  form: UseFormReturnType<Accounts>;
}) => {

  return (
    <Stack>
      <TextInput
            withAsterisk
            label="Account No :"
            placeholder="your Number"
            key={form?.key('account_no')}
            {...form?.getInputProps('account_no')}
        />
         <TextInput
            withAsterisk
            label="Name :"
            placeholder="your Name"
            key={form?.key('name')}
            {...form?.getInputProps('name')}
        />
      
        <Select
            label="Type :"
            placeholder="Pick value"
            data={['XTRA', 'TABUNGAN','TABUNGAN HAJI']}
            key={form?.key('account_type')}
         {...form?.getInputProps('account_type')}
        />

        <NumberInput
            label="Balance"
             readOnly
             key={form?.key('balance')}
         {...form?.getInputProps('balance')}
            />

    </Stack>
  );
};
