import { 
    JsonInput, MultiSelect, MultiSelectProps,
    Combobox, Input, InputBase, Loader, useCombobox ,ComboboxProps
 } from "@mantine/core";
import { Customers } from "@prisma/client";

import { useEffect, useMemo } from "react";
import { searchCustomer } from "@/db";
import { useState } from 'react';

export const SelectRooms = (props: Omit<MultiSelectProps, "data">) => {
    const [triggerParam, responseParam] = useLazyGetProductRoomQuery();
    // const [value, setValue] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState('');
 
    useEffect(()=>{
        const params = searchValue.length > 0 ? JSON.stringify({name: { contains:  searchValue}}) : null
        if(params)
            triggerParam({where:params});
        // console.log("searchValue",searchValue);
    },[searchValue]);
   
    const dataRooms = useMemo(()=>{
        const result : any[]= [];
        if (responseParam.isSuccess && responseParam?.data?.data?.length > 0) {
            responseParam?.data?.data?.map((item: Customers) => result.push({ value: JSON.stringify({id:item.id,name: item.name}), label: item.name}));
        }
        return result;
    },[responseParam.isSuccess]);

  
  return   <MultiSelect
                {...props}
                label="Location :"
                placeholder="Select Customer"
                data={dataRooms}  
                searchValue={searchValue}
                onSearchChange={(value)=>{
                    // console.log("onsearchValue",value);
                    setSearchValue(value);
                }}
                searchable
                // onChange={values => { selectedLabel = (values.map(value => data.find(item => item.value === value))) }}
                    /> ;

};
