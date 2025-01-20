import { Stack, TextInput,Textarea,Select } from "@mantine/core";
import { DatePickerInput } from '@mantine/dates';

import { UseFormReturnType } from "@mantine/form";
import {Customers} from "@prisma/client";



export const FormCustomer = ({
  form,
}: {
  form: UseFormReturnType<Customers>;
}) => {

  return (
    <Stack>
      <TextInput
            withAsterisk
            label="CIF :"
            placeholder="your CIF"
            key={form?.key('cif')}
            {...form?.getInputProps('cif')}
        />
         <TextInput
            withAsterisk
            label="Full Name :"
            placeholder="your Full Name"
            key={form?.key('name')}
            {...form?.getInputProps('name')}
        />
        <TextInput
          
            label="Place of Birth : "
            placeholder="your Place of Birth"
            key={form?.key('birth_place')}
            {...form?.getInputProps('birth_place')}
        />
        <DatePickerInput label="Birth Date :" placeholder="Pick date and time" 
         key={form?.key('birth_date')}
         {...form?.getInputProps('birth_date')}
        />
        <Select
            label="Gender :"
            placeholder="Pick value"
            data={['PRIA', 'WANITA']}
            key={form?.key('gender')}
         {...form?.getInputProps('gender')}
        />
        <TextInput
            withAsterisk
            label="Email Address : "
            placeholder="your@email.com"
            key={form?.key('email')}
            {...form?.getInputProps('email')}
        />
        
        <TextInput
            withAsterisk
            label="Phone Number : "
            placeholder="your Phone Number"
            key={form?.key('phone')}
            {...form?.getInputProps('phone')}
        />

        <Textarea
            label="Address :"
            placeholder="Input your Address"
            key={form?.key('address')}
         {...form?.getInputProps('address')}
        />

    </Stack>
  );
};
