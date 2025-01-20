//@ts-nocheck
import { DelConfirmCustomer,DelConfirmCustomerRef } from '@/components/forms/customers/DelConfirmCustomers';
import { FormAddCustomer,FormAddCustomerRef } from '@/components/forms/customers/FormAddCustomers';
import { FormEditCustomer,FormEditAssetRef } from '@/components/forms/customers/FormEditCustomers';
import ListCustomers from '@/components/list-customers/ListCustomers';

import prisma from '@/db';
import { Paper } from '@mantine/core';
import { Customers } from '@prisma/client';
import { useEffect, useRef, useState } from 'react';

export default  function CustomerPage() {
  const [dataCust,setDataCust] = useState<Customers[]>([]);
  

    
  useEffect(async ()=>{
    const result = await prisma.customers.findMany({});
    setDataCust(result);

  },[]);
  const formAddRef = useRef< FormAddCustomerRef>(null);
  const formEditRef = useRef<FormEditAssetRef| null>(null);
  const deleteConfirmationRef = useRef<DelConfirmCustomerRef| null>(null);
  
  return (
      <Paper p="xl">
       <ListCustomers  
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
