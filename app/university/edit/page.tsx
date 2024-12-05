"use client";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../_component/SubmitButton";
import { style } from "../constants/style";
import updatePost from "../_actions/updatePost";

export default function Edit({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const {
    id,
    name,
    state,
    city,
    rank,
    description,
    website,
    studentCount,
    acceptance,
    type,
    imageUrl,
  } = searchParams;
  console.log(
    "Id: ",
    id,
    name,
    state,
    city,
    rank,
    description,
    website,
    studentCount,
    acceptance,
    type,
    imageUrl
  );

  const [data, action] = useFormState(updatePost, {});

  if (data.message) {
    redirect("/university");
  }

  return (
    <>
      Edit University
      <hr />
      <form action={action} className="mt-4">
        <input type="hidden" name="id" value={id} />
        {Object.entries(searchParams).map(([key, value]) => {
          if (key !== "id") {
            return (
              <div className="flex flex-col mb-2" key={key}>
                <label htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  className={style}
                  type={
                    key === "website" || key === "imageUrl" ? "url" : "text"
                  }
                  name={key}
                  id={key}
                  defaultValue={value}
                  required
                />
                {data.error?.[key] && (
                  <div className="text-red-600">{data.error?.[key][0]}</div>
                )}
              </div>
            );
          }
        })}
        {data.error?.message && (
          <div className="text-red-600">{data.error?.message}</div>
        )}
        <SubmitButton label="Update" />
      </form>
      <br />
      <hr />
      <Link href="/university">Back</Link>
    </>
  );
}
