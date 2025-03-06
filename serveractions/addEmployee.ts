"use server";
import prisma from '@/lib/db'
export async function addEmployee(formData:FormData){
    await prisma.employees.create({
        data:{
            name: formData.get("name") as string, 
            tech_stack: formData.get("techStack") as string
        }
    });
    console.log(formData)
    //my-app\app\serveractions\addEmployee.ts
}