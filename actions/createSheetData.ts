"use server";

import {
  YG_ID_COOKIE_KEY,
  YG_INVITEDBY_COOKIE_KEY,
  YG_NAME_COOKIE_KEY,
  YG_NICKNAME_COOKIE_KEY,
  YG_STUBNO_COOKIE_KEY,
} from "@/config/site";
import { addToSheet, getSheetRowCount } from "@/services/gform";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";

export const createSheetData = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const nickname = formData.get("nickname");
  const address = formData.get("address");
  const birthday = formData.get("birthday");
  const invitedBy = formData.get("invitedBy");
  const agree_one = formData.get("agree_one");
  const agree_two = formData.get("agree_two");
  const agree_three = formData.get("agree_three");
  const agree_four = formData.get("agree_four");

  const formattedBirthday = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date(birthday as string));

  const date = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date());

  const time = new Intl.DateTimeFormat("en-us", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(new Date());

  const timestamp = `${date} ${time}`;

  const id = uuid();

  const values = [
    timestamp,
    firstName,
    lastName,
    nickname,
    address,
    formattedBirthday,
    invitedBy,
    "Yes/Opo",
    "Yes/Opo",
    "Yes/Opo",
    "",
    "Yes/Opo",
    id,
  ];

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const rowCount = await getSheetRowCount();

  const result = await addToSheet(values);

  // console.log(result);
  const url = new URL("/stub", process.env.SITE_URL);

  const name = `${firstName} ${lastName}`;
  const stubNo = String(rowCount)?.padStart(3, "0");

  url.searchParams.append("id", id);
  url.searchParams.append("name", name);
  url.searchParams.append("nickname", nickname as string);
  url.searchParams.append("invitedBy", invitedBy as string);
  url.searchParams.append("stubNo", stubNo);

  cookies().set(YG_ID_COOKIE_KEY, id);
  cookies().set(YG_NAME_COOKIE_KEY, name);
  cookies().set(YG_NICKNAME_COOKIE_KEY, nickname as string);
  cookies().set(YG_INVITEDBY_COOKIE_KEY, invitedBy as string);
  cookies().set(YG_STUBNO_COOKIE_KEY, stubNo);

  redirect(url.toString());
};
