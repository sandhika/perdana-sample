
import { DelConfirmCustomer,DelConfirmCustomerRef } from '@/components/forms/customers/DelConfirmCustomers';
import { FormAddCustomer,FormAddCustomerRef } from '@/components/forms/customers/FormAddCustomers';
import { FormEditCustomer,FormEditAssetRef } from '@/components/forms/customers/FormEditCustomers';
import ListAccounts from '@/components/list-accounts/ListAccounts';


import { Paper } from '@mantine/core';
import { Customers } from '@prisma/client';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default  function AccountPage() {
  
  const { data:dataCust, error,isLoading } = useSWR<Customers[]>('/api/accounts', fetcher);

  const formAddRef = useRef< FormAddCustomerRef>(null);
  const formEditRef = useRef<FormEditAssetRef| null>(null);
  const deleteConfirmationRef = useRef<DelConfirmCustomerRef| null>(null);
  
  return (
      <Paper p="xl">
       <ListAccounts  
                      data={dataCust}
                      onAdd={() => formAddRef.current?.open()}
                      onEdit={(data) => formEditRef.current?.open(data)}
                      onDelete={(data) => deleteConfirmationRef.current?.open(data)}
                    />
         <FormAddCustomer ref={formAddRef} />
         <FormEditCustomer ref={formEditRef} />
         <DelConfirmCustomer ref={deleteConfirmationRef} />

      </Paper>
  );
}


