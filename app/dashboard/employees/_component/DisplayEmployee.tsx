import React from 'react'
import prisma from '@/lib/db';
export async function DisplayEmployee(formData:FormData){
    const displayValue = await prisma.employees.findMany();
   
    console.log(displayValue);
  }


export default DisplayEmployee
