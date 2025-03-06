"use server";
import prisma from '@/lib/db';

export async function addInterview(formData: FormData) {
  try {
    // Get form data
    const projectName = formData.get("name") as string;
    const companyName = formData.get("companyName") as string;
    const candidateName = formData.get("candidateName") as string;
    const helperName = formData.get("helperName") as string;
    const techStack = formData.get("techStack") as string;
    const status = formData.get("status") as string;
    const date = formData.get("date") as string; // Expected format: yyyy-MM-dd
    const time = formData.get("time") as string; // Expected format: HH:mm
    const rounds = parseInt(formData.get("rounds") as string); // Parse rounds as a number

   /* if (!date || !time || isNaN(rounds)) {
      throw new Error("Missing or invalid date, time, or rounds.");
    }*/

    // Combine date and time into a single valid Date string
    const dateTimeString = `${date}T${time}:00`; // Example: "2025-03-06T14:30:00"
    const interviewDateTime = new Date(dateTimeString);

    // Check if the Date is valid
    /*if (isNaN(interviewDateTime.getTime())) {
      throw new Error("Invalid date or time format.");
    }*/

    // Create interview record in the database
    await prisma.interviews.create({
      data: {
        project_name: projectName,
        company_name: companyName,
        candidate_name: candidateName,
        helper_name: helperName,
        tech_stack: techStack,
        status: status,
        date: interviewDateTime, // Pass the correctly formatted Date object
        time: interviewDateTime,
        rounds: rounds
      },
    });

    console.log("Interview data added:", {
      projectName,
      companyName,
      candidateName,
      helperName,
      techStack,
      status,
      dateTimeString,
      rounds,
    });
  } catch (error) {
    console.error("Error adding interview:", error);
  }
}
