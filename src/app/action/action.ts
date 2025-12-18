"use server";

import { z } from "zod";

/* ============================
   NEWSLETTER SUBSCRIPTION
============================ */

const userMail = z.object({
  subscriptionMail: z
    .string()
    .email("Please be sure the input is a valid Email"),
});
type UserInput = z.infer<typeof userMail>;
export type FormState = {
  success: boolean;
  data?: UserInput;
  error?: Record<string, string[]>;
};
export async function submitMail(
  prevState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const rawData: UserInput = {
    subscriptionMail: formData.get("subscriptionMail") as string,
  };
  const parsed = userMail.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
      data: { subscriptionMail: formData.get("subscriptionMail") as string },
    };
  }
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { email: parsed.data.subscriptionMail } }),
    });
    return { success: true, data: parsed.data, error: {} };
  } catch (err) {
    return { success: false, error: { fetch: ["Network error occurred"] } };
  }
}

/* ============================
            COMMENTS
============================ */

const commentSchema = z.object({
  blogpostId: z.coerce.number(),
  userName: z
    .string("Please write your a valid name")
    .min(3, { message: "Input must be longer then 3 characters long." })
    .max(20, { message: "Input must be less then 20 characters long." }),
  userMail: z.string().email("Please be sure the input is a valid Email"),
  comment: z
    .string("Please write your a Comment")
    .min(10, {
      message: "Your Comment must be longer then 10 characters long.",
    })
    .max(300, {
      message: "Your Comment must be less then 300 characters long.",
    }),
});

export type CommentInput = z.infer<typeof commentSchema>;

export type CommentFormState = {
  success: boolean;
  data?: CommentInput;
  error?: Record<string, string[]>;
};

export async function submitComment(
  prevState: CommentFormState | undefined,
  formData: FormData
): Promise<CommentFormState> {
  const rawData: CommentInput = {
    blogpostId: Number(formData.get("blogpostId")),
    userName: formData.get("userName") as string,
    userMail: formData.get("userMail") as string,
    comment: formData.get("comment") as string,
  };

  const parsed = commentSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
      data: {
        blogpostId: Number(formData.get("blogpostId")),
        userName: formData.get("userName") as string,
        userMail: formData.get("userMail") as string,
        comment: formData.get("comment") as string,
      },
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blogpostId: parsed.data.blogpostId,
        name: parsed.data.userName,
        mail: parsed.data.userMail,
        content: parsed.data.comment,
        date: new Date().toISOString(),
      }),
    });

    return {
      success: true,
      data: parsed.data,
      error: {},
    };
  } catch {
    return {
      success: false,
      error: { fetch: ["Network error occurred"] },
    };
  }
}

/* ============================
            CONTACT US
============================ */

const contactSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Input must be longer then 3 characters long." })
    .max(20, { message: "Input must be less then 20 characters long." }),
  userMail: z.string().email("Please be sure the input is a valid Email"),
  comment: z
    .string()
    .min(10, {
      message: "Your Comment must be longer then 10 characters long.",
    })
    .max(300, {
      message: "Your Comment must be less then 300 characters long.",
    }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  data?: ContactInput;
  error?: Record<string, string[]>;
};

export async function submitContact(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const rawData: ContactInput = {
    userName: formData.get("userName") as string,
    userMail: formData.get("userMail") as string,
    comment: formData.get("comment") as string,
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
      data: {
        userName: formData.get("userName") as string,
        userMail: formData.get("userMail") as string,
        comment: formData.get("comment") as string,
      },
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fetch("http://localhost:4000/contact_messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: parsed.data.userName,
        mail: parsed.data.userMail,
        content: parsed.data.comment,
        date: new Date().toISOString(),
      }),
    });

    return {
      success: true,
      data: parsed.data,
      error: {},
    };
  } catch {
    return {
      success: false,
      error: { fetch: ["Network error occurred"] },
    };
  }
}

/* ============================
            RESERVE TABLE
============================ */

export type ReserveFormState = {
  success: boolean;
  data?: any;
  error?: Record<string, string[]>;
};

export async function submitReserve(
  prevState: ReserveFormState | undefined,
  formData: FormData
): Promise<ReserveFormState> {
  const rawData = {
    userName: formData.get("userName"),
    userMail: formData.get("userMail"),
    userTable: formData.get("userTable"),
    guestNumber: formData.get("guestNumber"),
    userDate: formData.get("userDate"),
    userContact: formData.get("userContact"),
    comment: formData.get("comment"),
  };

  const reservedRes = await fetch(
    `http://localhost:4000/reservations?date=${rawData.userDate}`
  );
  const reservedData = await reservedRes.json();
  const reservedTables = reservedData.map((r: any) => Number(r.table));

  const schema = z.object({
    userName: z
      .string()
      .min(3, { message: "Input must be longer than 3 characters" })
      .max(20, { message: "Input must be less than 20 characters" }),
    userMail: z.string().email("Please enter a valid Email"),
    userTable: z.coerce
      .number()
      .min(1, { message: "Please type a number between 1-15" })
      .max(15, { message: "Please type a number between 1-15" })
      .refine((val) => !reservedTables.includes(val), {
        message:
          "This table is already reserved (marked as red), please pick another",
      }),
    guestNumber: z.coerce
      .number()
      .min(1, { message: "At least 1 guest is expected per reservation" })
      .max(8, { message: "We do not have tables for more than 8 guests" }),
    userDate: z.string().min(1, { message: "Please select a date" }),
    userContact: z.string().regex(/^\+?\d[\d\s-]{6,14}\d$/, {
      message: "Please enter a valid phone number",
    }),
    comment: z.string().optional(),
  });

  const parsed = schema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
      data: {
        userName: formData.get("userName"),
        userMail: formData.get("userMail"),
        userTable: formData.get("userTable"),
        guestNumber: formData.get("guestNumber"),
        userDate: formData.get("userDate"),
        userContact: formData.get("userContact"),
        comment: formData.get("comment"),
      },
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fetch("http://localhost:4000/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: parsed.data.userName,
        email: parsed.data.userMail,
        date: parsed.data.userDate,
        table: parsed.data.userTable,
        guests: parsed.data.guestNumber,
        phone: parsed.data.userContact,
      }),
    });

    return {
      success: true,
      data: parsed.data,
      error: {},
    };
  } catch {
    return {
      success: false,
      error: { fetch: ["Network error occurred"] },
    };
  }
}
